import { LightColor } from "@/common/theme/color";
import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import IconInfo from "@/assets/pc/utility/ic-info.png";

export const UtilityText = () => {
  return (
    <div css={st.root}>
      <div css={st.icon}>
        <Image fill src={IconInfo} alt={"info"} />
      </div>
      <Typography color={LightColor.BrandPrimary} css={st.text}>
        {"U1 및 U2는 추첨입니다."}
      </Typography>
    </div>
  );
};

const st = {
  root: css`
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  icon: css`
    position: relative;
    width: 13.33px;
    aspect-ratio: 1;
  `,
  text: css`
    font-size: 1.04vw;
    line-height: 1;
    white-space: pre;
    @media ${MediaQueries.lg} {
      font-size: 1.56vw;
    }
    @media ${MediaQueries.sm} {
      font-size: 3.6vw;
    }
  `,
};
