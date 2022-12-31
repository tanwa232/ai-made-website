import React, { useState, useEffect } from 'react';

function TypingAnimation() {
  const [typedText, setTypedText] = useState('');
  const phrase = 'This website made by AI';

  useEffect(() => {
    let i = -1;
    const type = setInterval(() => {
      i++;
      setTypedText((typedText) => typedText + phrase[i]);
      if (i === phrase.length - 1) {
        clearInterval(type);
      }
    }, 50);

    return () => clearInterval(type);
  }, []);

  return (
    <p className="text-3xl font-bold text-green-500">
      {typedText}
      <span className="text-3xl font-bold text-gray-300">|</span>
    </p>
  );
}

export default TypingAnimation;
