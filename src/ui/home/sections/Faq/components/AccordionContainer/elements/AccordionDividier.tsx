import { LightColor } from "@/common/theme/color";
import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";

export const AccordionDivider = () => {
  return (
    <div css={st.dividerWrapper}>
      <div css={st.divider}></div>
    </div>
  );
};

const st = {
  dividerWrapper: css`
    width: 100%;
    padding: 0 1.04vw;
    height: 1px;
    text-align: center;
    @media ${MediaQueries.xs} {
      padding: 0 4.44vw;
    }
  `,
  divider: css`
    width: 100%;
    height: 100%;
    background-color: ${LightColor.Gray200};
    margin: 0 auto;
  `,
};
