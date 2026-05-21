import { useEffect, useState } from "react";

export default function QuizHistory() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("quizHistory")) || [];

    setHistory(saved);

  }, []);

  return (

    <div className="bg-white p-8 rounded-3xl shadow-lg">

      <h2 className="text-3xl font-bold mb-6">

        Quiz History

      </h2>

      {history.length === 0 ? (

        <p>No quizzes completed yet.</p>

      ) : (

        history.map((item, index) => (

          <div
            key={index}
            className="border-b py-4"
          >

            <p>
              Class {item.studentClass}
            </p>

            <p>
              {item.subject} • {item.difficulty}
            </p>

            <p>
              Score: {item.score}
            </p>

            <p>
              {item.date}
            </p>

          </div>

        ))

      )}

    </div>
  );
}