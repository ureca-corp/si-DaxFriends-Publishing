import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { MemoContent } from "./MemoContent";
import { PcLetterSectorProps } from "./types/sector.type";

export const LetterTopLeftSector = ({
  onClick,
  isVisible = false,
  memoState,
}: PcLetterSectorProps) => {
  return (
    <div css={st.root(isVisible)} onClick={onClick}>
      {isVisible && <MemoContent props={memoState} />}
    </div>
  );
};

const st = {
  root: (isVisible: boolean) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    background-color: ${isVisible ? "#c1a8ff" : "transparent"};
    z-index: 3;
    cursor: pointer;
    padding: 2.08vw;
    display: flex;
    flex-direction: column;
    gap: 1.04vw;
    -webkit-tap-highlight-color: transparent;
    @media ${MediaQueries.lg} {
      padding: 3.6vw 1.8vw;
      gap: 3.2vw;
    }
  `,
};
