import { useState, useEffect } from "react";

interface WavyTextProps {
  phrases: string[];
  interval?: number;
  className?: string;
}

const WavyText = ({ phrases, interval = 4000, className = "" }: WavyTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(true);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  const currentPhrase = phrases[currentIndex];

  return (
    <span className={className}>
      {currentPhrase.split("").map((char, index) => (
        <span
          key={`${currentIndex}-${index}`}
          className="inline-block"
          style={{
            animation: isAnimating
              ? `wavyChar 0.6s ease-out forwards`
              : `wavyCharOut 0.4s ease-in forwards`,
            animationDelay: `${index * 0.03}s`,
            opacity: 0,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default WavyText;
