import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getPets, savePets } from "../services/petStorage";

export default function PetCards() {
  const [pets, setPets] = useState([]);
  const [modalPet, setModalPet] = useState(null);
  const [form, setForm] = useState({
    foto: "",
    nome: "",
    endereco: "",
    telefone: "",
    pixChave: "",
    pixTipo: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPets(getPets());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function openModal(pet) {
    setModalPet(pet);
    setForm({
      foto: "",
      nome: "",
      endereco: "",
      telefone: "",
      pixChave: "",
      pixTipo: ""
    });
  }

  function closeModal() {
    setModalPet(null);
    setLoading(false);
  }

  function handleEnviar() {
    // validação simples
    const camposObrigatorios = ["foto", "nome", "endereco", "telefone"];
    const faltando = camposObrigatorios.filter(c => !form[c].trim());
    if (faltando.length > 0) {
      alert("Preencha todos os campos obrigatórios, por favor.");
      return;
    }

    // validação PIX se houver recompensa
    if (modalPet.recompensa) {
      if (!form.pixChave.trim() || !form.pixTipo.trim()) {
        alert("Como há recompensa, você precisa preencher os dados de PIX");
        return;
      }
    }

    // Atualiza status para "verificando"
    const petsAtualizados = pets.map(p =>
      p.id === modalPet.id
        ? { ...p, status: "verificando", encontrador: { ...form } }
        : p
    );
    savePets(petsAtualizados);
    setPets(petsAtualizados);
    setLoading(true);

    // Mock backend: após 5s confirma e marca como encontrado
    const mensagem = modalPet.recompensa
      ? `Animal identificado pelo tutor! Retorno já realizado! Pix enviado para ${form.nome}. Muito obrigado por ajudar no reencontro!`
      : `Animal identificado pelo tutor! Retorno já realizado! Muito obrigado por ajudar a achar o animal.`;

    setTimeout(() => {
      const petsConfirmados = petsAtualizados.map(p =>
        p.id === modalPet.id
          ? { ...p, status: "encontrado" }
          : p
      );
      savePets(petsConfirmados);
      setPets(petsConfirmados);
      setLoading(false);
      closeModal();
      alert(mensagem);
    }, 5000);
  }

  return (
    <section id="perdidos" className="py-12 bg-white">
      <h2 className="text-2xl md:text-4xl font-title mb-8">Pets que estão longe de casa</h2>

      <div className="grid md:grid-cols-4 gap-4">
        {pets.map((pet, index) => (
          <motion.div
            key={pet.id}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={pet.imagem}
              alt={pet.nome}
              className="w-full h-245 object-cover rounded-xl mb-6"
            />

            <div className="px-4">
              <h3 className="text-xl text-center font-title mb-2">{pet.nome}</h3>
              <p className="text-text text-center mb-2">
                {pet.especie}, {pet.idade}
              </p>
              <p className="text-text mb-2">
                <strong>Visto por último:</strong><br />
                {pet.visto}
              </p>
              {pet.descricao && (
                <p className="text-text mb-2">
                  <strong>Descrição:</strong> {pet.descricao}
                </p>
              )}
              <p className="text-text mb-2">
                <strong>Responsável:</strong><br />
                {pet.contato.nome} - {pet.contato.telefone}
              </p>
              <p className="text-text mb-2">
                {pet.recompensa 
                  ? `Recompensa: R$ ${pet.recompensa}` 
                  : "Sem recompensa oferecida"}
              </p>

            {pet.status === "perdido" && (
              <button
                className="mb-3 w-full bg-primary text-white rounded-xl py-2"
                onClick={() => openModal(pet)}
              >
                Eu encontrei
              </button>
            )}
            {pet.status === "verificando" && (
              <div className="mb-3 w-full flex justify-center">
                <span className="w-full text-center bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-xl">
                  Verificando...
                </span>
              </div>
            )}
            {pet.status === "encontrado" && (
              <div className="mb-3 w-full flex justify-center">
                <span className="w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-xl">
                  Encontrado
                </span>
              </div>
            )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalPet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md relative">
            <h3 className="text-xl font-semibold mb-4">
              Informações de quem encontrou {modalPet.nome}
            </h3>

            <div className="grid gap-3">
              <input
                name="foto"
                value={form.foto}
                onChange={handleChange}
                placeholder="Foto do animal (URL)"
                className="w-full p-2 border rounded"
              />
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full p-2 border rounded"
              />
              <input
                name="endereco"
                value={form.endereco}
                onChange={handleChange}
                placeholder="Endereço"
                className="w-full p-2 border rounded"
              />
              <input
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="Telefone"
                className="w-full p-2 border rounded"
              />

              {/* Campos PIX */}
              <input
                name="pixChave"
                value={form.pixChave}
                onChange={handleChange}
                placeholder="Chave PIX"
                className="w-full p-2 border rounded"
              />
              <select
                name="pixTipo"
                value={form.pixTipo}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Tipo de PIX</option>
                <option value="email">E-mail</option>
                <option value="telefone">Telefone</option>
                <option value="cpf">CPF</option>
                <option value="aleatoria">Chave Aleatória</option>
              </select>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={closeModal} className="px-4 py-2 rounded bg-gray-300">Cancelar</button>
              <button onClick={handleEnviar} className="px-4 py-2 rounded bg-primary text-white" disabled={loading}>
                {loading ? "Verificando..." : "Enviar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
