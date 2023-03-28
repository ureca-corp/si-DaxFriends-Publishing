import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { GalleryModels } from "../../models/gallery.model";
import Image from "next/image";
import { LightColor } from "@/common/theme/color";

export const SwiperSection = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();

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
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        speed={5000}
      >
        {models.map((it, index) => (
          <SwiperSlide key={index}>
            <div css={st.card}>
              <div css={st.cardImage}>
                <Image src={it.img} alt="image" />
              </div>
              <div css={st.cardText}>{it.name}</div>
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
    width: 260px;
    height: 308px;
    display: flex;
    flex-direction: column;
  `,
  cardImage: css`
    width: 100%;
    height: 260px;
    position: relative;
    background-color: ${LightColor.Gray};
  `,
  cardText: css`
    width: 100%;
    flex: 1;
    background-color: white;
  `,
};
