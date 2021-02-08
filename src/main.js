import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

const app = createApp(App);

// ROUTER - i18n 
// Adjusts the lang param to the laguage selected
// Check in router.js --> path: "/:lang",
router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = "en";
  }
  i18n.locale = language;
  next()
});

app.use(i18n);
app.use(router);
app.mount("#app");
