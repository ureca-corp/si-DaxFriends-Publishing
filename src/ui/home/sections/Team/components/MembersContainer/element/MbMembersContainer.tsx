import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Link, Typography } from "@mui/material";
import { TeamModels } from "../../../models/team.models";
import { LightColor } from "@/common/theme/color";
import ImgLink from "@/assets//pc/team/icon-link.png";

export const MbMembersContainer = () => {
  const models = TeamModels;
  return (
    <div css={st.root}>
      <Swiper loop spaceBetween={40} slidesPerView={1.5} centeredSlides={true}>
        {models.map((it, index) => (
          <SwiperSlide key={index}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
  `,
  member: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.7vw;
  `,
  image: css`
    position: relative;
    width: 58.33vw;
    aspect-ratio: 1;
    border-radius: 200px;
    overflow: hidden;
    margin-bottom: 2.7vw;
  `,
  departmentText: css`
    font-size: 3.8vw;
    font-weight: 400;
  `,
  name: css`
    display: flex;
    gap: 6px;
  `,
  nameText: css`
    font-size: 10.8vw;
  `,
  link: css``,
  linkImage: css`
    width: 5vw;
    aspect-ratio: 1;
  `,
};
