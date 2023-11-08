import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  theme,
  base: "/oliver-coding/",
  lang: "zh-CN",
  title: "鼎子哥Coding",
  description: "鼎子哥Coding",

  

  // Enable it with pwa
  // shouldPrefetch: false,
});
