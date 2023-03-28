import { css } from "@emotion/react";
import Image from "next/image";
import ImgBackgronud from "@/assets/pc/img-bg-cloud.png";
import { SwiperSection } from "./components/SwiperSection";

export const SecondSection = () => {
  return (
    <section css={st.root}>
      <div css={st.bgWrapper}>
        <div css={st.bg}>
          <Image fill src={ImgBackgronud} alt="bg" />
        </div>
      </div>
      <SwiperSection />
    </section>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100vh;
    position: relative;
  `,
  bgWrapper: css`
    position: absolute;
    width: 100%;
    height: 100%;
  `,
  bg: css`
    position: relative;
    width: 100%;
    height: 100%;
  `,
};
