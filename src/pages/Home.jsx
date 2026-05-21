import { Link } from "react-router-dom";

export default function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">

      {/* Navbar */}

      <nav className="flex justify-between items-center p-6">

        <h1 className="text-3xl font-bold text-black">
          EduQuest
        </h1>

        <Link to="/login">

          <button className="bg-pink-500 text-white px-6 py-3 rounded-2xl">

            Login

          </button>

        </Link>

      </nav>

      {/* Hero Section */}

      <div className="flex flex-col items-center justify-center text-center px-6 mt-24">

        <h1 className="text-6xl font-bold leading-tight">

          Gamified Learning <br />

          For Every Student

        </h1>

        <p className="mt-8 text-xl text-gray-600 max-w-3xl">

          EduQuest transforms traditional learning into
          interactive games, quizzes, and skill challenges
          designed especially for accessible and engaging education.

        </p>

        <Link to="/dashboard">

          <button className="mt-10 bg-black hover:bg-gray-800 text-white px-10 py-5 rounded-3xl text-xl">

            Start Learning

          </button>

        </Link>

      </div>

      {/* Features */}

      <div className="grid md:grid-cols-3 gap-8 p-10 mt-24">

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-3xl font-bold">
            🎮 Gamified Learning
          </h2>

          <p className="mt-5 text-gray-600">

            Interactive quizzes, memory games,
            and timed math challenges.

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-3xl font-bold">
            📈 Progress Tracking
          </h2>

          <p className="mt-5 text-gray-600">

            XP systems, achievements, leaderboards,
            and performance analytics.

          </p>

        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">

          <h2 className="text-3xl font-bold">
            👩‍🏫 Teacher Analytics
          </h2>

          <p className="mt-5 text-gray-600">

            Teachers can monitor performance
            and manage student progress.

          </p>

        </div>

      </div>

      {/* Impact Section */}

      <div className="p-10 mt-16 text-center">

        <h2 className="text-5xl font-bold">

          Why EduQuest?

        </h2>

        <p className="mt-8 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">

          Millions of rural students struggle with traditional learning methods.
          EduQuest makes education engaging through gamification,
          helping learners improve retention, motivation,
          and participation through interactive experiences.

        </p>

      </div>

      {/* Footer */}

      <footer className="text-center py-10 mt-20 text-gray-500">

        Built with React, Tailwind CSS, and modern web technologies.

      </footer>

    </div>
  );
}