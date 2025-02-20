"use client";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Location from "./components/Location";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:block lg:relative absolute top-full left-0 w-full bg-stone-800 lg:bg-transparent lg:w-auto lg:top-0`}
        >
          <ul className="flex flex-col lg:flex-row gap-8 text-xl font-bold p-5 lg:p-0">
            {["Inicio", "Procedimentos", "Sobre", "Agendar", "Contato"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="block py-2 lg:py-0 relative transition duration-300 hover:text-black
                   before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] 
                   before:bg-black before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>
      <section className="flex h-full justify-around items-center">
        <div className="flex w-1/2 flex-col gap-10">
          <h1 className="text-6xl ">
            Realce sua beleza natural e aumente sua autoestima com um cuidado
            completo da pele
          </h1>
          <a
            href="https://wa.me/5511952279968"
            className="ml-14 p-4 w-1/3 font-bold rounded-full text-center bg-nude hover:scale-90 transition-transform duration-200"
          >
            AGENDAR CONSULTA
          </a>
        </div>
        <div>
          <img src="teste2.png" alt="" />
        </div>
      </section>
      <section className="flex flex-col h-full bg-marrom items-center justify-around py-5">
        <h1 className="font-bold text-4xl">Procedimentos</h1>
        <div className="flex justify-around w-full flex-wrap gap-10 p-5">
          <Card content="Botox" bg="botox.jpg" />
          <Card content="Preenchimento com Ácido hialurônico" bg="preenchimento.jpg" />
          <Card content="Fio de PDO" bg="pdo.jpg" />
          <Card content="Bioestimulador de Colageno" bg="bioestimulador.jpg" />
          <Card content="Limpeza de Pele" bg="limpeza.jpg" />
          <Card content="Peeling Quimico" bg="peeling.jpg" />
          <Card content="Intradermeterapia" bg="intra.png" />
          <Card content="Skinbooster" bg="skinbooster.jpg" />
        </div>
        <a
          href="https://wa.me/5511952279968"
          className="ml-14 p-4 w-1/3 font-bold rounded-full text-center bg-nude hover:scale-90 transition-transform duration-200 "
        >
          AGENDAR CONSULTA
        </a>
      </section>
      <section className="flex h-screen items-center justify-around">
        <div className="flex items-center w-4/5 h-full p-10 text-center">
          <div className="w-full max-w-lg h-full max-h-full bg-[url('/teste2.png')] bg-cover bg-center rounded-3xl p-10"></div>
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
                href="https://wa.me/5511952279968"
                className="p-4 font-bold rounded-full text-center bg-nude hover:scale-90 transition-transform duration-200"
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
              href="https://wa.me/5511952279968"
              className="p-4 font-bold rounded-full text-center bg-nude hover:scale-90 transition-transform duration-200"
            >
              DESCUBRA SUA MELHOR VERSÃO
            </a>
          </div>
        </div>
        <div className="flex items-center w-4/5 h-full p-10  ">
          <div className="w-full max-w-lg h-full max-h-full bg-[url('/teste2.png')] bg-cover bg-centerounded-3xl"></div>
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

            <button className="w-full bg-gradient-to-r from-nude to-purple-500 font-bold py-2 rounded-md hover:scale-95 transition-transform duration-200">
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
          <div className="hover:scale-90 transition-transform duration-200 ">
            <a
              href="https://wa.me/5511952279968"
              className="p-4 font-bold rounded-full text-center bg-nude"
            >
              MARCAR CONSULTA
            </a>
          </div>
        </div>
        <div className="w-full bg-[url('/background.svg')] bg-cover bg-center">
          <Location />
          <div className="flex flex-col sm:flex-row sm:gap-10 justify-around text-start p-10 ">
          {[
            {
              href: "mailto:guilhermediasgomes2@gmail.com",
              icon: "gmail.png",
              label: "Email",
              name: "guilhermediasgomes2@gmail.com",
            },
            {
              href: "https://wa.me/5511952279968",
              icon: "whatsapp.png",
              label: "WhatsApp",
              name: "(11) 95227-9968",
            },
            {
              href: "https://www.instagram.com/dra_rosiane_gomes/",
              icon: "instagram.png",
              label: "instagram",
              name: "Dra_rosiane_gomes",
            },
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="flex items-center group w-full sm:w-auto"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={contact.icon}
                  alt={contact.label}
                  className="w-14 mr-2 relative"
                />
              </div>
              <div>
                <h3 className="font-bold">{contact.label}</h3>
                <p>{contact.name}</p>
              </div>
            </a>
          ))}
        </div>
        </div>
        <h1 className="font-bold">
          Guilherme Dias – Copyright 2025. Todos os direitos reservados.
        </h1>
      </section>
    </div>
  );
}
