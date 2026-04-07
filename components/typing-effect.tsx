"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delayBetweenCycles?: number;
  className?: string;
  cursorClassName?: string;
}

export default function TypingEffect({
  text,
  speed = 100,
  delayBetweenCycles = 3000,
  className = "",
  cursorClassName = "",
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (displayText.length < text.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    } else if (displayText.length === text.length && !isComplete) {
      // Mark as complete when fully typed
      setIsComplete(true);
    } else if (isComplete) {
      // Wait before restarting
      timeout = setTimeout(() => {
        setDisplayText("");
        setIsComplete(false);
      }, delayBetweenCycles);
    }

    return () => clearTimeout(timeout);
  }, [displayText, text, speed, delayBetweenCycles, isComplete]);

  return (
    <span className={className}>
      <span style={{ opacity: displayText.length > 0 ? 1 : 0, transition: "opacity 0.3s ease" }}>
        {displayText || text}
      </span>
      {displayText.length > 0 && (
        <span
          className={`inline-block bg-current ${cursorClassName}`}
          style={{ 
            width: "0.6em", 
            height: "0.08em",
            marginLeft: "0.3em",
            animation: "blink 0.7s infinite"
          }}
        />
      )}
    </span>
  );
}
