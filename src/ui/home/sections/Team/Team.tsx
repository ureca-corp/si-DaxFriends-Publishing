import { css } from "@emotion/react";
import Image from "next/image";
import ImgPink from "@/assets/pc/team/img-blur-pink.png";
import ImgPurple from "@/assets/pc/team/img-blur-purple.png";
import { LightColor } from "@/common/theme/color";
import { Typography } from "@mui/material";
import { TeamModels } from "./models/team.models";
import ImgLink from "@/assets//pc/team/icon-link.png";
import { UseGetAsset } from "@/common/components/MovingIcon/models/gif.models";
import { MovingIcon } from "@/common/components/MovingIcon";
import Link from "next/link";
import { MediaQueries } from "@/common/theme/screen";

export const Team = () => {
  const movingIcon = UseGetAsset("team");
  const models = TeamModels;
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
      position: relative;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      padding-bottom: 5.2vw;
      row-gap: 5.2vw;
      overflow-y: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
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
      width: 31.25vw;
      border-radius: 18.22vw;
      margin-bottom: 5.2vw;
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
      font-size: 2.6vw;
    }
  `,
  nameText: css`
    @media ${MediaQueries.lg} {
      font-size: 3.9vw;
    }
  `,
};
