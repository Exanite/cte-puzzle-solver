// Styles
import "@/css/site.css";

// Vue
import { createApp } from "vue";

// App
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app");
