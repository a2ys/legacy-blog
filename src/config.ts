import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.a2ys.dev/", // replace this with your deployed domain
  author: "Aayush Shukla",
  desc: "A minimal blog featuring me sharing knowledge.",
  title: "Aayush Shukla",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/a2ys",
    linkTitle: ` ${SITE.title} on GitHub`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/unreal_sapien",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/a2ys",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/_cococolastic_",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
];
