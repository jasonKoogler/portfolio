import React from 'react';
import useTypewriter from '../hooks/useTypewriter';

const HomePage: React.FC = () => {
  const fullText = `> HELLO WORLD\n> I'M JASON\n> WELCOME TO MY PORTFOLIO\n\n> I'M A DEVELOPER SPECIALIZING IN\n> FRONTEND & UX DESIGN\n\n> NAVIGATE THROUGH THE CHANNELS\n> TO LEARN MORE ABOUT ME AND MY WORK`;

  const { displayedText, isComplete } = useTypewriter({
    text: fullText,
    speed: 50
  });

  return (
    <div className="w-full h-full flex flex-col p-4">
      <pre className="text-primary font-mono whitespace-pre-wrap leading-relaxed text-sm mb-8">{displayedText}</pre>

    </div>
  );
};

export default HomePage;