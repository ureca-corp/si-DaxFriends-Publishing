import { css } from "@emotion/react";
import { PcAppbar } from "./element";

export const Appbar = () => {
  return (
    <header css={st.appbar}>
      {/* {isTablet ? <MobileAppbar /> : <PcAppbar />} */}
      <PcAppbar />
    </header>
  );
};

const st = {
  appbar: css`
    width: 100%;
  `,
};
