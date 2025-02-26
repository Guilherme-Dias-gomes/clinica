import { useState } from "react";
import "./Card.css"; // Importando o CSS

interface CardProps {
  content: string;
  bg?: string;
  details?: string;
}

export default function Card({ content, bg, details }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-container w-full h-64 sm:h-72 md:h-80 cursor-pointer font-bold" onClick={() => setIsFlipped(!isFlipped)}>
      {/* Card que gira */}
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        {/* Frente do Card */}
        <div
          className="card-face card-front"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <p className="text-black text-xl sm:text-2xl bg-white/50 p-2 rounded text-center">
            {content}
          </p>
        </div>

        {/* Verso do Card */}
        <div className="card-face card-back">
          <p className="text-gray-700 text-center">{details}</p>
        </div>
      </div>
    </div>
  );
}
