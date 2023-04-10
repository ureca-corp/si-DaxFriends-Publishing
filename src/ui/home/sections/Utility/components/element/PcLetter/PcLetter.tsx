import { css } from "@emotion/react";
import Image from "next/image";
import ImgFoldedLetter from "@/assets/pc/utility/img-letter-fold.png";
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
        <Image fill src={ImgFoldedLetter} alt="letter" />
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
