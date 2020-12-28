<template>
  <NavBar />
  <Content>
    <FootNote />
    <transition name="slide-fade">
      <router-view />
    </transition>
  </Content>
</template>

<script>
import NavBar from "./components/navBar";
import Content from "./components/contentBlock";
import FootNote from "./components/footNote";

export default {
  name: "App",
  components: {
    NavBar,
    Content,
    FootNote,
  },
};
</script>

<style src="./assets/tailwind.css" ></style>
<style>
  @import './assets/transitions.css';
</style>
