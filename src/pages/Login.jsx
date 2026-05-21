import { Link } from "react-router-dom";

export default function Login() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50 p-6">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center">
          Welcome To EduQuest
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Learn through games and challenges.
        </p>

        {/* Email */}

        <input
          type="email"
          placeholder="Enter Email"

          className="w-full border-2 border-gray-200 p-4 rounded-2xl mt-10"
        />

        {/* Password */}

        <input
          type="password"
          placeholder="Enter Password"

          className="w-full border-2 border-gray-200 p-4 rounded-2xl mt-5"
        />

        {/* Student Login */}

        <Link to="/dashboard">

          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-2xl mt-8 text-lg">

            Student Login

          </button>

        </Link>

        {/* Teacher Login */}

        <Link to="/teacher">

          <button className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-2xl mt-4 text-lg">

            Teacher Login

          </button>

        </Link>

      </div>

    </div>
  );
}