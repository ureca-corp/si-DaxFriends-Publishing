import RoadGif from "@/assets/gif/gif-roadmap.gif";
import UtilityGif from "@/assets/gif/gif-balloon.gif";
import GalleryGif from "@/assets/gif/gif-windmill.gif";
import TeamGif from "@/assets/gif/gif-people.gif";
import PartnerGif from "@/assets/gif/gif-partners.gif";
import FaqGif from "@/assets/gif/gif-faq.gif";
import { AssetCategoryType } from "../type/gif.type";

export const AssetModels: AssetCategoryType[] = [
  {
    name: "road",
    data: [
      { asset: RoadGif, w: "10.41vw", h: "1" },
      { asset: RoadGif, w: "18.22vw", h: "1" },
      { asset: RoadGif, w: "27.77vw", h: "1" },
    ],
  },
  {
    name: "utility",
    data: [
      { asset: UtilityGif, w: "10.41vw", h: "1/1.38" },
      { asset: UtilityGif, w: "18.22vw", h: "1/1.06" },
      { asset: UtilityGif, w: "27.77vw", h: "1/1.06" },
    ],
  },
  {
    name: "gallery",
    data: [
      { asset: GalleryGif, w: "10.41vw", h: "1/0.88" },
      { asset: GalleryGif, w: "18.22vw", h: "1/0.88" },
      { asset: GalleryGif, w: "27.77vw", h: "1/0.88" },
    ],
  },
  {
    name: "team",
    data: [
      { asset: TeamGif, w: "10.41vw", h: "1/0.88" },
      { asset: TeamGif, w: "18.22vw", h: "1/0.88" },
      { asset: TeamGif, w: "27.77vw", h: "1/0.88" },
    ],
  },
  {
    name: "partners",
    data: [
      { asset: PartnerGif, w: "10.41vw", h: "1" },
      { asset: PartnerGif, w: "18.22vw", h: "1" },
      { asset: PartnerGif, w: "27.77vw", h: "1" },
    ],
  },
  {
    name: "faq",
    data: [
      { asset: FaqGif, w: "10.41vw", h: "1" },
      { asset: FaqGif, w: "18.22vw", h: "1" },
      { asset: FaqGif, w: "27.77vw", h: "1" },
    ],
  },
];

export const UseGetAsset = (name: string) => {
  const assetList = AssetModels.filter((it) => it.name === name)[0].data;
  return assetList;
};