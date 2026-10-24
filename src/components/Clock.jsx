import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-GB", { hour12: false })
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time}</span>;
};

export default Clock;
