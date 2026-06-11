import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import TeacherDashboard from "./pages/TeacherDashboard";

import QuizGame from "./games/QuizGame";
import MemoryGame from "./games/MemoryGame";
import MathRush from "./games/MathRush";
import AIQuizGenerator from "./pages/AIQuizGenerator";
import ScienceDetective from "./games/ScienceDetective";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/login" element={<Login />} />

      <Route path="/teacher" element={<TeacherDashboard />} />

      <Route path="/quiz" element={<QuizGame />} />

      <Route path="/memory" element={<MemoryGame />} />

      <Route path="/math" element={<MathRush />} />

      <Route path="/ai-quiz" element={<AIQuizGenerator />} />

      <Route
  path="/science-detective"
  element={<ScienceDetective />}
/>

    </Routes>
  );
}

export default App;