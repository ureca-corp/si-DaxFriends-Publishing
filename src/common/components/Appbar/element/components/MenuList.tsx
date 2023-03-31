import { css } from "@emotion/react";
import { Link, Typography } from "@mui/material";
import Image from "next/image";
import { LightColor } from "@/common/theme/color";
import { MenuItemModels, MenuItemType } from "../../models/menu.type";
import { MediaQueries } from "@/common/theme/screen";

export const MenuList = () => {
  const models = MenuItemModels;
  return (
    <div css={st.root}>
      <ul css={st.inner}>
        {models.map((it) => (
          <MenuItem
            key={it.linkText}
            linkText={it.linkText}
            linkTo={it.linkTo}
            icon={it.icon}
          />
        ))}
      </ul>
    </div>
  );
};

const st = {
  root: css`
    width: 148px;
    padding-top: calc(5.55vh + 20px);
    position: absolute;
    top: 0;
    right: 0;

    @media ${MediaQueries.lg} {
      padding-top: calc(7.81vw + 20px);
    }
    @media ${MediaQueries.xs} {
      padding-top: calc(11.11vw + 20px);
    }
  `,
  inner: css`
    width: 100%;
    background: ${LightColor.DaryPrimary};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  li: css`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: transparent;
    border-radius: 6px;
    padding: 0 10px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background-color: ${LightColor.BrandPrimary};
      transition: 0.5s;
    }
  `,
  img: css`
    position: relative;
    width: 20px;
    aspect-ratio: 1;
  `,
};

const MenuItem = ({ linkText, linkTo, icon }: MenuItemType) => {
  return (
    <Link href={linkTo} target="_blank" css={st.li}>
      <div css={st.img}>
        <Image src={icon} alt="link" />
      </div>
      <Typography fontSize="20px" color="white">
        {linkText}
      </Typography>
    </Link>
  );
};
