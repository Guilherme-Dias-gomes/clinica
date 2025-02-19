"use client";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Location from "./components/Location";

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
        <div className="flex w-1/2 flex-col gap-4">
          <h1 className="text-6xl ">
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
          <Card content="Este é meu teste de components" bg="estetica.jpg" />
          <Card content="Este é meu teste de components" bg="estetica.jpg" />
          <Card content="Este é meu teste de components" bg="estetica.jpg" />
          <Card content="Este é meu teste de components" bg="estetica.jpg" />
        </div>
        <a
          href=""
          className="ml-14 p-4 w-1/3 font-bold rounded-full text-center bg-nude"
        >
          AGENDAR CONSULTA
        </a>
      </section>
      <section className="flex h-screen items-center justify-around">
        <div className="flex items-center w-4/5 h-full p-10 text-center">
          <div className="w-full max-w-lg h-full max-h-full bg-[url('/estetica.jpg')] bg-cover bg-center rounded-3xl p-10"></div>
          <div className="flex flex-col h-1/2 p-6  gap-4 w-1/2">
            <h1 className="font-bold text-4xl">
              Venha conhecer a Dra. Rosiane Gomes
            </h1>
            <p className=" text-2xl">
              Um espaço cuidadosamente projetado para proporcionar uma
              experiência aconchegante, focada no autocuidado e no bem-estar
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
      <section className="flex h-screen bg-marrom items-center ">
        <div className="flex flex-col gap-10 w-4/5 p-10">
          <h1 className="text-5xl">Dra. Rosiane Gomes</h1>
          <div className="flex items-center gap-4 text-xl border-b border-black p-2">
            <img src="correto.png" alt="correto" className="w-10" />
            <p>
              Enfermeira graduada pela Centro Universitario Italo Brasileiro, em
              São Paulo - SP.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xl border-b border-black p-2">
            <img src="correto.png" alt="correto" className="w-10" />
            <p>
              Possui especialização em Enfermagem Estética pelo Instituto de
              Pesquisa e Educação em Saúde de São Paulo (IPESSP).
            </p>
          </div>
          <div className="flex items-center gap-4 text-xl border-b border-black p-2">
            <img src="correto.png" alt="correto" className="w-10" />
            <p>
              Especialista em Cuidados com a Saúde e o Bem-Estar do Paciente,
              com pós-graduação em Urgência e Emergência pela instituição FMU.
            </p>
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
        <div className="flex items-center w-4/5 h-full p-10  ">
          <div className="w-full max-w-lg h-full max-h-full bg-[url('/estetica.jpg')] bg-cover bg-center bg-gray-400 rounded-3xl"></div>
        </div>
      </section>
      <section className="flex h-screen w-full items-center text-center justify-center mt-5 text-black">
        <div className="bg-marrom p-8 rounded-lg shadow-lg w-1/2 shadow-black">
          <h1 className="text-2xl font-bold text-black mb-2">
            Agende sua Avaliação e Descubra o Melhor para Sua Saúde e Beleza!
          </h1>
          <p className=" mb-4 text-lg">
            Uma avaliação personalizada é o primeiro passo para alcançar seus
            objetivos de saúde e bem-estar. Nós vamos entender suas necessidades
            e oferecer as melhores opções para você, garantindo cuidados
            exclusivos e resultados eficazes. Venha para a nossa clínica e
            cuide-se com quem entende de você!
          </p>

          <form className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Nome"
                className="w-1/2 p-2 border border-nude bg-transparent rounded-md placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-1/2 p-2 border border-nude bg-transparent rounded-md placeholder-gray-400"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-nude bg-transparent rounded-md placeholder-gray-400"
            />

            <textarea
              placeholder="Digite sua mensagem..."
              className="w-full p-2 h-32 border border-nude bg-transparent rounded-md placeholder-gray-400 resize-none"
            ></textarea>

            <button className="w-full bg-gradient-to-r from-nude to-purple-500 font-bold py-2 rounded-md">
              Enviar
            </button>
          </form>
        </div>
      </section>
      <section className="flex flex-col h-full w-full items-center text-center justify-center bg-marrom rounded-t-[5vw] mt-20 text-black shadow-2xl shadow-black ">
        <div className="flex bg-marrom w-full rounded-t-[5vw] h-full justify-around items-center p-10">
          <div className="flex flex-col text-start w-1/3 gap-2">
            <h1 className="text-4xl font-semibold">Hora de se cuidar!</h1>
            <p className="text-xl">
              Cuide da sua beleza, saúde e autoestima! Agende uma consulta pelo
              Whatsapp
            </p>
          </div>
          <div>
            <a href="" className="p-4 font-bold rounded-full text-center bg-nude">
              MARCAR CONSULTA
            </a>
          </div>
        </div>
        <div className="w-full bg-[url('/background.svg')] bg-cover bg-center">
          <Location/>
        </div>
        <div>

        </div>
        <h1 className="font-bold">Guilherme Dias – Copyright 2025. Todos os direitos reservados.</h1>
      </section>
    </div>
  );
}
