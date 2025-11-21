import { motion } from "framer-motion";
import { useState } from "react";
import { addPet } from "../services/petStorage";

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    especie: "",
    idade: "",
    imagem: "",
    visto: "",
    contatoNome: "",
    contatoTelefone: "",
    recompensa: "",
    descricao: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const camposObrigatorios = [
      "nome",
      "especie",
      "imagem",
      "visto",
      "contatoNome",
      "contatoTelefone"
    ];

    const faltando = camposObrigatorios.filter(campo => !form[campo].trim());

    if (faltando.length > 0) {
      alert("Preencha todos os campos!");
      return;
    }

    const novoPet = {
      id: Date.now(), // ID único
      nome: form.nome,
      imagem: form.imagem,
      especie: form.especie,
      idade: form.idade,
      visto: form.visto,
      contato: {
        nome: form.contatoNome,
        telefone: form.contatoTelefone
      },
      recompensa: Number(form.recompensa) || null,
      status: "perdido",
      descricao: form.descricao
    };

    addPet(novoPet);
    alert("Pet cadastrado com sucesso!");
    window.location.reload();
  }

  return (
    <section id="cadastrar" className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-stretch">
      <motion.div
        className="bg-[#F7F2CE] p-6 sm:p-6 rounded-2xl text-[#444444]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-title text-center text-primary mb-8">Cadastrar animal perdido</h2>
        <p className="text-text text-center mb-4">Preencha todos os campos com as informações do seu animal e aguarde nosso email.</p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          {/* Nome */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Nome:</label>
            <input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              type="text"
              className="w-full border-none rounded-lg p-2"
            />
          </div>

          {/* Tipo */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Tipo (Cachorro, gato):</label>
            <input
              name="especie"
              value={form.especie}
              onChange={handleChange}
              type="text"
              className="w-full border-none rounded-lg p-2"
            />
          </div>

          {/* Idade */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Idade:</label>
            <input
              name="idade"
              value={form.idade}
              onChange={handleChange}
              type="text"
              className="w-full border-none rounded-lg p-2"
            />
          </div>

          {/* URL da foto */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">URL da foto:</label>
            <input
              name="imagem"
              value={form.imagem}
              onChange={handleChange}
              type="url"
              className="w-full border-none rounded-lg p-2"
            />
          </div>

          {/* Visto por último */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Visto por último:</label>
            <input
              name="visto"
              value={form.visto}
              onChange={handleChange}
              type="text"
              className="w-full border-none rounded-lg p-2"
            />
          </div>

          {/* Nome responsável */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Nome do responsável:</label>
            <input
              name="contatoNome"
              value={form.contatoNome}
              onChange={handleChange}
              type="text"
              className="w-full border-none rounded-lg p-2"
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Telefone:</label>
            <input
              name="contatoTelefone"
              value={form.contatoTelefone}
              onChange={handleChange}
              type="tel"
              className="w-full border-none rounded-lg p-2"
            />
          </div>

          {/* Recompensa */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Recompensa:</label>
            <input
              name="recompensa"
              value={form.recompensa}
              onChange={handleChange}
              type="number"
              min="0"
              step="1"
              className="w-full border-none rounded-lg p-2"
            />
          </div>

          {/* Descrição */}
          <div className="md:col-span-2">
            <label className="block font-semibold text-gray-700 mb-1">Características físicas:</label>
            <textarea
              name="descricao"
              value={form.descricao}
              onChange={handleChange}
              rows="4"
              className="w-full border-none rounded-lg p-2"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#36B4B6] text-white font-bold py-3 rounded-xl"
            >
              CADASTRAR
            </button>
          </div>

        </form>
      </motion.div>
      <motion.div
        className="hidden sm:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/cadastro.jpg"
          alt="Cachorro em preto e branco."
          className="w-full h-auto max-w-[550px] rounded-2xl object-cover mx-auto"
        />
      </motion.div>
    </section>
  );
}
