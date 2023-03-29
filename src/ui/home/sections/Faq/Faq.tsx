import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import Image from "next/image";
import { AccordionContainer } from "./components";
import ImgBlueBlur from "@/assets//pc/faq/img-blur-blue.png";

export const Faq = () => {
  return (
    <section css={st.root}>
      <div css={st.blurWrapper}>
        <div css={st.blur}>
          <Image fill src={ImgBlueBlur} alt="blur" />
        </div>
      </div>
      <AccordionContainer />
    </section>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100vh;
    background-color: ${LightColor.LightBlue100};
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0 5.2vw;
    padding-top: 16.66vw;
  `,
  blurWrapper: css`
    position: absolute;
    bottom: -27vw;
    left: -26vw;
    z-index: 0;
  `,
  blur: css`
    position: relative;
    width: 85vw;
    aspect-ratio: 1;
  `,
};
