import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";
import { MobileLetter } from "./element/MobileLetter";
import { PcLetter } from "./element/PcLetter";
import { css } from "@emotion/react";

export const Letter = () => {
  const { isSmall } = useCustomMediaQuery();
  return <div css={st.inner}>{isSmall ? <MobileLetter /> : <PcLetter />}</div>;
};

const st = {
  inner: css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media ${MediaQueries.lg} {
      height: 70vh;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    @media ${MediaQueries.sm} {
      height: 70vh;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  `,
};
