import { css } from "@emotion/react";
import { LetterSectorProps } from "../../common/BottomSection/types/sector.type";

export const LetterTopLeftSector = ({ onClick }: LetterSectorProps) => {
  return <div css={st.root} onClick={onClick}></div>;
};

const st = {
  root: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    background-color: transparent;
    z-index: 3;
    cursor: pointer;
  `,
};
