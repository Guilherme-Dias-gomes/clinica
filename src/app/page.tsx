import Image from "next/image";

export default function Home() {
  return (
    <div className="p-0 bg-[url('/background.svg')] bg-cover bg-center">
      <header className="sticky top-0 flex flex-row bg-nude text-[#ff66c4] justify-around items-center p-5 z-10 font-sans">
        <div className="w-48 h-1/2">
          <img src="logo2.png" alt="logo" />
        </div>    
        <nav>
          <ul className="flex flex-row gap-8 font-bold text-lg">
            <li>Inicio</li>
            <li>Procedimentos</li>
            <li>Sobre</li>
            <li>Agendar</li>
            <li>contato</li>
          </ul>
        </nav>
      </header>
      <section className="flex  h-screen justify-evenly items-center">
        <div className="flex w-1/2 flex-col gap-4">
          <h1 className="text-4xl">Realce sua beleza natural e aumente sua autoestima com um cuidado completo da pele</h1>
          <a href="" className="border border-black p-4 w-1/3 font-bold rounded-full text-center bg-nude">AGENDAR CONSULTA</a>
        </div>
        <div>
          <img src="perfil.png" alt="" />
        </div>
      </section>
      <section>
        
      </section>
    </div>
  );
}
