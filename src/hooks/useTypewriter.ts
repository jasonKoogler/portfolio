import { useEffect, useState } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
}

const useTypewriter = ({ text, speed = 50 }: UseTypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [index, speed, text]);

  return { displayedText, isComplete };
};

export default useTypewriter;