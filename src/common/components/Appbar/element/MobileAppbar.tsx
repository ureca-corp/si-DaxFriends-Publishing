import { css } from "@emotion/react";
import { MediaQueries } from "@/common/theme/screen";
import { Logo, MenuIcon } from "./components";

export const MobileAppbar = () => {
  return (
    <div css={st.root}>
      <Logo />
      <MenuIcon />
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
};
