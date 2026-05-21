export default function Achievements() {

  const badges = [

    {
      name: "Quiz Master",
      emoji: "🏆",
    },

    {
      name: "Math Genius",
      emoji: "🧠",
    },

    {
      name: "Memory King",
      emoji: "🎯",
    },

  ];

  return (

    <div className="bg-white p-8 rounded-3xl shadow-lg h-full">

      <h2 className="text-3xl font-bold mb-6">
        Achievements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {badges.map((badge) => (

          <div
            key={badge.name}

            className="bg-gray-100 p-4 rounded-2xl text-center"
          >

            <p className="text-5xl">
              {badge.emoji}
            </p>

            <p className="mt-4 font-semibold">
              {badge.name}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}