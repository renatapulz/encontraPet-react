import { motion } from "framer-motion";

export default function Cadastro() {
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
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nome */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Nome:</label>
            <input
              type="text"
              className="w-full border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB5B8]"
            />
          </div>

          {/* Tipo */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Tipo (Cachorro, gato):</label>
            <input
              type="text"
              className="w-full border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB5B8]"
            />
          </div>

          {/* Idade */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Idade:</label>
            <input
              type="text"
              className="w-full border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB5B8]"
            />
          </div>

          {/* URL da foto */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">URL da foto:</label>
            <input
              type="url"
              className="w-full border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB5B8]"
            />
          </div>

          {/* Visto por último */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Visto por último:</label>
            <input
              type="text"
              className="w-full border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB5B8]"
            />
          </div>

          {/* Nome do responsável */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Nome do responsável:</label>
            <input
              type="text"
              className="w-full border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB5B8]"
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Telefone:</label>
            <input
              type="tel"
              className="w-full border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB5B8]"
            />
          </div>

          {/* Recompensa */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Recompensa (Se tiver):</label>
            <input
              type="text"
              className="w-full border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB5B8]"
            />
          </div>

          {/* Características físicas */}
          <div className="md:col-span-2">
            <label className="block font-semibold text-gray-700 mb-1">Características físicas:</label>
            <textarea
              rows="4"
              className="w-full border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#3BB5B8]"
            ></textarea>
          </div>

          {/* Botão */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#36B4B6] text-white font-bold py-3 rounded-xl hover:bg-[#2ea3a5] transition-colors"
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
