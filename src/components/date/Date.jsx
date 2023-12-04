import React, { useState, useEffect } from "react";

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = currentDateTime.toLocaleDateString(undefined, options);
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <div>
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>
    </div>
  );
};

export default DateTimeDisplay;
