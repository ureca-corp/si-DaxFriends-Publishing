import IconOpensea from "@/assets/menu/ic-opensea.svg";
import IconDiscord from "@/assets/menu/ic-discord.svg";
import IconTwitter from "@/assets/menu/ic-twitter.svg";
import IconTelegram from "@/assets/menu/ic-telegram.svg";
import IconBlog from "@/assets/menu/ic-blog.svg";
import IconCoredax from "@/assets/menu/ic-coredax.svg";
import IconValuen from "@/assets/menu/ic-valuen.svg";

export interface MenuItemType {
  linkText: string;
  linkTo: string;
  icon: any;
}

export const MenuItemModels: MenuItemType[] = [
  { linkText: "Opensea", linkTo: "", icon: IconOpensea },
  {
    linkText: "Discord",
    linkTo: "https://discord.gg/gitdeun",
    icon: IconDiscord,
  },
  {
    linkText: "Twitter",
    linkTo: "https://twitter.com/DaxFriends",
    icon: IconTwitter,
  },
  {
    linkText: "Telegram",
    linkTo: "https://t.me/daxfriends",
    icon: IconTelegram,
  },
  {
    linkText: "Blog",
    linkTo: "https://blog.naver.com/core_dax",
    icon: IconBlog,
  },
  {
    linkText: "CoreDAX",
    linkTo: "https://www.coredax.com/#/",
    icon: IconCoredax,
  },
  {
    linkText: "ValueN",
    linkTo: "https://www.value-n.com/#/",
    icon: IconValuen,
  },
];
