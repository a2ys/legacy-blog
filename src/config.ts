// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Aayush Shukla";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I write about my personal experineces.";
export const TWITTER_HANDLE = "@unreal_sapien";
export const MY_NAME = "Aayush Shukla";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
