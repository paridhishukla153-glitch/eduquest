import { useState } from "react";
import { quizDatabase } from "../data/aiQuizData";
import { Link } from "react-router-dom";

export default function AIQuizGenerator() {

  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [studentClass, setStudentClass] = useState("");

  const [generatedQuiz, setGeneratedQuiz] = useState([]);
  const [score, setScore] = useState(0);

  const [loading, setLoading] = useState(false);

  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [feedback, setFeedback] = useState({});

  function generateQuiz() {

    if (!subject || !difficulty || !studentClass) return;

    setLoading(true);

    setGeneratedQuiz([]);

    setTimeout(() => {

      setGeneratedQuiz(
        quizDatabase[subject][difficulty]
      );

      setScore(0);

      setAnsweredQuestions([]);

      setFeedback({});

      setLoading(false);

    }, 1500);
  }

  function handleAnswer(option, answer, index) {

    if (answeredQuestions.includes(index)) return;

    if (option === answer) {

      setScore((prev) => prev + 1);

      setFeedback({
        ...feedback,
        [index]: "Correct 🎉",
      });

    } else {

      setFeedback({
        ...feedback,
        [index]: `Wrong ❌ Correct Answer: ${answer}`,
      });

    }

    setAnsweredQuestions([
      ...answeredQuestions,
      index,
    ]);
  }

  const quizCompleted =
  generatedQuiz.length > 0 &&
  answeredQuestions.length === generatedQuiz.length;

const percentage =
  generatedQuiz.length > 0
    ? Math.round(
        (score / generatedQuiz.length) * 100
      )
    : 0;

  return (

    <div className="min-h-screen bg-purple-50 p-8">

      <div className="mb-8">

        <Link to="/dashboard">

          <button className="bg-black text-white px-5 py-2 rounded-xl">

            Back

          </button>

        </Link>

      </div>

      <h1 className="text-5xl font-bold text-center">

        AI Quiz Generator 🤖

      </h1>

      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto mt-10">

        <h2 className="text-2xl font-bold">

          Generate Quiz

        </h2>

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full border-2 border-gray-200 p-4 rounded-2xl mt-6"
        >

          <option value="">Choose Subject</option>

          <option value="math">Math</option>

          <option value="science">Science</option>

          <option value="english">English</option>

        </select>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full border-2 border-gray-200 p-4 rounded-2xl mt-6"
        >

          <option value="">Choose Difficulty</option>

          <option value="easy">Easy</option>

          <option value="medium">Medium</option>

          <option value="hard">Hard</option>

        </select>

        <select
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          className="w-full border-2 border-gray-200 p-4 rounded-2xl mt-6"
        >

          <option value="">Choose Class</option>

          {[...Array(12)].map((_, i) => (

            <option key={i + 1} value={i + 1}>

              Class {i + 1}

            </option>

          ))}

        </select>

        <button
          onClick={generateQuiz}
          className="w-full mt-8 bg-black text-white py-4 rounded-2xl"
        >

          Generate AI Quiz

        </button>

      </div>

      {loading && (

        <div className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto mt-10 text-center">

          <h2 className="text-3xl font-bold">

            Generating AI Quiz...

          </h2>

          <p className="mt-4 text-gray-500">

            AI is preparing questions 🤖

          </p>

        </div>

      )}

      {generatedQuiz.length > 0 && (

        <div className="bg-white p-8 rounded-3xl shadow-lg max-w-3xl mx-auto mt-10">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-3xl font-bold">

              Generated Quiz

            </h2>

            <p className="text-2xl font-bold text-purple-500">

              Score: {score}

            </p>

          </div>

          <p className="text-gray-600 mb-8">

            Class {studentClass} • {subject} • {difficulty}

          </p>

          <div className="space-y-8">

            {generatedQuiz.map((quiz, index) => (

              <div
                key={index}
                className="bg-gray-100 p-6 rounded-2xl"
              >

                <h3 className="text-2xl font-bold">

                  {quiz.question}

                </h3>

                <div className="grid gap-4 mt-6">

                  {quiz.options.map((option) => (

                    <button
                      key={option}
                      onClick={() =>
                        handleAnswer(
                          option,
                          quiz.answer,
                          index
                        )
                      }
                      className="bg-white hover:bg-purple-100 active:scale-95 p-4 rounded-xl text-left transition"
                    >

                      {option}

                    </button>

                  ))}

                </div>

                {feedback[index] && (

                  <p className="mt-4 text-xl font-bold">

                    {feedback[index]}

                  </p>

                )}

              </div>

            ))}

          </div>

          {quizCompleted && (

  <div className="mt-10 bg-green-100 p-8 rounded-3xl text-center">

    <h2 className="text-4xl font-bold">

      Quiz Completed 🎉

    </h2>

    <p className="text-2xl mt-4">

      Final Score: {score}/{generatedQuiz.length}

    </p>

    <p className="text-xl mt-2">

      Percentage: {percentage}%

    </p>

    <p className="mt-4 font-semibold">

      {percentage >= 80
        ? "Excellent Work! 🌟"
        : percentage >= 50
        ? "Good Job! Keep Practicing 👍"
        : "Keep Learning 📚"}

    </p>

  </div>

)}

        </div>

      )}

    </div>
  );
}