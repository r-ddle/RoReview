import { useEffect, useRef } from 'react';

interface CommentsProps {
  gameName: string;
}

export function Comments({ gameName }: CommentsProps) {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (commentsRef.current) {
      commentsRef.current.innerHTML = '';
    }

    const script = document.createElement('script');
    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'r-ddle/RoReview',
      'issue-term': `game-${gameName}`, // Unique identifier per game
      label: 'comment',
      theme: 'github-light',
      crossorigin: 'anonymous',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    script.async = true;

    if (commentsRef.current) {
      commentsRef.current.appendChild(script);
    }

    return () => {
      if (commentsRef.current) {
        commentsRef.current.innerHTML = '';
      }
    };
  }, [gameName]); // Re-run when game changes

  return <div ref={commentsRef} className="mt-8 p-4" />;
}
