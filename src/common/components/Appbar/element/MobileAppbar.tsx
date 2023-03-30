import { css } from "@emotion/react";
import Image from "next/image";
import ImgLogo from "@/assets/logo/ic-logo.png";
import ImgMenu from "@/assets/logo/ic-menu.png";
import { MediaQueries } from "@/common/theme/screen";

export const MobileAppbar = () => {
  return (
    <div css={st.root}>
      <div css={st.logo}>
        <Image fill src={ImgLogo} alt="logo" />
      </div>
      <div css={st.menu}>
        <Image fill src={ImgMenu} alt="menu" />
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 0 5.2vw;

    @media ${MediaQueries.xs} {
      top: 5.55vw;
      padding: 0 11.11vw;
    }
  `,
  logo: css`
    position: relative;
    width: 18.22vw;
    aspect-ratio: 1;
    @media ${MediaQueries.xs} {
      width: 22.22vw;
    }
  `,
  menu: css`
    position: relative;
    width: 7.81vw;
    aspect-ratio: 1;
    @media ${MediaQueries.xs} {
      width: 11.11vw;
    }
  `,
};
