import { css } from "@emotion/react";
import Image from "next/image";
import ImgFoldedLetter from "@/assets/pc/utility/img-letter-fold.png";
import { UseMobileLetter } from "./UseMobileLetter";
import { Lock } from "../common";
import { SmallMemo } from "./SmallMemo";
import {
  LetterBottomLeftSector,
  LetterTopLeftSector,
  LetterTopRightSector,
} from "./SmallBottomSection";

export const MobileLetter = () => {
  const { letterState, memoState } = UseMobileLetter();

  return (
    <div css={st.letter} onClick={() => null}>
      {letterState.index === 0 ? (
        <div css={st.letterImage}>
          <Image fill src={ImgFoldedLetter} alt="letter" />
        </div>
      ) : (
        <SmallMemo onMemoOpen={letterState.onClose} memoState={memoState} />
      )}
      <Lock isVisible={letterState.index === 0} />
      <LetterTopRightSector onClick={letterState.onIndexOpen(1)} />
      <LetterTopLeftSector onClick={letterState.onIndexOpen(2)} />
      <LetterBottomLeftSector onClick={letterState.onIndexOpen(3)} />
    </div>
  );
};

const st = {
  letter: css`
    width: 100%;
    aspect-ratio: 1;
    position: relative;
    z-index: 2;
  `,
  letterImage: css`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
  `,
};
