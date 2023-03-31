import { css } from "@emotion/react";
import Image from "next/image";
import ImgMenu from "@/assets/logo/ic-menu.png";
import ImgClickedMenu from "@/assets/logo/ic-clicked-menu.png";
import React, { useState } from "react";
import { MenuList } from "./MenuList";
import { MediaQueries } from "@/common/theme/screen";

export const MenuIcon = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const handleMenuActive = () => {
    setIsActiveMenu(true);
  };
  const handleMenuInActive = () => {
    setIsActiveMenu(false);
  };

  return (
    <div
      css={st.menu}
      onClick={handleMenuActive}
      onMouseOut={handleMenuInActive}
      onMouseOver={handleMenuActive}
    >
      {isActiveMenu ? (
        <React.Fragment>
          <Image fill src={ImgClickedMenu} alt="menu" />
          <MenuList />
        </React.Fragment>
      ) : (
        <Image fill src={ImgMenu} alt="menu" />
      )}
    </div>
  );
};

const st = {
  menu: css`
    position: relative;
    width: 5.55vh;
    aspect-ratio: 1;
    cursor: pointer;

    @media ${MediaQueries.lg} {
      width: 7.81vw;
    }
    @media ${MediaQueries.xs} {
      width: 11.11vw;
    }
  `,
};
