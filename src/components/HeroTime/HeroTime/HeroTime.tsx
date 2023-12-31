import React, { useState, useEffect } from "react";
import "./hero-time.scss";
import Music from "../../Music/Music";
import { motion } from "framer-motion";
const HeroTime: React.FC = () => {
  const targetHour = 17; // 5:00 PM
  const targetMinute = 30;

  interface TimeRemaining {
    hours: number;
    minutes: number;
    seconds: number;
  }

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(
    null
  );

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const targetTime = new Date(now);
      targetTime.setHours(targetHour, targetMinute, 0, 0);

      let timeDiff = targetTime.getTime() - now.getTime();

      if (timeDiff < 0) {
        // If target time has passed for the day, calculate for the next day
        targetTime.setDate(targetTime.getDate() + 1);
        timeDiff = targetTime.getTime() - now.getTime();
      }

      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      timeDiff -= hours * 1000 * 60 * 60;
      const minutes = Math.floor(timeDiff / (1000 * 60));
      timeDiff -= minutes * 1000 * 60;
      const seconds = Math.floor(timeDiff / 1000);

      setTimeRemaining({ hours, minutes, seconds });
    };

    const intervalId = setInterval(calculateTimeRemaining, 1000); // Update every second

    calculateTimeRemaining(); // Calculate initial time remaining

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <motion.div
        animate={{
          scale: [0.2, 1],
          translateY: [100, 400],
        }}
        transition={{
          duration: 15,
          ease: "easeIn",
          repeat: Infinity,
          repeatDelay: 4,
        }}
        className="duck-container"
      >
        <img
          className="duck"
          src={process.env.PUBLIC_URL + "/giphy.gif"}
          alt="duck"
        />
      </motion.div>

      {timeRemaining ? (
        <h1 className="hero-text">
          {timeRemaining?.hours} : {timeRemaining?.minutes} :{"  "}
          <motion.div
            animate={{
              opacity: [0.1, 0],
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
              repeat: Infinity,
            }}
            className="second"
          >
            {timeRemaining!.seconds < 10 ? "0" : ""}
            {timeRemaining?.seconds}
          </motion.div>
        </h1>
      ) : (
        <h1 className="hero-text">Loading....</h1>
      )}
      {<Music />}
    </div>
  );
};

export default HeroTime;
