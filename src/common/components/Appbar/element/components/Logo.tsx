import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import Image from "next/image";
import ImgLogo from "@/assets/logo/ic-logo.png";

export const Logo = () => {
  return (
    <div css={st.logo}>
      <Image fill src={ImgLogo} alt="logo" />
    </div>
  );
};

const st = {
  logo: css`
    position: relative;
    width: 16.66vh;
    aspect-ratio: 1;

    @media ${MediaQueries.lg} {
      width: 18.22vw;
    }
    @media ${MediaQueries.sm} {
      width: 22.22vw;
    }
  `,
};
