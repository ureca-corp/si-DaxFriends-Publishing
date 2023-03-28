import { css } from "@emotion/react";
import Image from "next/image";
import ImgPink from "@/assets/pc/team/img-blur-pink.png";
import ImgPurple from "@/assets/pc/team/img-blur-purple.png";
import { LightColor } from "@/common/theme/color";
import { Typography } from "@mui/material";
import { TeamModels } from "./models/team.models";
import ImgLink from "@/assets//pc/team/icon-link.png";

export const Team = () => {
  const models = TeamModels;
  return (
    <section css={st.root}>
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
              fontSize="20px"
              lineHeight={1.4}
              color={LightColor.Gray100}
            >
              {it.department}
            </Typography>
            <div css={st.name}>
              <Typography fontSize="30px" lineHeight={1.4}>
                {it.name}
              </Typography>

              <div css={st.link}>
                <div css={st.linkImage}>
                  <Image src={ImgLink} alt="link" />
                </div>
              </div>
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
  `,
};
