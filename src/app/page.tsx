import Image from "next/image";

export default function Home() {
  return (
    <div className="p-0">
      <header className="sticky top-0 flex flex-row bg-stone-800 text-[#ff66c4] justify-around items-center p-5 z-10 font-sans">
        <div className="border-2 w-48 h-1/2">
          <img src="logo.png" alt="logo" />
        </div>    
        <nav>
          <ul className="flex flex-row gap-8">
            <li>Inicio</li>
            <li>Procedimentos</li>
            <li>Sobre</li>
            <li>Agendar</li>
            <li>contato</li>
          </ul>
        </nav>
      </header>
      <section className="bg-[url('/background.svg')] bg-cover bg-center h-screen">
        <div className="w-1/2">
          <h1 className="text-4xl">Realce sua beleza natural e fortaleça sua autoestima com um cuidado completo da pele</h1>
          <button>AGENDAR CONSULTAS</button>
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
