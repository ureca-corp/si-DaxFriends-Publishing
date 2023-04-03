import { css } from "@emotion/react";
import ImgTabletBackground from "@/assets/tablet/img-bg.png";
import Image from "next/image";

export const TabletBackgroundImage = () => {
  return (
    <div css={st.bg}>
      <Image fill src={ImgTabletBackground} alt="bg" />
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
