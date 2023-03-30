import { css } from "@emotion/react";
import Image from "next/image";
import ImgLock from "@/assets/pc/utility/img-lock.png";
import ImgFoldedLetter from "@/assets/pc/utility/img-letter-fold.png";
import ImgLetter1 from "@/assets/pc/utility/img-letter-1.png";
import ImgLetter2 from "@/assets/pc/utility/img-letter-2.png";
import ImgLetter3 from "@/assets/pc/utility/img-letter-3.png";
import {
  LetterBottomLeftSector,
  LetterTopLeftSector,
  LetterTopRightSector,
} from "./element";
import { UseLetter } from "./UseLetter";
import { MediaQueries } from "@/common/theme/screen";

export const Letter = () => {
  const { letterState } = UseLetter();

  return (
    <div css={st.letter} onClick={() => null}>
      <div css={st.letterImage}>
        <Image
          fill
          src={getClickedLetterImage(letterState.index)}
          alt="letter"
        />
      </div>
      <div css={st.lockWrapper}>
        <div css={st.lock}>
          <Image fill src={ImgLock} alt="letter" />
        </div>
      </div>
      <LetterTopRightSector onClick={letterState.onIndexOpen(1)} />
      <LetterTopLeftSector onClick={letterState.onIndexOpen(2)} />
      <LetterBottomLeftSector onClick={letterState.onIndexOpen(3)} />
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
  lockWrapper: css`
    position: absolute;
    bottom: 30%;
    right: 29.44%;
    z-index: 3;
  `,
  lock: css`
    position: relative;
    width: 4.68vw;
    aspect-ratio: 1/1.35;
    cursor: pointer;

    @media ${MediaQueries.lg} {
      width: 7.81vw;
    }

    &:hover {
      animation: shake 0.5s;
    }

    @keyframes shake {
      0% {
        transform: translate(1px, 1px) rotate(0deg);
      }
      10% {
        transform: translate(-1px, -2px) rotate(-1deg);
      }
      20% {
        transform: translate(-3px, 0px) rotate(1deg);
      }
      30% {
        transform: translate(3px, 2px) rotate(0deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(1deg);
      }
      50% {
        transform: translate(-1px, 2px) rotate(-1deg);
      }
      60% {
        transform: translate(-3px, 1px) rotate(0deg);
      }
      70% {
        transform: translate(3px, 1px) rotate(-1deg);
      }
      80% {
        transform: translate(-1px, -1px) rotate(1deg);
      }
      90% {
        transform: translate(1px, 2px) rotate(0deg);
      }
      100% {
        transform: translate(1px, -2px) rotate(-1deg);
      }
    }
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
