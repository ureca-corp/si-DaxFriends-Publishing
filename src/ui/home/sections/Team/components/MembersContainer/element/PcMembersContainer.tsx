import { LightColor } from "@/common/theme/color";
import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ImgLink from "@/assets//pc/team/icon-link.png";
import { TeamModels } from "../../../models/team.models";

export const PcMembersContainer = () => {
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
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    row-gap: 2.08vw;
    padding-bottom: 3.33vw;
    @media ${MediaQueries.lg} {
      height: 70vh;
      position: relative;
      width: 100%;
      grid-template-columns: 1fr 1fr 1fr;
      padding-bottom: 5.2vw;
      row-gap: 5.2vw;
    }
  `,
  member: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  image: css`
    position: relative;
    width: 12.5vw;
    aspect-ratio: 1;
    margin-bottom: 2.08vw;
    border-radius: 6.25vw;
    overflow: hidden;
    @media ${MediaQueries.lg} {
      width: 23.5vw;
      border-radius: 18.22vw;
      margin-bottom: 2.8vw;
    }
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
    position: relative;
    width: 1.25vw;
    aspect-ratio: 1;
    @media ${MediaQueries.lg} {
      width: 1.3vw;
    }
  `,

  departmentText: css`
    @media ${MediaQueries.lg} {
      font-size: 2.3vw;
    }
  `,
  nameText: css`
    @media ${MediaQueries.lg} {
      font-size: 3.6vw;
    }
  `,
};
