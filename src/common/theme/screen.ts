import useMediaQuery from "@mui/material/useMediaQuery";

export enum ScreenType {
  xs = 376,
  sm = 500, // Mobile
  md = 768,
  lg = 1024, // Tablet
  xl = 1200, // Laptop
  xxl = 1440,
}

export const MobileMediaQueries = {
  xs: `screen and (max-width: 375px), screen and (max-height: 667px)`,
  sm: `screen and (max-width: 375px), screen and (max-height: 812px)`,
  md: `screen and (max-width: 414px), screen and (max-height: 736px)`,
  lg: `screen and (max-width: 414px), screen and (max-height: 896px)`,
};

export const MediaQueries = {
  xs: `(max-width:${ScreenType.xs}px)`,
  sm: `(max-width:${ScreenType.sm}px)`,
  md: `(max-width:${ScreenType.md}px)`,
  lg: `(max-width:${ScreenType.lg}px)`,
  xl: `(max-width:${ScreenType.xl}px)`,
  xxl: `(max-width:${ScreenType.xxl}px)`,
};
export const TypographyMediaQueries = {
  xs: `@media (max-width:${ScreenType.xs}px)`,
  sm: `@media (max-width:${ScreenType.sm}px)`,
  md: `@media (max-width:${ScreenType.md}px)`,
  lg: `@media (max-width:${ScreenType.lg}px)`,
  xl: `@media (max-width:${ScreenType.xl}px)`,
  xxl: `@media (max-width:${ScreenType.xxl}px)`,
};

export const useCustomMobileMediaQuery = () => {
  const isMobileExtraSmall = useMediaQuery(MobileMediaQueries.xs);
  const isMobileSmall = useMediaQuery(MobileMediaQueries.sm);
  const isMobileMedium = useMediaQuery(MobileMediaQueries.md);
  const isMobileLarge = useMediaQuery(MobileMediaQueries.lg);

  return {
    isMobileExtraSmall,
    isMobileSmall,
    isMobileMedium,
    isMobileLarge,
  };
};

export const useCustomMediaQuery = () => {
  const isExtraSmall = useMediaQuery(MediaQueries.xs);
  const isSmall = useMediaQuery(MediaQueries.sm);
  const isMedium = useMediaQuery(MediaQueries.md);
  const isTablet = useMediaQuery(MediaQueries.lg);
  const isLarge = useMediaQuery(MediaQueries.xl);
  const isLaptop = useMediaQuery(MediaQueries.xxl);

  return {
    isExtraSmall,
    isSmall,
    isMedium,
    isTablet,
    isLarge,
    isLaptop,
  };
};
