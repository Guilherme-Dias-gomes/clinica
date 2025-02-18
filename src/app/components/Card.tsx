interface CardProps {
  content: string;
  bg?: string;
}

export default function Card({ content, bg }: CardProps) {
  return (
    <div
      className="relative flex flex-col justify-end h-96 w-72 rounded-xl text-white bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Conteúdo no final */}
      <p className="text-black font-bold text-2xl bg-white/50 p-2 rounded text-center">
        {content}
      </p>
    </div>
  );
}
