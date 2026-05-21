import { Link } from "react-router-dom";

import { useContext, useState } from "react";

import { questions } from "../data/questions";

import { XPContext } from "../context/XPContext";

export default function QuizGame() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const {
  xp,
  setXp,
  streak,
  setStreak,
} = useContext(XPContext);

  const [quizFinished, setQuizFinished] = useState(false);

  const [feedback, setFeedback] = useState("");

  function handleAnswer(option) {

    if (option === questions[currentQuestion].answer) {

      setScore(score + 1);

      setXp(xp + 10);

setStreak(streak + 1);

      setFeedback("Correct 🎉");

    } else {

      setFeedback("Wrong ❌");
    }

    const nextQuestion = currentQuestion + 1;

    setTimeout(() => {

      setFeedback("");

      if (nextQuestion < questions.length) {

        setCurrentQuestion(nextQuestion);

      } else {

        setQuizFinished(true);
      }

    }, 800);
  }

  if (quizFinished) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-pink-50 p-6">

        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

          <h1 className="text-5xl font-bold">
            Quiz Completed 🎉
          </h1>

          <p className="mt-6 text-2xl">
            Score: {score} / {questions.length}
          </p>

          <p className="mt-4 text-3xl font-bold text-pink-500">
            XP Earned: {xp}
          </p>

          <Link to="/dashboard">

            <button className="mt-8 bg-black text-white px-6 py-3 rounded-2xl">

              Back To Dashboard

            </button>

          </Link>

        </div>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-pink-50 p-6">

      {/* Back Button */}

      <div className="mb-8">

        <Link to="/dashboard">

          <button className="bg-black text-white px-5 py-2 rounded-xl">

            Back

          </button>

        </Link>

      </div>

      {/* Quiz Card */}

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-2xl mx-auto">

        {/* Top Section */}

        <div className="flex justify-between mb-6">

          <p className="font-semibold">
            Question {currentQuestion + 1}
          </p>

          <p className="font-semibold text-pink-500">
            XP: {xp}
          </p>

        </div>

        {/* Question */}

        <h1 className="text-3xl font-bold">

          {questions[currentQuestion].question}

        </h1>

        {/* Feedback */}

        {feedback && (

          <p className="mt-6 text-2xl font-bold text-center">

            {feedback}

          </p>

        )}

        {/* Options */}

        <div className="grid gap-4 mt-10">

          {questions[currentQuestion].options.map((option) => (

            <button
              key={option}

              onClick={() => handleAnswer(option)}

              className="bg-pink-100 hover:bg-pink-200 active:scale-95 p-4 rounded-2xl text-lg transition duration-200"
            >
              {option}
            </button>

          ))}

        </div>

      </div>

    </div>
  );
}