import React from 'react';
import { Link } from 'react-router';
import useTypewriter from '../hooks/useTypewriter';

const HomePage: React.FC = () => {
  const fullText = `> HELLO WORLD\n> I'M JASON\n> WELCOME TO MY PORTFOLIO\n\n> I'M A DEVELOPER SPECIALIZING IN\n> FRONTEND & UX DESIGN\n\n> NAVIGATE THROUGH THE CHANNELS\n> TO LEARN MORE ABOUT ME AND MY WORK`;

  const { displayedText, isComplete } = useTypewriter({
    text: fullText,
    speed: 50
  });

  return (
    <div className="w-full h-full ">
      <pre className="font-mono whitespace-pre-wrap leading-relaxed text-lg mb-8">{displayedText}</pre>
      {isComplete && (
        <div className="flex gap-4 mt-5">
          <Link to="/projects" className="crt-button">VIEW PROJECTS</Link>
          <Link to="/contact" className="crt-button">GET IN TOUCH</Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;