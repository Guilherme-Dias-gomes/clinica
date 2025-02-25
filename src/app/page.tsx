"use client";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Location from "./components/Location";

import AOS from "aos";
import "aos/dist/aos.css"; // Importe o CSS

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação
      once: true, // Anima apenas uma vez
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("E-mail enviado com sucesso!");
      } else {
        alert("Erro ao enviar o e-mail.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar o e-mail.");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full p-0 bg-[url('/background.svg')] bg-cover bg-center font-cinzel">
      <header
        id="navbar"
        className={`sticky top-0 w-full flex flex-row justify-around items-center p-2 z-10 font-sans transition-all duration-300 ${
          scrolled ? "bg-marrom shadow-md" : "bg-transparent text-black"
        }`}
      >
        <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-48 md:h-32 lg:w-48">
          <img
            src="teste5.0.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>

        <button
          onClick={toggleMenu}
          className={`lg:hidden p-2 rounded-md focus:outline-none ${
            isMenuOpen ? "bg-black text-white" : "bg-transparent text-black"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:block absolute top-full left-0 w-full bg-nude lg:bg-transparent lg:w-auto lg:relative`}
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

      <section
        data-aos="fade-up"
        id="Inicio"
        className="flex flex-col md:flex-row h-full justify-around items-center max-w-6xl mx-auto"
      >
        {/* Texto e botão */}
        <div className="flex w-full md:w-1/2 flex-col gap-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl">
            Realce sua beleza natural e aumente sua autoestima com um cuidado
            completo da pele
          </h1>
          <a
            href="https://wa.me/5511952279968"
            className="p-4 md:w-1/2 font-bold rounded-full text-center bg-nude hover:scale-90 transition-transform duration-200 mx-auto md:mx-0"
          >
            AGENDAR CONSULTA
          </a>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="teste2.png"
            alt=""
            className="w-3/4 sm:w-1/2 md:w-full h-auto max-w-lg"
          />
        </div>
      </section>
      <section
        data-aos="fade-up"
        id="Procedimentos"
        className="flex flex-col h-full bg-marrom items-center justify-around py-5"
      >
        <h1 className="font-bold text-3xl lg:text-4xl mb-8">Procedimentos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full px-4 max-w-6xl mx-auto">
          <Card
            content="Botox"
            bg="/botox.jpg"
            details="O Botox é um procedimento estético que reduz rugas e linhas de expressão. É aplicado por meio de injeções diretamente nos músculos faciais, relaxando-os e suavizando as rugas. O efeito dura de 4 a 6 meses."
          />
          <Card
            content="Preenchimento com Ácido hialurônico"
            bg="preenchimento.jpg"
          />
          <Card content="Fio de PDO" bg="pdo.jpg" />
          <Card content="Bioestimulador de Colageno" bg="bioestimulador.jpg" />
          <Card content="Limpeza de Pele" bg="limpeza.jpg" />
          <Card content="Peeling Quimico" bg="peeling.jpg" />
          <Card content="Intradermeterapia" bg="intra.png" />
          <Card content="Skinbooster" bg="skinbooster.jpg" />
        </div>
        <a
          href="https://wa.me/5511952279968"
          className="mt-8 p-4 md:w-1/3 font-bold rounded-full text-center bg-nude hover:scale-90 transition-transform duration-200"
        >
          AGENDAR CONSULTA
        </a>
      </section>
      <section
        data-aos="fade-up"
        id="Sobre"
        className="flex flex-col md:flex-row h-full items-center justify-center md:justify-around "
      >
        {/* Conteúdo à esquerda (imagem e texto) */}
        <div className="flex flex-col md:flex-row items-center justify-around w-full md:w-4/5 h-full text-center md:text-left">
          {/* Imagem */}
          <div className="w-full md:w-1/2 h-full rounded-lg ">
            <img src="teste2.png" alt="doutora" />
          </div>

          {/* Texto e botão */}
          <div className="flex flex-col justify-center h-1/2 p-6 gap-4 w-full md:w-1/2">
            <h1 className="font-bold text-3xl md:text-4xl">
              Venha conhecer o espaço de Estetica Avançada Dra. Rosiane Gomes
            </h1>
            <p className="text-xl md:text-2xl">
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

        {/* Logo à direita */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-40 md:w-56">
            <img src="teste5.0.png" alt="logo" className="w-full h-auto" />
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        className="flex flex-col md:flex-row h-full bg-marrom items-center justify-center md:justify-around"
      >
        {/* Conteúdo à esquerda (texto) */}
        <div className="flex flex-col gap-6 w-full md:w-4/5 p-4 md:p-10">
          <h1 className="text-3xl md:text-5xl text-center md:text-left">
            Dra. Rosiane Gomes
          </h1>
          <div className="flex items-center gap-4 text-lg md:text-xl border-b border-black p-2">
            <img src="correto.png" alt="correto" className="w-8 md:w-10" />
            <p>
              Enfermeira graduada pela Centro Universitario Italo Brasileiro, em
              São Paulo - SP.
            </p>
          </div>
          <div className="flex items-center gap-4 text-lg md:text-xl border-b border-black p-2">
            <img src="correto.png" alt="correto" className="w-8 md:w-10" />
            <p>
              Possui especialização em Enfermagem Estética pelo Instituto de
              Pesquisa e Educação em Saúde de São Paulo (IPESSP).
            </p>
          </div>
          <div className="flex items-center gap-4 text-lg md:text-xl border-b border-black p-2">
            <img src="correto.png" alt="correto" className="w-8 md:w-10" />
            <p>
              Especialista em Cuidados com a Saúde e o Bem-Estar do Paciente,
              com pós-graduação em Urgência e Emergência pela instituição FMU.
            </p>
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="hidden md:flex items-center justify-center w-full md:w-4/5 h-full">
          <div className="w-full h-full rounded-3xl">
            <img src="teste2.png" alt="" />
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        id="Agendar"
        className="flex h-full w-full items-center text-center justify-center mt-5 text-black"
      >
        <div className="bg-marrom p-8 rounded-lg shadow-lg w-full lg:w-1/2 mt-5 shadow-black">
          <h1 className="text-2xl font-bold text-black mb-2">
            Agende sua Avaliação e Descubra o Melhor para Sua Saúde e Beleza!
          </h1>
          <p className="mb-4 text-lg">
            Uma avaliação personalizada é o primeiro passo para alcançar seus
            objetivos de saúde e bem-estar. Nós vamos entender suas necessidades
            e oferecer as melhores opções para você, garantindo cuidados
            exclusivos e resultados eficazes. Venha para a nossa clínica e
            cuide-se com quem entende de você!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div className="flex flex-col lg:flex-row lg:space-x-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                className="w-full lg:w-1/2 p-2 border border-nude bg-transparent rounded-md placeholder-gray-400"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full lg:w-1/2 p-2 border border-nude bg-transparent rounded-md placeholder-gray-400"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-nude bg-transparent rounded-md placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder="Digite sua mensagem..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 h-32 border border-nude bg-transparent rounded-md placeholder-gray-400 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-nude to-purple-500 font-bold py-2 rounded-md hover:scale-95 transition-transform duration-200"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
      <section
        data-aos="fade-up"
        id="Contato"
        className="flex flex-col h-full w-full items-center text-center justify-center bg-marrom rounded-t-[5vw] mt-20 text-black shadow-2xl shadow-black"
      >
        {/* Parte superior (Texto e botão) */}
        <div className="flex flex-col md:flex-row bg-marrom w-full rounded-t-[5vw] h-full justify-around items-center p-6 md:p-10">
          <div className="flex flex-col text-center md:text-start w-full md:w-1/3 gap-2 mb-6 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Hora de se cuidar!
            </h1>
            <p className="text-lg md:text-xl">
              Cuide da sua beleza, saúde e autoestima! Agende uma consulta pelo
              Whatsapp
            </p>
          </div>
          <div className="hover:scale-90 transition-transform duration-200">
            <a
              href="https://wa.me/5511952279968"
              className="p-3 md:p-4 font-bold rounded-full text-center bg-nude text-sm md:text-base"
            >
              MARCAR CONSULTA
            </a>
          </div>
        </div>

        {/* Parte do meio (Localização e contatos) */}
        <div className="flex flex-col justify-around items-center w-full bg-[url('/background.svg')] bg-cover bg-center p-4">
          {/* Mapa */}
          <div className="w-full max-w-6xl h-[400px] md:h-[500px] mb-8">
            {" "}
            {/* Aumentei a altura do mapa */}
            <Location />
          </div>

          {/* Contatos */}
          <div className="flex flex-col sm:flex-row sm:gap-6 justify-center text-start w-full max-w-4xl p-6 md:p-10">
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
                label: "Instagram",
                name: "Dra_rosiane_gomes",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center group w-full sm:w-auto mb-4 sm:mb-0 gap-4"
              >
                <div className="relative min-w-[40px] min-h-[45px]">
                  <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={contact.icon}
                    alt={contact.label}
                    className="w-10 md:w-14 mr-2 relative"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base">
                    {contact.label}
                  </h3>
                  <p className="text-sm md:text-base break-words">
                    {contact.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Rodapé (Copyright) */}
        <span className="font-bold w-full text-center flex flex-col items-center text-sm md:text-base p-4">
          <a
            href="https://portifolio-guilhermediasgomes-projects.vercel.app/"
            className="mb-2 md:mb-0 md:mr-2"
          >
            Guilherme Dias
          </a>
          <p>– Copyright 2025. Todos os direitos reservados.</p>
        </span>
      </section>
    </div>
  );
}
