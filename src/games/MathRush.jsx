import { Link } from "react-router-dom";

import { useState } from "react";

export default function MathRush() {

  const [num1] = useState(
    Math.floor(Math.random() * 10)
  );

  const [num2] = useState(
    Math.floor(Math.random() * 10)
  );

  const [answer, setAnswer] = useState("");

  const [message, setMessage] = useState("");

  function checkAnswer() {

    if (Number(answer) === num1 + num2) {

      setMessage("Correct 🎉");

    } else {

      setMessage("Wrong ❌");
    }
  }

  return (

    <div className="min-h-screen bg-green-50 p-6">

      {/* Back Button */}

      <div className="mb-8">

        <Link to="/dashboard">

          <button className="bg-black text-white px-5 py-2 rounded-xl">

            Back

          </button>

        </Link>

      </div>

      {/* Main Card */}

      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-xl mx-auto text-center">

        <h1 className="text-5xl font-bold">

          Math Rush ➕

        </h1>

        <p className="mt-8 text-4xl font-semibold">

          {num1} + {num2}

        </p>

        <input
          type="number"

          value={answer}

          onChange={(e) => setAnswer(e.target.value)}

          placeholder="Enter Answer"

          className="w-full border-2 border-gray-200 p-4 rounded-2xl mt-8 text-xl"
        />

        <button
          onClick={checkAnswer}

          className="mt-8 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl text-lg transition"
        >

          Submit

        </button>

        {message && (

          <p className="mt-8 text-3xl font-bold">

            {message}

          </p>

        )}

      </div>

    </div>
  );
}