'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Users, ShieldCheck, Languages, GraduationCap, ArrowRight, Code } from 'lucide-react';
import Link from 'next/link';
import CodeRain from './CodeRain';

const TYPING_WORDS = ["Games", "Websites", "AI Models", "Mobile Apps", "Code & Logic"];

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('Games');
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth typing effect
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
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-dark-base pt-20">
      {/* Code Rain Background */}
      <CodeRain />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base/50 via-dark-base/20 to-dark-base z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Main Hero Content */}
          <div className="flex-1 w-full max-w-2xl text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-primary text-sm font-bold mb-8 animate-fade-in-up border border-white/10">
              <Terminal className="w-4 h-4 mr-2 shrink-0" />
              <span>India's Most Trusted Coding Academy - Ages 7 to 17</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-protest font-bold text-white tracking-tight mb-6 leading-tight">
              Where Kids Learn to{' '}
              <span className="text-primary">Code</span>,{' '}
              <span className="text-secondary">Create</span>{' '}
              &amp; Conquer the Future
            </h1>

            {/* Typing subline */}
            <div className="h-12 mb-6 text-xl md:text-3xl text-white/90 font-fredoka font-medium flex items-center justify-center lg:justify-start">
              <span className="text-gray-300">They'll learn to build&nbsp;</span>
              <span className="text-secondary font-extrabold border-b-2 border-primary/60 pb-0.5 inline-block">
                {currentText}
              </span>
              <span className="animate-cursor-blink text-primary font-bold ml-1 text-2xl">|</span>
            </div>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 font-poppins mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From age 7 to 17 - we teach programming, logic, and problem-solving in the most fun way possible.{' '}
              <span className="text-primary font-semibold">In Hindi &amp; English.</span>{' '}
              No boring lectures. Just building cool stuff.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
              <Link
                href="/book-demo"
                className="w-full sm:w-auto btn-primary group px-8 text-base text-center"
              >
                Start Learning Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/courses"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-all font-fredoka text-center"
              >
                See Our Courses →
              </Link>
            </div>
            <p className="text-gray-500 text-xs font-poppins mb-12">
              Free demo. Your child will love it - or you owe us nothing.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400 font-poppins border-t border-white/10 pt-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary shrink-0" />
                <span className="font-semibold text-white">Ages 7–17</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages className="w-5 h-5 text-primary shrink-0" />
                <span className="font-semibold text-white">Hindi &amp; English</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span className="font-semibold text-white">5/5 Parent Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary shrink-0" />
                <span className="font-semibold text-white">500+ Young Coders</span>
              </div>
            </div>
          </div>

          {/* Floating Code Card */}
          <div className="hidden lg:flex flex-1 justify-center relative w-full h-[500px]">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[450px] bg-white rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex items-center text-xs text-gray-400 font-mono">
                  <Code className="w-4 h-4 mr-1 text-secondary" />
                  my_first_project.py
                </div>
              </div>
              <div className="font-mono text-sm leading-relaxed overflow-hidden">
                <pre className="text-dark-base">
                  <span className="text-secondary">class</span> <span className="text-primary font-bold">MyFirstGame</span>:{"\n"}
                  {"  "}<span className="text-secondary">def</span> <span className="text-primary">__init__</span>(self):{"\n"}
                  {"    "}self.player = Player(<span className="text-primary">"SuperKid"</span>){"\n"}
                  {"    "}self.score = <span className="text-primary">0</span>{"\n"}
                  {"\n"}
                  {"  "}<span className="text-secondary">def</span> <span className="text-primary">on_win</span>(self):{"\n"}
                  {"    "}print(<span className="text-primary">"Coding is a Superpower!"</span>){"\n"}
                  {"    "}self.player.celebrate(){"\n"}
                  {"\n"}
                  game = MyFirstGame(){"\n"}
                  game.on_win()
                </pre>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-4 rounded-2xl shadow-xl border border-white/10 animate-bounce-slow font-fredoka">
                <div className="font-bold text-xl">100%</div>
                <div className="text-xs opacity-90">Parent Approved</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SVG Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-light-base"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
