import { css } from "@emotion/react";
import Image from "next/image";
import ImgPink from "@/assets/pc/team/img-blur-pink.png";
import ImgPurple from "@/assets/pc/team/img-blur-purple.png";
import { LightColor } from "@/common/theme/color";
import { UseGetAsset } from "@/common/components/MovingIcon/models/gif.models";
import { MovingIcon } from "@/common/components/MovingIcon";
import { MediaQueries } from "@/common/theme/screen";
import { MembersContainer } from "./components";

export const Team = () => {
  const movingIcon = UseGetAsset("team");
  return (
    <section css={st.root}>
      <MovingIcon props={movingIcon} />
      <div css={st.purpleBlur}>
        <div css={st.blur}>
          <Image fill src={ImgPurple} alt="blue" />
        </div>
      </div>
      <div css={st.pinkBlur}>
        <div css={st.blur}>
          <Image fill src={ImgPink} alt="pink" />
        </div>
      </div>
      <MembersContainer />
    </section>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100vh;
    background-color: ${LightColor.LightNavy};
    position: relative;
    overflow: hidden;

    @media ${MediaQueries.lg} {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 19vw;
      gap: 8vw;
    }
    @media ${MediaQueries.sm} {
      padding-top: 18vw;
      gap: 11.11vw;
    }
    @media (max-width: 414px) and (max-height: 896px) {
      gap: 30.5vw;
    }
    @media (max-width: 414px) and (max-height: 736px) {
      gap: 27.5vw;
    }
    @media (max-width: 375px) and (max-height: 812px) {
      gap: 30.5vw;
    }
    @media (max-width: 375px) and (max-height: 667px) {
      gap: 8.11vw;
    }
  `,
  purpleBlur: css`
    position: absolute;
    left: -30vw;
    bottom: -30vw;
  `,
  pinkBlur: css`
    position: absolute;
    right: -28vw;
    top: -18vw;
  `,
  blur: css`
    position: relative;
    width: 85vw;
    aspect-ratio: 1;
  `,
};
