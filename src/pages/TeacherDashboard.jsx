import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


export default function TeacherDashboard(){

  const data = [

  {
    day: "Mon",
    score: 60,
  },

  {
    day: "Tue",
    score: 72,
  },

  {
    day: "Wed",
    score: 68,
  },

  {
    day: "Thu",
    score: 85,
  },

  {
    day: "Fri",
    score: 90,
  },

];

 
  

  return (

    <div className="min-h-screen bg-gray-100 p-8">

      {/* Heading */}

      <div className="flex justify-between items-center">

        <h1 className="text-5xl font-bold">
          Teacher Dashboard 👩‍🏫
        </h1>

        <button className="bg-black text-white px-6 py-3 rounded-2xl">
          Add New Quiz
        </button>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 rounded-3xl shadow-lg">

          <h2 className="text-xl font-semibold">
            Total Students
          </h2>

          <p className="text-5xl font-bold mt-4 text-pink-500">
            120
          </p>

        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg">

          <h2 className="text-xl font-semibold">
            Quizzes Created
          </h2>

          <p className="text-5xl font-bold mt-4 text-blue-500">
            18
          </p>

        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg">

          <h2 className="text-xl font-semibold">
            Average Score
          </h2>

          <p className="text-5xl font-bold mt-4 text-green-500">
            78%
          </p>

        </div>

      </div>

      {/* Student Performance */}

      <div className="bg-white p-8 rounded-3xl shadow-lg mt-10">

        <h2 className="text-3xl font-bold mb-6">
          Student Performance
        </h2>

        <div className="space-y-5">

          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-2xl">

            <p className="text-lg font-semibold">
              Riya
            </p>

            <p className="text-pink-500 font-bold">
              450 XP
            </p>

          </div>

          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-2xl">

            <p className="text-lg font-semibold">
              Aman
            </p>

            <p className="text-blue-500 font-bold">
              390 XP
            </p>

          </div>

          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-2xl">

            <p className="text-lg font-semibold">
              Kunal
            </p>

            <p className="text-green-500 font-bold">
              320 XP
            </p>

          </div>

        </div>

      </div>
      {/* Analytics Chart */}

<div className="bg-white p-8 rounded-3xl shadow-lg mt-10">

  <h2 className="text-3xl font-bold mb-8">

    Weekly Student Performance

  </h2>

  <div className="w-full h-80">

    <ResponsiveContainer>

      <LineChart data={data}>

        <XAxis dataKey="day" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="score"
          stroke="#ec4899"
          strokeWidth={4}
        />

      </LineChart>

    </ResponsiveContainer>

  </div>

</div>

    </div>
  );
}