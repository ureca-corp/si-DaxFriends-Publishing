import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GalleryModels } from "../../models/gallery.model";
import Image from "next/image";
import { LightColor } from "@/common/theme/color";
import { Typography } from "@mui/material";
import IconSharp from "@/assets/pc/gallery/icon-sharp.png";

export const SwiperSection = () => {
  const models = GalleryModels;

  return (
    <div css={st.root}>
      <Swiper
        loop
        freeMode={{ enabled: true, momentum: false }}
        spaceBetween={0}
        slidesPerView={6}
        modules={[Autoplay]}
        autoplay={{ delay: 1, disableOnInteraction: true }}
        speed={6000}
        grabCursor={false}
        allowTouchMove={false}
      >
        {models.map((it, index) => (
          <SwiperSlide key={index}>
            <div css={st.card}>
              <div css={st.cardImage}>
                <Image fill src={it.img} alt="image" />
              </div>
              <div css={st.cardText}>
                <div css={st.icon}>
                  <Image fill src={IconSharp} alt="#" />
                </div>
                <Typography
                  fontSize="16px"
                  color={LightColor.BrandBlue}
                  lineHeight={1.4}
                >
                  {it.name}
                </Typography>
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
    width: 13.54vw;
    aspect-ratio: 1/1.18;
    display: flex;
    flex-direction: column;
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
};
