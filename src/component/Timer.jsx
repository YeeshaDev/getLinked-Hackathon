import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update seconds
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;
        const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
        const newHours = prevTime.hours + Math.floor(newMinutes / 60);

        return {
          hours: newHours % 24, //This is  Limited to 24 hours
          minutes: newMinutes % 60,
          seconds: newSeconds % 60,
        };
      });
    }, 1000);

    // Clear interval once the component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="block mt-5">
      <div className=" timer flex items-center justify-center lg:justify-start gap-5  ">
        <h4 className="text-[50px] md:text-[64px] flex items-center">
          {formatTime(time.hours)} <span className="text-[14px] mt-7">H</span>{" "}
        </h4>
        <h4 className="text-[50px] md:text-[64px] flex items-center">
          {formatTime(time.minutes)} <span className="text-[14px] mt-7">M</span>{" "}
        </h4>
        <h4 className="text-[50px] md:text-[64px] flex items-center">
          {formatTime(time.seconds)} <span className="text-[14px] mt-7">S</span>{" "}
        </h4>
      </div>
    </div>
  );
};

export default Timer;
