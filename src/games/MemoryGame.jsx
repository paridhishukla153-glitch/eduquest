import { Link } from "react-router-dom";

import { useState } from "react";

const cardsData = [
  "🍎",
  "🍌",
  "🍇",
  "🍉",
  "🍎",
  "🍌",
  "🍇",
  "🍉",
];

export default function MemoryGame() {

  const [cards, setCards] = useState(
    cardsData.sort(() => Math.random() - 0.5)
  );

  const [flippedCards, setFlippedCards] = useState([]);

  const [matchedCards, setMatchedCards] = useState([]);

  function handleCardClick(index) {

    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }

    const newFlipped = [...flippedCards, index];

    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {

      const firstCard = cards[newFlipped[0]];

      const secondCard = cards[newFlipped[1]];

      if (firstCard === secondCard) {

        setMatchedCards([
          ...matchedCards,
          newFlipped[0],
          newFlipped[1],
        ]);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 800);
    }
  }

  return (

    <div className="min-h-screen bg-blue-50 p-6">

      {/* Back Button */}

      <div className="mb-8">

        <Link to="/dashboard">

          <button className="bg-black text-white px-5 py-2 rounded-xl">

            Back

          </button>

        </Link>

      </div>

      {/* Heading */}

      <h1 className="text-5xl font-bold text-center mb-10">

        Memory Match 🧠

      </h1>

      {/* Grid */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">

        {cards.map((card, index) => {

          const isFlipped =
            flippedCards.includes(index) ||
            matchedCards.includes(index);

          return (

            <div
              key={index}

              onClick={() => handleCardClick(index)}

              className="bg-white h-32 rounded-3xl shadow-lg flex items-center justify-center text-5xl cursor-pointer hover:scale-105 transition"
            >

              {isFlipped ? card : "❓"}

            </div>
          );
        })}

      </div>

    </div>
  );
}