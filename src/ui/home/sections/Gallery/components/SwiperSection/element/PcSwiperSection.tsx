import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { LightColor } from "@/common/theme/color";
import { Typography } from "@mui/material";
import IconSharp from "@/assets/pc/gallery/icon-sharp.png";
import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";
import { GalleryModels } from "../../../models/gallery.model";

export const PcSwiperSection = () => {
  const models = GalleryModels;
  const { isSmall, isTablet } = useCustomMediaQuery();

  return (
    <div css={st.root}>
      <Swiper
        id="gallery-swiper"
        loop
        freeMode={{ enabled: true, momentum: false, momentumBounce: false }}
        spaceBetween={isSmall ? 40 : isTablet ? 80 : 0}
        slidesPerView={isSmall ? 1.5 : isTablet ? 2.2 : 5.6}
        centeredSlides={true}
        modules={[Autoplay]}
        speed={2500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        grabCursor={false}
        allowTouchMove={false}
        css={css`
          position: relative;
          width: 100%;

          & > .swiper-wrapper .swiper-card .swiper-inner-card {
            width: 100%;
            transform: scale(1);
            transition: all 0.5s ease-in-out;
          }
          &
            > .swiper-wrapper
            .swiper-slide-prev
            .swiper-card
            .swiper-inner-card {
            -webkit-transform: scale(1.3);
            -moz-transform: scale(1.3);
            transform: scale(1.3);
            transition: all 0.5s ease-in-out;
          }
        `}
      >
        {models.map((it, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-card" css={st.card}>
              <div className="swiper-inner-card" css={st.innerCard}>
                <div css={st.cardImage}>
                  <Image fill src={it.img} alt="image" />
                </div>
                <div css={st.cardText}>
                  <div css={st.icon}>
                    <Image fill src={IconSharp} alt="#" />
                  </div>
                  <Typography
                    variant="caption"
                    lineHeight={1}
                    color={LightColor.BrandBlue}
                    css={st.name}
                  >
                    {it.name}
                  </Typography>
                </div>
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
    position: absolute;
    left: 0;
    bottom: 5.2vw;
  `,
  card: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.6vw;
  `,

  innerCard: css`
    width: 13.54vw;
    aspect-ratio: 1/1.18;
    display: flex;
    flex-direction: column;

    @media ${MediaQueries.lg} {
      width: 100%;
    }
  `,
  cardImage: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    background-color: ${LightColor.Gray};
  `,
  icon: css`
    position: relative;
    width: 0.73vw;
    aspect-ratio: 1;
  `,
  cardText: css`
    width: 100%;
    flex: 1;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  `,
  name: css``,
};
