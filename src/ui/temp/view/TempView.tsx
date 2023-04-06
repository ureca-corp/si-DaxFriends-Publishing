import { SwiperSlide } from "swiper/react";
import Swiper, { FreeMode, Mousewheel } from "swiper";
import { css } from "@emotion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import { CustomSwiper } from "@/common/components/CustomSwiper/CustomSwiper";

export const TempView = () => {
  const [swiper, setSwiper] = useState<Swiper | undefined>();

  return (
    <div css={st.root}>
      <CustomSwiper
        mousewheel
        direction={"vertical"}
        modules={[Mousewheel]}
        css={css`
          position: relative;
          height: 100vh;
        `}
        onSlideChange={(e) => {
          if (e.activeIndex === 1) {
            e.mousewheel.disable();
          }
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
      >
        <SwiperSlide>
          <section css={st.section1}>1</section>
        </SwiperSlide>
        <SwiperSlide>
          <section css={st.section2}>
            <CustomSwiper
              mousewheel
              freeMode={true}
              direction={"vertical"}
              spaceBetween={40}
              slidesPerView={3.5}
              modules={[Mousewheel, FreeMode]}
              css={css`
                position: relative;
                width: 100%;
                height: 100%;
              `}
              onReachBeginning={() => {
                swiper?.mousewheel.enable();
              }}
              onReachEnd={() => {
                swiper?.mousewheel.enable();
              }}
            >
              <SwiperSlide>
                <div css={st.box}>1</div>
              </SwiperSlide>
              <SwiperSlide>
                <div css={st.box}>2</div>
              </SwiperSlide>
              <SwiperSlide>
                <div css={st.box}>3</div>
              </SwiperSlide>
              <SwiperSlide>
                <div css={st.box}>4</div>
              </SwiperSlide>
              <SwiperSlide>
                <div css={st.box}>5</div>
              </SwiperSlide>
              <SwiperSlide>
                <div css={st.box}>6</div>
              </SwiperSlide>
              <SwiperSlide>
                <div css={st.box}>7</div>
              </SwiperSlide>
            </CustomSwiper>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section css={st.section3}>3</section>
        </SwiperSlide>
        <SwiperSlide>
          <section css={st.section4}>4</section>
        </SwiperSlide>
      </CustomSwiper>
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100%;
  `,
  section1: css`
    width: 100%;
    height: 100vh;
    background-color: green;
  `,
  section2: css`
    width: 100%;
    height: 100vh;
    background-color: red;
  `,
  section3: css`
    width: 100%;
    height: 100vh;
    background-color: blue;
  `,
  section4: css`
    width: 100%;
    height: 100vh;
    background-color: pink;
  `,
  inner: css`
    width: 100%;
    height: 900px;
    overflow: scroll;
  `,
  box: css`
    width: 200px;
    height: 200px;
    background-color: skyblue;
    margin-bottom: 40px;
  `,
};
