import React, { useEffect, useState } from "react";

const HeroTypeWritter = ({ words, speed = 80 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentext, setCurrenttext] = useState("");
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setCurrenttext(currentWord.slice(0, charIndex));
        charIndex++;
      } else {
        // word typed out, clear and move to the next word
        clearInterval(typingInterval);

        setTimeout(() => {
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }, 1200);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentWord, speed, words]);

  return (
    <span className="font-mono tracking-tight text-primary">
      {currentext}
      <span
        className="inline-block align-[-0.1em] ml-1 h-[0.85em] w-[0.45em] bg-primary animate-blink"
        aria-hidden="true"
      />
    </span>
  );
};

export default HeroTypeWritter;
