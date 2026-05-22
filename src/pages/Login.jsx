import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  async function handleGoogleLogin() {
  try {

    const result = await signInWithPopup(
      auth,
      provider
    );

    localStorage.setItem(
      "userName",
      result.user.displayName
    );

    localStorage.setItem(
      "userPhoto",
      result.user.photoURL
    );

    localStorage.setItem(
      "userEmail",
      result.user.email
    );

    console.log(result.user);

    console.log("LOGIN SUCCESS");


navigate("/dashboard");

  } catch (error) {

    console.error(error);

    alert("Login Failed");
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50 p-6">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center">
          Welcome To EduQuest
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Learn through games and challenges.
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border-2 border-gray-200 p-4 rounded-2xl mt-10"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border-2 border-gray-200 p-4 rounded-2xl mt-5"
        />

        <Link to="/dashboard">
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-2xl mt-8 text-lg transition">
            Student Login
          </button>
        </Link>

        <Link to="/teacher">
          <button className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-2xl mt-4 text-lg transition">
            Teacher Login
          </button>
        </Link>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="px-4 text-gray-500 font-medium">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border-2 border-gray-200 bg-white py-4 rounded-2xl text-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <span className="text-xl font-bold text-red-500">
            G
          </span>

          Continue with Google
        </button>

        <p className="text-center text-gray-400 text-sm mt-6">
          EduQuest © 2026
        </p>

      </div>

    </div>
  );
}
  