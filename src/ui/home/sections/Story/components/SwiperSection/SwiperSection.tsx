import { css } from "@emotion/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import { LightColor } from "@/common/theme/color";
import { SwiperButtonContainer } from "./SwiperButtonContainer";
import { UseSwiperButton } from "./UseSwiperButton";
import { MediaQueries } from "@/common/theme/screen";
import { CustomSwiper } from "@/common/components/CustomSwiper/CustomSwiper";

export const SwiperSection = () => {
  const { handleSetSwiper, buttonState, slideState, models } =
    UseSwiperButton();

  return (
    <div css={st.root}>
      <div css={st.inner}>
        <CustomSwiper
          slidesPerView={1}
          initialSlide={0}
          loop
          modules={[Autoplay]}
          onSlideChange={(e) => {
            slideState.onChange(e.realIndex + 1);
          }}
          onSwiper={(swiper) => {
            handleSetSwiper(swiper);
          }}
        >
          {models.map((it, index) => (
            <SwiperSlide key={index}>
              <Stack css={st.card}>
                <SlideImage image={it.img} />
                <SlideText title={it.title} desc={it.text} />
              </Stack>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
      <SwiperButtonContainer
        onPrev={buttonState.onPrev}
        onNext={buttonState.onNext}
        slideIndex={slideState.value}
      />
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 8vh;
  `,
  inner: css`
    position: absolute;
    width: 67.7vw;
    aspect-ratio: 1/0.369;
    z-index: 1;
    @media ${MediaQueries.lg} {
      width: 100%;
      aspect-ratio: unset;
    }
  `,
  card: css`
    width: 67.7vw;
    aspect-ratio: 1/0.369;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10.41vw;

    @media ${MediaQueries.lg} {
      width: 100%;
      aspect-ratio: unset;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3.9vh;
      padding-left: 0vw;
    }
    @media ${MediaQueries.sm} {
      gap: 4.5vw;
    }
    @media ${MediaQueries.xs} {
      gap: 5.55vw;
    }
  `,
  image: css`
    position: relative;
    width: 25vw;
    aspect-ratio: 1;

    @media ${MediaQueries.lg} {
      width: 39.06vw;
    }
    @media ${MediaQueries.sm} {
      width: 52vw;
    }
    @media ${MediaQueries.xs} {
      width: 55.55vw;
    }
  `,
  textWrapper: css`
    width: 20.83vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${MediaQueries.lg} {
      width: 100%;
      padding: 0 5vw;
      gap: 1vh;
    }

    @media ${MediaQueries.sm} {
      padding: 0 8vw;
    }
    @media ${MediaQueries.xs} {
      padding: 0 11.11vw;
    }
  `,
  title: css`
    @media ${MediaQueries.lg} {
      font-size: 5.98vw;
      text-align: center;
    }
    @media ${MediaQueries.sm} {
      font-size: 8vw;
    }
    @media ${MediaQueries.xs} {
      font-size: 8.33vw;
    }
  `,
  desc: css`
    @media ${MediaQueries.lg} {
      font-size: 3.9vw;
    }

    @media ${MediaQueries.sm} {
      font-size: 4.8vw;
    }
    @media ${MediaQueries.xs} {
      font-size: 4.44vw;
    }
  `,
};

interface SlideProps {
  image?: any;
  title?: string;
  desc?: string;
}

const SlideImage = ({ image }: SlideProps) => {
  return (
    <div css={st.image}>
      <Image fill src={image} alt="card-image" />
    </div>
  );
};

const SlideText = ({ title, desc }: SlideProps) => {
  return (
    <div css={st.textWrapper}>
      <Typography variant="h1" color={LightColor.BrandWhite} css={st.title}>
        {title}
      </Typography>
      <Typography variant="body2" color={LightColor.BrandWhite} css={st.desc}>
        {desc}
      </Typography>
    </div>
  );
};
