import { css } from "@emotion/react";
import ImgMobileBackground from "@/assets/mb/main/414_896.png";

import Image from "next/image";

export const LargeImage = () => {
  return (
    <div css={st.bg}>
      <Image fill src={ImgMobileBackground} alt="bg" />
    </div>
  );
};

const st = {
  bg: css`
    position: relative;
    width: 100%;
    height: 100%;
  `,
};
