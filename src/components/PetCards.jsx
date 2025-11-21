import { motion } from "framer-motion";

const pets = [
  {
    name: "Bolacha",
    image: "/images/pets/bolacha.jpg",
    titulo: "Cachorro, 3 anos.",
    visto: "Bairro Itacorubi.",
    contato: "Jonas - (48) 9 9390.9282",
    recompensa: "R$ 600,00"
  },
  {
    name: "Mel",
    image: "/images/pets/mel.jpg",
    titulo: "Cachorro, 2 anos.",
    visto: "Bairro Trindade.",
    contato: "Joely - (48) 9 9893.9282",
    recompensa: "R$ 300,00"
  },
  {
    name: "Paçoca",
    image: "/images/pets/pacoca.jpg",
    titulo: "Cachorro, 6 anos.",
    visto: "Bairro Campeche.",
    contato: "Marcos - (48) 9 8877.9282",
    recompensa: "R$ 200,00"
  },
  {
    name: "Bob",
    image: "/images/pets/bob.jpg",
    titulo: "Cachorro, 4 anos.",
    visto: "Bairro João Paulo.",
    contato: "Júlia - (48) 9 9803.9282",
    recompensa: "R$ 900,00"
  },
];

export default function PetCards() {
  return (
    <section id="perdidos" className="py-12 bg-white">
      <h2 className="text-2xl md:text-4xl font-title mb-8">Pets que estão longe de casa</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {pets.map((pet, index) => (
          <motion.div
            key={pet.name}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-245 object-cover rounded-xl mb-6"
            />
            <div className="px-4">
              <h3 className="text-xl text-center font-title mb-2">{pet.name}</h3>
              <p className="text-text text-center mb-4">{pet.titulo}</p>
              <p className="text-text mb-2"><strong>Visto por último:</strong><br/>{pet.visto}</p>
              <p className="text-text mb-2"><strong>Contato:</strong><br />{pet.contato}</p>
              <p className="text-text mb-2"><strong>Recompensa:</strong> {pet.recompensa}</p>
              <button className="mb-3 w-full">Eu encontrei</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
