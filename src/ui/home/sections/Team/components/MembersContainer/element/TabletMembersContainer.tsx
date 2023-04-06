import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ImgLink from "@/assets//pc/team/icon-link.png";
import { TeamModels } from "../../../models/team.models";

export const TabletMembersContainer = () => {
  const models = TeamModels;

  return (
    <div css={st.content}>
      {models.map((it, index) => (
        <div css={st.member} key={index}>
          <div css={st.image}>
            <Image fill src={it.img} alt="member" />
          </div>
          <Typography
            variant="subtitle2"
            css={st.departmentText}
            color={LightColor.Gray100}
          >
            {it.department}
          </Typography>
          <div css={st.name}>
            <Typography variant="body1" css={st.nameText}>
              {it.name}
            </Typography>
            <Link href={it.link} target="_blank" css={st.link}>
              <div css={st.linkImage}>
                <Image src={ImgLink} alt="link" />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const st = {
  content: css`
    display: grid;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    position: relative;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 5.2vw;
    row-gap: 5.2vw;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  member: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  image: css`
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    width: 31.25vw;
    border-radius: 18.22vw;
    margin-bottom: 5.2vw;
  `,
  name: css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -1.5vw;
  `,
  link: css`
    position: absolute;
    top: 0.2vw;
    right: -1.6vw;
    cursor: pointer;
  `,
  linkImage: css`
    width: 1.3vw;

    position: relative;
    aspect-ratio: 1;
  `,

  departmentText: css`
    font-size: 2.6vw;
  `,
  nameText: css`
    font-size: 3.9vw;
  `,
};
