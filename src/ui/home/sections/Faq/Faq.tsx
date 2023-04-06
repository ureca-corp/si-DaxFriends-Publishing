import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import Image from "next/image";
import ImgBlueBlur from "@/assets//pc/faq/img-blur-blue.png";
import { UseGetAsset } from "@/common/components/MovingIcon/models/gif.models";
import { MovingIcon } from "@/common/components/MovingIcon";
import { MediaQueries } from "@/common/theme/screen";
import { AccordionContainer } from "./components/AccordionContainer";
import { sectionIds } from "../../common/SectionIds";

export const Faq = () => {
  const movingIcon = UseGetAsset("faq");
  return (
    <section id={sectionIds[7]} css={st.root}>
      <MovingIcon props={movingIcon} />
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
    align-items: center;
    justify-content: center;
    padding: 0 5.2vw;
    padding-top: 10vw;
    @media ${MediaQueries.lg} {
      align-items: center;
      flex-direction: column;
      padding-top: 2vw;
      gap: 4vw;
    }
    @media ${MediaQueries.sm} {
      padding-top: unset;
      display: block;
      align-items: unset;
      justify-content: unset;
      gap: unset;
    }
    @media ${MediaQueries.xs} {
      padding: 0;
    }
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
