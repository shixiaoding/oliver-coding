import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/shiding/new-learn/oliver-coding/node_modules/.pnpm/vuepress-shared@2.0.0-beta.246_vuepress@2.0.0-beta.67/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useScriptTag } from "/Users/shiding/new-learn/oliver-coding/node_modules/.pnpm/@vueuse+core@10.5.0_vue@3.3.8/node_modules/@vueuse/core/index.mjs";
import Badge from "/Users/shiding/new-learn/oliver-coding/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.246_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/Users/shiding/new-learn/oliver-coding/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.246_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/Users/shiding/new-learn/oliver-coding/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.246_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/Users/shiding/new-learn/oliver-coding/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.246_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
