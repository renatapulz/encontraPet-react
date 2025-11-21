import { motion } from "framer-motion";

const parceiros = [
  { cupom: "CAO20", nome: "PetShop Alegria", desc: "Desconto em produtos para cachorro." },
  { cupom: "PETIS30", nome: "PetShop CatDog", desc: "Desconto em TODOS os petiscos." },
  { cupom: "VAC20", nome: "VetVida Clínica", desc: "Desconto de 20% na primeira vacina do seu Pet." },
  { cupom: "GATO10", nome: "Melhor Amigo Pet", desc: "Desconto de 10% em todos os produtos para gatos." },
  { cupom: "PETS30", nome: "Pets Floripa", desc: "Desconto de 30% nas lojas Pets da ilha." },
];

export default function Parceiros() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-title mb-10">Nossos parceiros</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {parceiros.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-xl border border-gray-300 overflow-hidden bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="bg-[#26BCBB] text-white text-center py-3 font-bold">
              CUPOM: {item.cupom}
            </div>
            <div className="p-4 text-[#444444]">
              <h3 className="font-semibold text-lg mb-1">{item.nome}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
