import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import Image from "next/image";
import ImgLetter from "@/assets/pc/utility/img-letter.png";
import ImgFoldedLetter from "@/assets/pc/utility/img-letter-fold.png";
import ImgPinkBlur from "@/assets/pc/utility/img-blur.png";
import ImgLock from "@/assets/pc/utility/img-lock.png";
import { useState } from "react";

export const Utility = () => {
  const [letterOpen, setLetterOpen] = useState(false);
  const handleLetterOpen = () => {
    setLetterOpen(true);
  };
  const handleLetterClose = () => {
    setLetterOpen(false);
  };
  return (
    <section css={st.root}>
      <div css={st.inner}>
        {letterOpen ? (
          <div css={st.letter} onClick={handleLetterClose}>
            <div css={st.letterImage}>
              <Image fill src={ImgLetter} alt="letter" />
            </div>
            <div css={st.lockWrapper}>
              <div css={st.lock}>
                <Image fill src={ImgLock} alt="letter" />
              </div>
            </div>
          </div>
        ) : (
          <div css={st.letter} onClick={handleLetterOpen}>
            <div css={st.letterImage}>
              <Image fill src={ImgFoldedLetter} alt="letter" />
            </div>
            <div css={st.lockWrapper}>
              <div css={st.lock}>
                <Image fill src={ImgLock} alt="letter" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div css={st.blurWrapper}>
        <div css={st.blur}>
          <Image fill src={ImgPinkBlur} alt="blur" />
        </div>
      </div>
    </section>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100vh;
    background-color: ${LightColor.LightPink};
    position: relative;
    overflow: hidden;
    z-index: 1;
  `,
  inner: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `,
  letter: css`
    width: 46.87vw;
    aspect-ratio: 1;
    position: relative;
    z-index: 2;
  `,
  letterImage: css`
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1;
  `,
  blurWrapper: css`
    position: absolute;
    bottom: -25vw;
    right: -35vw;
  `,
  blur: css`
    position: relative;
    width: 85vw;
    aspect-ratio: 1;
  `,
  lockWrapper: css`
    position: absolute;
    bottom: 14.06vw;
    right: 13.8vw;
    z-index: 3;
  `,
  lock: css`
    position: relative;
    width: 4.68vw;
    aspect-ratio: 1/1.35;
    cursor: pointer;

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
