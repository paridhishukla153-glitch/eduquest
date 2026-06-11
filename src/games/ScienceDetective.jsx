import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { detectiveCases } from "../data/scienceDetectiveData";
import { XPContext } from "../context/XPContext";

export default function ScienceDetective() {

  const [currentCase, setCurrentCase] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const xpContext = useContext(XPContext);

  const caseData = detectiveCases[currentCase];

  function handleAnswer(option) {

  console.log("Clicked:", option);
  console.log("Expected:", caseData.answer);

  const correct = option === caseData.answer;

  console.log("Correct?", correct);

  setIsCorrect(correct);

  if (correct) {

    console.log("INSIDE CORRECT BLOCK");

    setScore((prev) => prev + 20);

    console.log(xpContext);

  }

  setShowExplanation(true);
}

  function nextCase() {

    if (currentCase === detectiveCases.length - 1) {

      setGameFinished(true);

      return;
    }

    setCurrentCase((prev) => prev + 1);

    setShowExplanation(false);

    setIsCorrect(null);
  }

  if (gameFinished) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-green-50">

        <div className="bg-white p-10 rounded-3xl shadow-lg text-center">

          <h1 className="text-5xl font-bold">
            🎉 Investigation Complete
          </h1>

          <p className="text-2xl mt-6">
            XP Earned: {score}
          </p>

          <Link to="/dashboard">

            <button className="bg-black text-white px-6 py-3 rounded-xl mt-8">

              Back To Dashboard

            </button>

          </Link>

        </div>

      </div>

    );
  }

  return (

    <div className="min-h-screen bg-yellow-50 p-8">

      <Link to="/dashboard">

        <button className="bg-black text-white px-5 py-2 rounded-xl">

          Back

        </button>

      </Link>

      <div className="max-w-3xl mx-auto mt-10 bg-white p-10 rounded-3xl shadow-lg">

        <h1 className="text-5xl font-bold text-center">

          🕵️ Science Detective

        </h1>

        <p className="text-center text-gray-500 mt-4">

          Case {currentCase + 1} of {detectiveCases.length}

        </p>

        {/* Progress Bar */}

        <div className="w-full bg-gray-200 rounded-full h-4 mt-4">

          <div
            className="bg-yellow-500 h-4 rounded-full"
            style={{
              width: `${
                ((currentCase + 1) /
                  detectiveCases.length) *
                100
              }%`
            }}
          />

        </div>

        {/* Clue */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold">

            Clues

          </h2>

          <p className="text-xl mt-4">

            {caseData.clue}

          </p>

        </div>

        {/* Options */}

        {!showExplanation && (

          <div className="grid gap-4 mt-8">

            {caseData.options.map((option) => (

              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="bg-blue-100 p-4 rounded-xl hover:bg-blue-200 text-lg"
              >

                {option}

              </button>

            ))}

          </div>

        )}

        {/* Result */}

        {showExplanation && (

          <div className="mt-8">

            {isCorrect ? (

              <p className="text-green-600 text-xl font-bold">

                ✅ Correct!

              </p>

            ) : (

              <p className="text-red-600 text-xl font-bold">

                ❌ Incorrect

              </p>

            )}

            <p className="text-xl font-bold mt-4">

              Answer: {caseData.answer}

            </p>

            <p className="mt-3 text-gray-700">

              {caseData.explanation}

            </p>

            <button
              onClick={nextCase}
              className="bg-green-500 text-white px-6 py-3 rounded-xl mt-6 hover:bg-green-600"
            >

              Next Case

            </button>

          </div>

        )}

      </div>

    </div>

  );
}