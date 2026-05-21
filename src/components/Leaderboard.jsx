export default function Leaderboard() {

  const leaders = [

    {
      name: "Riya",
      xp: 450,
    },

    {
      name: "Aman",
      xp: 390,
    },

    {
      name: "Kunal",
      xp: 320,
    },

  ];

  return (

    <div className="bg-white p-8 rounded-3xl shadow-lg h-full">

      <h2 className="text-3xl font-bold mb-6">
        Leaderboard
      </h2>

      <div className="space-y-4">

        {leaders.map((leader, index) => (

          <div
            key={leader.name}

            className="flex justify-between items-center bg-gray-100 p-4 rounded-2xl"
          >

            <div className="flex items-center gap-4">

              <p className="text-2xl font-bold">
                #{index + 1}
              </p>

              <p className="text-xl">
                {leader.name}
              </p>

            </div>

            <p className="font-bold text-pink-500">
              {leader.xp} XP
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}
