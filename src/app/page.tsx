"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-0 bg-[url('/background.svg')] bg-cover bg-center">
      <header
        id="navbar"
        className={`sticky top-0 flex flex-row justify-around items-center p-5 z-10 font-sans transition-all duration-300 ${
          scrolled
            ? "bg-marrom shadow-md"
            : "bg-transparent text-black"
        }`}
      >
        <div className="w-48 h-1/2">
          <img src="teste5.0.png" alt="logo" />
        </div>
        <nav>
          <ul className="flex flex-row gap-8 font-bold text-lg">
            <li>Inicio</li>
            <li>Procedimentos</li>
            <li>Sobre</li>
            <li>Agendar</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
      <section className="flex h-screen justify-evenly items-center font-serif">
        <div className="flex w-1/2 flex-col gap-4 ">
          <h1 className="text-4xl pl-14">
            Realce sua beleza natural e aumente sua autoestima com um cuidado
            completo da pele
          </h1>
          <a
            href=""
            className="border ml-14 border-black p-4 w-1/3 font-bold rounded-full text-center bg-nude"
          >
            AGENDAR CONSULTA
          </a>
        </div>
        <div>
          <img src="perfil.png" alt="" />
        </div>
      </section>
      <section className="flex h-screen bg-marrom"></section>
      <section className="flex h-screen"></section>
    </div>
  );
}
