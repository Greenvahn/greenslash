<template>
  <NavBar @switcher="modalOn = !modalOn" :isModalOn="modalOn" />
  <Content :class="{'overflow-hidden': modalOn}">
    <RouterRender />
  </Content>
  <Footer />
</template>

<script>
import NavBar from "./components/navBar";
import Content from "./components/mainContent";
import Footer from "./components/footer";
import RouterRender from "./components/routerRender";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    NavBar,
    Content,
    Footer,
    RouterRender,
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
