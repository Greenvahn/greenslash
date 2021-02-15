<template>
  <NavBar />
  <Content>
    <RouterRender />
  </Content>
  <Footer />
</template>

<script>
import NavBar from "./components/navBar";
import Content from "./components/mainContent";
import Footer from "./components/footer";
import RouterRender from "./components/routerRender";

export default {
  name: "App",
  components: {
    NavBar,
    Content,
    Footer,
    RouterRender,
  },
};
</script>

<style src="./assets/tailwind.css"></style>
<style>
@import "./assets/utils.css";
@import "./assets/transitions.css";
</style>
