"use client";

import { useEffect, useState } from "react";
import Card from "./components/Card";

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
    <div className="p-0 bg-[url('/background.svg')] bg-cover bg-center font-cinzel">
      <header
        id="navbar"
        className={`sticky top-0 flex flex-row justify-around items-center p-2 z-10 font-sans transition-all duration-300 ${
          scrolled ? "bg-marrom shadow-md" : "bg-transparent text-black"
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
      <section className="flex h-screen justify-evenly items-center">
        <div className="flex w-1/2 flex-col gap-4 ">
          <h1 className="text-6xl pl-20">
            Realce sua beleza natural e aumente sua autoestima com um cuidado
            completo da pele
          </h1>
          <a
            href=""
            className="ml-14 p-4 w-1/3 font-bold rounded-full text-center bg-nude"
          >
            AGENDAR CONSULTA
          </a>
        </div>
        <div>
          <img src="perfil.png" alt="" />
        </div>
      </section>
      <section className="flex flex-col h-screen bg-marrom items-center justify-around">
        <h1 className="font-bold text-4xl">Procedimentos</h1>
        <div className="flex justify-around w-full">
          <Card title="BOTOX" content="Este é meu teste de components" />
          <Card
            title="Preenchimento labial"
            content="Este é meu teste de components"
          />
          <Card
            title="Limpeza de pele"
            content="Este é meu teste de components"
          />
          <Card title="Vasos" content="Este é meu teste de components" />
        </div>
        <a
          href=""
          className="ml-14 p-4 w-1/3 font-bold rounded-full text-center bg-nude"
        >
          AGENDAR CONSULTA
        </a>
      </section>
      <section className="flex h-screen items-center justify-around">
        <div className="flex items-center w-4/5 text-center">
          <div className="py-80 px-60 bg-gray-400 rounded-3xl"></div>
          <div className="flex flex-col h-1/2 p-6  gap-4 w-1/2">
            <h1 className="font-bold text-4xl">
              Venha conhecer a Dra. Rosiane Gomes
            </h1>
            <p className=" text-2xl">
              Um espaço cuidadosamente projetado para proporcionar uma
              experiência aconchegante, focada no autocuidado e no bem-estar{" "}
            </p>
            <div className="flex justify-center">
              <a
                href=""
                className="p-4 font-bold rounded-full text-center bg-nude"
              >
                DESCUBRA SUA MELHOR VERSÃO
              </a>
            </div>
          </div>
        </div>
        <div className="h-1/3">
          <div className="w-56 ">
            <img src="teste5.0.png" alt="logo" />
          </div>
        </div>
      </section>
      <section className="flex h-screen bg-marrom items-center justify-around">
        <div className="flex flex-col gap-10 w-1/3">
          <h1 className="text-5xl">Dra. Rosiane Gomes</h1>
          <div className="flex items-center gap-4 text-xl border-b border-black p-2">
            <img src="correto.png" alt="correto" className="w-10" />
            <p>Enfermeira graduada pela Universidade Italo, em São Paulo - SP.</p>
          </div>
          <div className="flex items-center gap-4 text-xl border-b border-black p-2">
            <img src="correto.png" alt="correto" className="w-10" />
            <p>Possui especialização em Dermatologia pela Instituição Superior de Medicina Dermatológica (ISMD).</p>
          </div>
          <div className="flex items-center gap-4 text-xl border-b border-black p-2">
            <img src="correto.png" alt="correto" className="w-10" />
            <p>Especialista em Dermatologia Estética, Cirúrgica e Clínica</p>
          </div>
          <div className="flex justify-center">
              <a
                href=""
                className="p-4 font-bold rounded-full text-center bg-nude"
              >
                DESCUBRA SUA MELHOR VERSÃO
              </a>
            </div>
        </div>
        <div className="py-80 px-60 bg-gray-400 rounded-3xl"></div>
      </section>
    </div>
  );
}
