import React, { useEffect, useState } from "react";

const Timer = ({ setSubmit, submit }) => {

  const initialTimers = 30 * 60;
  const [secondsRemaining, setSecondRemaining] = useState(initialTimers);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondRemaining((prev) => prev - 1);
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [secondsRemaining]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  if (minutes == 0 && seconds == 0) {
    setSubmit(true);
  }else if(submit){
    setSecondRemaining(0)
  }

  return (
    <div>
      <p>
        Timer Remaining: <span style={{fontSize:"21px"}}> {minutes} min {seconds} sec{" "} </span>
      </p>
    </div>
  );
};

export default Timer;
