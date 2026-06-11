import { Link } from "react-router-dom";
import { useContext } from "react";

import { XPContext } from "../context/XPContext";

import Achievements from "../components/Achievements";
import Leaderboard from "../components/Leaderboard";
import ProfileCard from "../components/ProfileCard";
import QuizHistory from "../components/QuizHistory";

export default function Dashboard() {

  const { xp, streak } = useContext(XPContext);
  
  const userName =
  localStorage.getItem("userName") || "Learner";

const userPhoto =
  localStorage.getItem("userPhoto");

  return (

    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">

      {/* Navbar */}

      <nav className="flex justify-between items-center p-6 bg-white shadow-sm">

        <h1 className="text-3xl font-bold text-black">
          EduQuest
        </h1>

        <div className="flex gap-4">

          <Link to="/">
            <button className="bg-pink-500 text-white px-5 py-2 rounded-xl">
              Home
            </button>
          </Link>

        </div>

      </nav>

      {/* Main Content */}

      <div className="p-8">

        {/* Welcome */}

       <div className="bg-white p-6 rounded-3xl shadow-lg mb-6 flex items-center gap-4">

  {userPhoto && (
    <img
      src={userPhoto}
      alt="Profile"
      className="w-16 h-16 rounded-full"
    />
  )}

  <div>

    <h1 className="text-4xl font-bold">
      Welcome Back, {userName} 👋
    </h1>

    <p className="mt-2 text-gray-600">
      Continue learning and improve your skills.
    </p>

  </div>

</div>

        <div className="mt-10">
  <ProfileCard />
</div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* XP */}

          <div className="bg-white p-6 rounded-3xl shadow-lg">

            <h2 className="text-xl font-semibold">
              Total XP
            </h2>

            <p className="text-5xl font-bold mt-4 text-pink-500">
              {xp}
            </p>

          </div>

          {/* Games Played */}

          <div className="bg-white p-6 rounded-3xl shadow-lg">

            <h2 className="text-xl font-semibold">
              Games Played
            </h2>

            <p className="text-5xl font-bold mt-4 text-blue-500">
              12
            </p>

          </div>

          {/* Daily Streak */}

          <div className="bg-white p-6 rounded-3xl shadow-lg">

            <h2 className="text-xl font-semibold">
              Daily Streak
            </h2>

            <p className="text-5xl font-bold mt-4 text-green-500">
             🔥 {streak}
            </p>

          </div>

        </div>

        {/* Progress */}

        <div className="bg-white p-8 rounded-3xl shadow-lg mt-10">

          <div className="flex justify-between mb-4">

            <h2 className="text-2xl font-bold">
              Learning Progress
            </h2>

            <p className="font-semibold">
              60%
            </p>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-5">

            <div className="bg-pink-500 h-5 rounded-full w-3/5">

            </div>

          </div>

        </div>

        {/* Achievements + Leaderboard */}

        <div className="flex flex-col lg:flex-row gap-8 mt-12">

          <div className="flex-1">
            <Achievements />
          </div>

          <div className="flex-1">
            <Leaderboard />
          </div>

        </div>

        {/* Games Section */}

        <h2 className="text-4xl font-bold mt-16 mb-8">
          Learning Games
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Quiz */}

          <Link to="/quiz">

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

              <h3 className="text-3xl font-bold">
                Quiz Challenge
              </h3>

              <p className="mt-4 text-gray-600">
                Answer MCQs and gain XP.
              </p>

            </div>

          </Link>

          {/* Memory */}

          <Link to="/memory">

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

              <h3 className="text-3xl font-bold">
                Memory Match
              </h3>

              <p className="mt-4 text-gray-600">
                Train your memory with fun cards.
              </p>

            </div>

          </Link>

          {/* Math */}

          <Link to="/math">

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

              <h3 className="text-3xl font-bold">
                Math Rush
              </h3>

              <p className="mt-4 text-gray-600">
                Solve questions before time runs out.
              </p>

            </div>

          </Link>

          <Link to="/ai-quiz">

  <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

    <h3 className="text-3xl font-bold">
      AI Quiz Generator
    </h3>

    <p className="mt-4 text-gray-600">
      Generate dynamic quizzes instantly.
    </p>

    <QuizHistory />

  </div>


</Link>
<Link to="/science-detective">

  <div className="bg-white p-8 rounded-3xl shadow-lg hover:scale-105 transition">

    <h3 className="text-3xl font-bold">
      Science Detective
    </h3>

    <p className="mt-4 text-gray-600">
      Solve science mysteries and earn XP.
    </p>

  </div>

</Link>

        </div>

      </div>

    </div>
  );
}