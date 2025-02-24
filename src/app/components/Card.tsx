interface CardProps {
  content: string;
  bg?: string;
}

export default function Card({ content, bg }: CardProps) {
  return (
    <div
      className="relative flex flex-col justify-end h-64 sm:h-72 md:h-80 w-full rounded-xl text-white bg-cover bg-center bg-no-repeat p-4 hover:scale-90 transition-transform duration-200 cursor-pointer"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Conteúdo no final */}
      <p className="text-black font-bold text-xl sm:text-2xl bg-white/50 p-2 rounded text-center">
        {content}
      </p>
    </div>
  );
}