import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { MemoContent } from "./MemoContent";
import { PcLetterSectorProps } from "./types/sector.type";

export const LetterTopRightSector = ({
  onClick,
  isVisible,
  memoState,
}: PcLetterSectorProps) => {
  return (
    <div css={st.root} onClick={onClick}>
      {isVisible && <MemoContent props={memoState} />}
    </div>
  );
};

const st = {
  root: css`
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 50%;
    background-color: transparent;
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
