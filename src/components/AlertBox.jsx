import { motion } from "framer-motion";

export default function AlertBox() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#F7F2CE] rounded-2xl px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12"
    >
      <div className="text-[#444444] max-w-[800px]">
        <h3 className="text-[#D17B00] font-bold text-lg mb-2">IMPORTANTE</h3>
        <p className="mb-2 text-lg">
          Neste momento, estamos validando nosso serviço com os primeiros cadastros.
          <br />
          Junte-se a nós e faça parte dessa missão!
        </p>
        <p className="text-[#36A636] font-bold text-lg">
          40% dos animais <span className="font-normal text-[#444]">cadastrados foram encontrados!</span>
        </p>
      </div>

      <button className="bg-[#26BCBB] text-white font-bold text-lg py-3 px-8 rounded-xl hover:bg-[#22a8a7] transition">
        CADASTRE-SE
      </button>
    </motion.section>
  );
}
