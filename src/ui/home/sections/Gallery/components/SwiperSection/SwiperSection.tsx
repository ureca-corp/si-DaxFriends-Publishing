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
import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";

export const SwiperSection = () => {
  const models = GalleryModels;
  const { isSmall, isTablet } = useCustomMediaQuery();

  return (
    <div css={st.root}>
      <Swiper
        loop
        freeMode={{ enabled: true, momentum: false }}
        spaceBetween={isSmall ? 40 : isTablet ? 80 : 0}
        slidesPerView={isSmall ? 1.5 : isTablet ? 2.2 : 6}
        centeredSlides={isTablet ? true : false}
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
                  variant="caption"
                  lineHeight={1}
                  color={LightColor.BrandBlue}
                  css={st.name}
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
    @media ${MediaQueries.lg} {
      position: relative;
    }
    @media ${MediaQueries.sm} {
      width: 100%;
      height: 70vh;
      bottom: unset;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  card: css`
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

    @media ${MediaQueries.lg} {
      width: 2.68vw;
    }
    @media ${MediaQueries.sm} {
      width: 6.2vw;
    }
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
  name: css`
    @media ${MediaQueries.lg} {
      font-size: 3.9vw;
    }
    @media ${MediaQueries.sm} {
      font-size: 6.2vw;
    }
  `,
};
