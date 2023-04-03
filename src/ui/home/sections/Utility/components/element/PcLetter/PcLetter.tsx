import { css } from "@emotion/react";
import Image from "next/image";
import ImgFoldedLetter from "@/assets/pc/utility/img-letter-fold.png";
import ImgLetter1 from "@/assets/pc/utility/img-letter-1.png";
import ImgLetter2 from "@/assets/pc/utility/img-letter-2.png";
import ImgLetter3 from "@/assets/pc/utility/img-letter-3.png";
import {
  LetterBottomLeftSector,
  LetterTopLeftSector,
  LetterTopRightSector,
} from "../common/BottomSection";
import { UsePcLetter } from "./UsePcLetter";
import { MediaQueries } from "@/common/theme/screen";
import { Lock } from "../common";

export const PcLetter = () => {
  const { letterState, memo } = UsePcLetter();

  return (
    <div css={st.letter} onClick={() => null}>
      <div css={st.letterImage}>
        <Image
          fill
          src={getClickedLetterImage(letterState.index)}
          alt="letter"
        />
      </div>
      <Lock />
      <LetterTopRightSector
        onClick={letterState.onIndexOpen(1)}
        isVisible={letterState.index === 1}
        memoState={memo}
      />
      <LetterTopLeftSector
        onClick={letterState.onIndexOpen(2)}
        isVisible={letterState.index === 2}
        memoState={memo}
      />
      <LetterBottomLeftSector
        onClick={letterState.onIndexOpen(3)}
        isVisible={letterState.index === 3}
        memoState={memo}
      />
    </div>
  );
};

const st = {
  letter: css`
    width: 46.87vw;
    aspect-ratio: 1;
    position: relative;
    z-index: 2;

    @media ${MediaQueries.lg} {
      width: 100%;
    }
  `,
  letterImage: css`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
  `,
};

const getClickedLetterImage = (index: number) => {
  switch (index) {
    case 0:
      return ImgFoldedLetter;
    case 1:
      return ImgLetter1;
    case 2:
      return ImgLetter2;
    case 3:
      return ImgLetter3;
    default:
      return ImgFoldedLetter;
  }
};
