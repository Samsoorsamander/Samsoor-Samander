import React, { useEffect, useState } from "react";

const HeroTypeWritter = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentext, setCurrenttext] = useState("");
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let chartIndex = 0;

    const typingInterval = setInterval(() => {
      if (chartIndex <= currentWord.length) {
        setCurrenttext(currentWord.slice(0, chartIndex));
      }
    }, speed);
  }, []);
  return (
    <span
      className="tracking-wider text-transparent bg-clip-text 
    bg-gradient-to-r from-primary to-secondary mt-7"
    >
      YouTuber
    </span>
  );
};

export default HeroTypeWritter;
