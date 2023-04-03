import { useState } from "react";
import { UtilityModels } from "../../../models/utility.models";

export const UsePcLetter = () => {
  const models = UtilityModels;

  const [letterOpen, setLetterOpen] = useState(0);
  const handleLetterClose = () => {
    setLetterOpen(0);
  };

  const handleLetterOpen = (index: number) => {
    return letterOpen === index
      ? handleLetterClose
      : () => setLetterOpen(index);
  };

  const letterText = letterOpen === 0 ? null : models[letterOpen - 1];

  return {
    letterState: {
      index: letterOpen,
      onIndexOpen: handleLetterOpen,
    },
    memo: letterText,
  };
};
