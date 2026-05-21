import { useEffect, useState } from "react";

export default function ProfileCard() {

  const avatars = [
    "🧑‍🎓",
    "👩‍💻",
    "🧑‍🚀",
    "🦸",
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(() => {

  return localStorage.getItem("avatar") || "🧑‍🎓";

});
useEffect(() => {

  localStorage.setItem("avatar", selectedAvatar);

}, [selectedAvatar]);

  return (

    <div className="bg-white p-8 rounded-3xl shadow-lg">

      {/* Top */}

      <div className="flex items-center gap-6">

        <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center text-5xl">

          {selectedAvatar}

        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Paridhi
          </h2>

          <p className="text-gray-500 mt-1">
            Level 3 Learner
          </p>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <p className="font-semibold">
            Level Progress
          </p>

          <p>
            70%
          </p>

        </div>

        <div className="w-full bg-gray-200 h-4 rounded-full">

          <div className="bg-pink-500 h-4 rounded-full w-4/6">

          </div>

        </div>

      </div>

      {/* Avatar Selection */}

      <div className="mt-8">

        <h3 className="text-xl font-bold mb-4">

          Choose Avatar

        </h3>

        <div className="flex gap-4 flex-wrap">

          {avatars.map((avatar) => (

            <button
              key={avatar}

              onClick={() => setSelectedAvatar(avatar)}

              className="text-4xl bg-gray-100 hover:bg-pink-100 p-4 rounded-2xl transition"
            >

              {avatar}

            </button>

          ))}

        </div>

      </div>

    </div>
  );
}