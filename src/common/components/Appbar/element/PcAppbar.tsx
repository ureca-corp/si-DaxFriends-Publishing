import { css } from "@emotion/react";
import Image from "next/image";
import ImgLogo from "@/assets/logo/ic-logo.png";
import ImgMenu from "@/assets/logo/ic-menu.png";
import { Link } from "@mui/material";

export const PcAppbar = () => {
  return (
    <div css={st.root}>
      <Link href="/" css={st.logo}>
        <Image fill src={ImgLogo} alt="logo" />
      </Link>
      <div css={st.menu} onClick={() => null}>
        <Image fill src={ImgMenu} alt="menu" />
      </div>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 10;
    padding: 0 5.2vw;
  `,
  logo: css`
    position: relative;
    width: 16.66vh;
    aspect-ratio: 1;
  `,
  menu: css`
    position: relative;
    width: 5.55vh;
    aspect-ratio: 1;
    cursor: pointer;
  `,
};
