'use client';

import React, { useState, useEffect } from 'react';

const TYPING_WORDS = ["Games", "Websites", "AI Models", "Mobile Apps", "Code & Logic"];

const TypingHeadline: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('Games');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = TYPING_WORDS[currentWordIndex];

    if (!isDeleting) {
      if (currentText !== currentWord) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (currentText !== '') {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <div className="h-12 mb-6 text-xl md:text-3xl text-white/90 font-fredoka font-medium flex items-center justify-center lg:justify-start">
      <span className="text-gray-300">They'll learn to build&nbsp;</span>
      <span className="text-secondary font-extrabold border-b-2 border-primary/60 pb-0.5 inline-block">
        {currentText}
      </span>
      <span className="animate-cursor-blink text-primary font-bold ml-1 text-2xl">|</span>
    </div>
  );
};

export default React.memo(TypingHeadline);
