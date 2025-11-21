import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="quem-somos" className="grid grid-cols-1 mt-12 mb-8 lg:grid-cols-[2fr_3fr] gap-8 items-stretch">
      <motion.div
        className="hidden sm:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/hero.jpg"
          alt="Cachorro em preto e branco."
          className="w-full h-auto max-w-[550px] rounded-2xl object-cover mx-auto"
        />
      </motion.div>
      <motion.div
        className="bg-[#D0F2F3] p-6 sm:p-6 rounded-2xl text-[#444444]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-title text-center text-primary mb-8">Muito além de<br />uma plataforma 🐾</h2>
        <p className="text-text mb-4">
          Segundo o censo do Instituto Pet Brasil (IPB) de 2021, o Brasil é o terceiro país com mais animais domésticos no mundo - ficando atrás apenas da Argentina e do México. Aproximadamente 70% das famílias brasileiras têm ou conhecem alguém que tem um pet. Só os cães estão presentes em 58% dos lares, enquanto os gatos marcam presença em 28%. Estima-se que 34 milhões de domicílios tenham ao menos um cachorro, segundo o IBGE.
        </p>
        <p className="text-text mb-4">
          Todos os anos, milhares de pets se perdem e muitas vezes não conseguem voltar para casa. A EncontraPet nasceu com o propósito de mudar essa realidade. Somos uma plataforma que facilita o reencontro de animais perdidos com seus tutores, utilizando tecnologia, geolocalização e a força da comunidade. Ao cadastrar um pet desaparecido, a plataforma envia alertas para usuários em um raio de 5km, permitindo que todos ajudem nas buscas.
        </p>
        <p className="text-text mb-3"><strong>Além disso:</strong></p>
        <ul className="default-list mb-4">
          <li>Criamos uma rede colaborativa com recompensas para quem ajudar a encontrar os pets;</li>
          <li>Em breve, você poderá acumular descontos em lojas e petshops parceiros;</li>
          <li>Estamos desenvolvendo coleiras com QR Code e opção de rastreador, para aumentar as chances de localização rápida.</li>
        </ul>
      </motion.div>
    </section>
  );
}
