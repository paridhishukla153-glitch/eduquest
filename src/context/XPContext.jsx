import {
  createContext,
  useEffect,
  useState,
} from "react";

export const XPContext = createContext();

export default function XPProvider({ children }) {

  // XP

  const [xp, setXp] = useState(() => {

    const savedXP = localStorage.getItem("xp");

    return savedXP ? Number(savedXP) : 0;
  });

  // Streak

  const [streak, setStreak] = useState(() => {

    const savedStreak = localStorage.getItem("streak");

    return savedStreak ? Number(savedStreak) : 1;
  });

  // Save XP

  useEffect(() => {

    localStorage.setItem("xp", xp);

  }, [xp]);

  // Save Streak

  useEffect(() => {

    localStorage.setItem("streak", streak);

  }, [streak]);

  return (

    <XPContext.Provider
      value={{
        xp,
        setXp,
        streak,
        setStreak,
      }}
    >

      {children}

    </XPContext.Provider>
  );
}