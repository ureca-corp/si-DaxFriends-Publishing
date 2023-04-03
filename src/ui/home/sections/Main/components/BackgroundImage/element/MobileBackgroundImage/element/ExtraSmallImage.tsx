import { css } from "@emotion/react";
import ImgMobileBackground from "@/assets/mb/main/375_667.png";
import Image from "next/image";

export const ExtraSmallImage = () => {
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
