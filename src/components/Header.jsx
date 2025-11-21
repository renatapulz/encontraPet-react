import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src="/images/logo.png"
          alt="Pets logo"
          className="logo h-auto max-w-[160px]"
        />

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-[21px] font-title text-black">
          <a href="#quem-somos" className="hover:underline">Quem somos</a>
          <a href="#perdidos" className="hover:underline">Perdidos</a>
          <a href="#cadastrar" className="hover:underline">Cadastrar</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>

        {/* Botão Hambúrguer Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* ícone simples */}
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 md:hidden bg-primary text-white px-4 py-4">
          <a href="#quem-somos" className="hover:underline" onClick={() => setMenuOpen(false)}>Quem somos</a>
          <a href="#perdidos" className="hover:underline" onClick={() => setMenuOpen(false)}>Perdidos</a>
          <a href="#cadastrar" className="hover:underline" onClick={() => setMenuOpen(false)}>Cadastrar</a>
          <a href="#contato" className="hover:underline" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
      )}
    </header>
  );
}
