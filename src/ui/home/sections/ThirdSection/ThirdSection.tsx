import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import Image from "next/image";
import ImgBlackCow from "@/assets/pc/img-black-cow.png";

export const ThirdSection = () => {
  return (
    <section css={st.root}>
      <div css={st.image}>
        <Image src={ImgBlackCow} alt="bg-character" />
      </div>
    </section>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100vh;
    background-color: ${LightColor.LightBlue};
    position: relative;
  `,
  image: css`
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 36.45vw;
    aspect-ratio: 1;
  `,
};
