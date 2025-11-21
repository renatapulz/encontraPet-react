import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AlertBox from "./components/AlertBox";
import PetCards from "./components/PetCards";
import Cadastro from "./components/Cadastro";
import Footer from "./components/Footer";
import Parceiros from "./components/Parceiros";

export default function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Hero />
        <AlertBox />
        <PetCards />
        <Cadastro />
        <Parceiros />
      </div>
      <Footer />
    </>
  );
}
