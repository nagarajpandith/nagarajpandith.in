'use client';

import { Typewriter } from 'react-simple-typewriter';

const TypeWriting = () => {
  return (
    <span className="text-primary font-bold">
      <Typewriter
        words={['Code.', 'Design.', 'Capture.', 'Edit.']}
        loop={0}
        cursor
        cursorStyle="|"
      />
    </span>
  );
};

export default TypeWriting;
