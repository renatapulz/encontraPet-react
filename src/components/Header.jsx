export default function Header() {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="/images/logo.png"
          alt="Pets logo"
          className="logo h-auto max-w-[160px]"
        />
        <nav className="hidden md:flex gap-6 text-[21px] font-title text-black">
          <a href="#quem-somos" className="hover:underline">Quem somos</a>
          <a href="#perdidos" className="hover:underline">Perdidos</a>
          <a href="#cadastrar" className="hover:underline">Cadastrar</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </div>
    </header>
  );
}
