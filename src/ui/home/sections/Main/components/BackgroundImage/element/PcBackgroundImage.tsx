import { css } from "@emotion/react";
import ImgPcBackground from "@/assets/pc/img-bg.png";
import Image from "next/image";

export const PcBackgroundImage = () => {
  return (
    <div css={st.bg}>
      <Image fill src={ImgPcBackground} alt="bg" />
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
