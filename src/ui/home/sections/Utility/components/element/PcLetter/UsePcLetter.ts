import { useState } from "react";

export const UsePcLetter = () => {
  const [letterOpen, setLetterOpen] = useState(0);
  const handleLetterClose = () => {
    setLetterOpen(0);
  };

  const handleLetterOpen = (index: number) => {
    return letterOpen === index
      ? handleLetterClose
      : () => setLetterOpen(index);
  };
  return {
    letterState: {
      index: letterOpen,
      onIndexOpen: handleLetterOpen,
    },
  };
};
