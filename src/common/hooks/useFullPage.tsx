/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { fromEvent, scan, Subscription, tap, throttleTime } from "rxjs";

const ThrottleInterval = 800;

let subscription: Subscription | undefined;

export const useFullpage = (sections: string[], disable?: boolean) => {
  const fullpageRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { replace: routerReplace } = router;

  useEffect(() => {
    if (disable) return;

    const { lastIndex, currentIndex, getSectionHash, findHashIndex } =
      getSectionsInfo({
        sections,
        hash: window.location.hash,
      });

    if (!subscription) {
      subscription = fromEvent<WheelEvent>(fullpageRef.current!, "wheel")
        .pipe(
          tap(preventAfterWheelEvent),
          throttleTime(ThrottleInterval),
          scan((mutableIndex, e) => {
            const {
              isWheelUp,
              isWheelDown,
              isImpossibleWheelUp,
              isImpossibleWheelDown,
            } = getWheelState({
              sectionCurrentIndex: mutableIndex,
              sectionsLastIndex: lastIndex,
              deltaY: e.deltaY,
            });

            // 휠 이동 불가능 시 탈출
            if (isImpossibleWheelUp || isImpossibleWheelDown)
              return mutableIndex;

            // 현재 해쉬 값이 이전 해쉬 값과 다르면 교체.
            const hashIndex = findHashIndex(window.location.hash);
            if (hashIndex !== mutableIndex) mutableIndex = hashIndex;

            // 휠 업다운 시 해쉬 교체.
            if (isWheelUp) routerReplace(getSectionHash(--mutableIndex));
            else if (isWheelDown) routerReplace(getSectionHash(++mutableIndex));

            // 스크롤 이동
            document.getElementById(sections[mutableIndex])?.scrollIntoView();

            return mutableIndex;
          }, currentIndex)
        )
        .subscribe();
    }
  }, [disable, sections]);

  return {
    fullpageRef,
  };
};

// 섹션 정보 파싱.
const getSectionsInfo = (data: { sections: string[]; hash: string }) => {
  const { sections, hash } = data;

  const lastIndex = sections.length - 1;
  const getSectionHash = (index: number) => `#${index}`;

  const findHashIndex = (hash: string) =>
    sections.findIndex(
      (it, index) => `#${index}` === hash || `#${it}` === hash
    );

  const targetIndex = findHashIndex(hash);
  const currentIndex = targetIndex < 0 ? 0 : targetIndex;

  return {
    lastIndex,
    getSectionHash,
    currentIndex,
    findHashIndex,
  };
};

// 휠 움직임, 움직일 수 있는지 여부.
const getWheelState = (data: {
  sectionCurrentIndex: number;
  sectionsLastIndex: number;
  deltaY: number;
}) => {
  const { sectionCurrentIndex, sectionsLastIndex, deltaY } = data;

  const isWheelDown = deltaY > 0;
  const isWheelUp = deltaY < 0;

  const isImpossibleWheelUp = sectionCurrentIndex === 0 && isWheelUp;
  const isImpossibleWheelDown =
    sectionCurrentIndex === sectionsLastIndex && isWheelDown;

  return {
    isWheelUp,
    isWheelDown,
    isImpossibleWheelUp,
    isImpossibleWheelDown,
  };
};

// 휠 이벤트 전파 막기.
const preventAfterWheelEvent = (e: WheelEvent) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
};
