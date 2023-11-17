'use client';

import { useState } from 'react';
import { IoIosLink, IoMdCheckmark } from 'react-icons/io';

const Clipboard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (text: string) => {
    setCopied(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <div onClick={() => copyToClipboard(text)} className="cursor-pointer">
      {copied ? (
        <IoMdCheckmark className="w-5 h-5 hover:animate-wiggle hover:text-white" />
      ) : (
        <IoIosLink className="w-5 h-5 hover:animate-wiggle hover:text-white" />
      )}
    </div>
  );
};

export default Clipboard;
