import { css } from "@emotion/react";
import Image from "next/image";
import ImgBlackCow from "@/assets/pc/img-black-cow.png";

export const PcBackgroundImage = () => {
  return (
    <div css={st.image}>
      <Image src={ImgBlackCow} alt="bg-character" />
    </div>
  );
};

const st = {
  image: css`
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 36.45vw;
    aspect-ratio: 1;
  `,
};
