import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/scss/index.scss";
import lazyPlugin from "vue3-lazy";
import router from "@/router";
import loadingDirective from '@/components/base/loading/directive'
import noResultDirective from '@/components/base/no-result/directive'

createApp(App)
  .use(router)
  .use(lazyPlugin, {
    loading: require("@/assets/images/default.png"),
  })
  .directive("loading", loadingDirective)
  .directive("no-result", noResultDirective)
  .mount("#app");
