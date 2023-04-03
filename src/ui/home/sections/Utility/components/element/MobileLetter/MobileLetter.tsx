import { css } from "@emotion/react";
import Image from "next/image";
import ImgFoldedLetter from "@/assets/pc/utility/img-letter-fold.png";
import ImgMemo from "@/assets/mb/utility/img-memo.png";
import {
  LetterBottomLeftSector,
  LetterTopLeftSector,
  LetterTopRightSector,
} from "../common/BottomSection";
import { UseMobileLetter } from "./UseMobileLetter";
import { Lock } from "../common";
import { Typography } from "@mui/material";

export const MobileLetter = () => {
  const { letterState, textState } = UseMobileLetter();

  return (
    <div css={st.letter} onClick={() => null}>
      {letterState.index === 0 ? (
        <div css={st.letterImage}>
          <Image fill src={ImgFoldedLetter} alt="letter" />
        </div>
      ) : (
        <div css={st.memo} onClick={letterState.onClose}>
          <Image fill src={ImgMemo} alt="letter" />
          <div css={st.memoText}>
            <Typography color="white" css={st.title}>
              {textState?.title}
            </Typography>
            <ul>
              {textState?.desc.map((it, _) => (
                <li key={_}>
                  <Typography color="white" css={st.desc}>
                    {it}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
  memo: css`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 4;
    cursor: pointer;
  `,
  memoText: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5.55vw;
    position: relative;
    z-index: 5;
    padding: 10px;
    padding-top: 11vw;
  `,
  title: css`
    font-size: 7vw;
    line-height: 1;
    text-indent: -20px;
    margin-left: 30px;
  `,
  desc: css`
    font-size: 5vw;
    line-height: 1.4;
    text-indent: -20px;
    margin-left: 30px;
  `,
};
