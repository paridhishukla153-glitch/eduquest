import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

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
  const [gameKey, setGameKey] = useState(0);

  const cards = useMemo(() => {
    return [...cardsData].sort(() => Math.random() - 0.5);
  }, [gameKey]);

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  function handleCardClick(index) {
    if (
      isChecking ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }

    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setIsChecking(true);
      setMoves((prev) => prev + 1);

      const firstIndex = newFlipped[0];
      const secondIndex = newFlipped[1];

      if (cards[firstIndex] === cards[secondIndex]) {
        setTimeout(() => {
          setMatchedCards((prev) => [
            ...prev,
            firstIndex,
            secondIndex,
          ]);

          setFlippedCards([]);
          setIsChecking(false);
        }, 500);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  }

  function restartGame() {
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameWon(false);
    setIsChecking(false);
    setGameKey((prev) => prev + 1);
  }

  useEffect(() => {
    if (
      matchedCards.length > 0 &&
      matchedCards.length === cards.length
    ) {
      setGameWon(true);
    }
  }, [matchedCards, cards.length]);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="flex justify-between items-center mb-8">
        <Link to="/dashboard">
          <button className="bg-black text-white px-5 py-2 rounded-xl">
            Back
          </button>
        </Link>

        <button
          onClick={restartGame}
          className="bg-green-600 text-white px-5 py-2 rounded-xl"
        >
          Restart
        </button>
      </div>

      <h1 className="text-5xl font-bold text-center mb-4">
        Memory Match 🧠
      </h1>

      <p className="text-center text-xl mb-8">
        Moves: {moves}
      </p>

      {gameWon && (
        <div className="bg-green-100 text-green-800 p-4 rounded-2xl text-center font-bold text-2xl mb-8 max-w-xl mx-auto">
          🎉 Congratulations! You matched all cards!
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {cards.map((card, index) => {
          const isFlipped =
            flippedCards.includes(index) ||
            matchedCards.includes(index);

          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="bg-white h-32 rounded-3xl shadow-lg flex items-center justify-center text-5xl cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              {isFlipped ? card : "❓"}
            </div>
          );
        })}
      </div>
    </div>
  );
}