<template>
  <NavBar @switcher="modalOn = !modalOn" :isModalOn="modalOn" />
  <Content
    class="bg-white dark:bg-black"
    :class="{ 'overflow-hidden': modalOn }"
  >
    <RouterRender />
  </Content>
  <Footer />
</template>

<script>
import NavBar from "./components/navBar";
import Content from "./components/mainContent";
import Footer from "./components/footer";
import RouterRender from "./components/routerRender";
import accessiblity from "./accessiblity";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    NavBar,
    Content,
    Footer,
    RouterRender,
  },
  mounted() {
    // Stores color mode as local item  --> 'theme'
    //* Color mode is defined by default in main.js
    localStorage.setItem("theme", this.colorMode);

    // Inits accessible listeners
    accessiblity();
  },
  setup() {
    let modalOn = ref(false);
    return { modalOn };
  },
};
</script>

<style src="./assets/tailwind.css"></style>
<style>
@import "./assets/utils.css";
@import "./assets/transitions.css";
</style>
