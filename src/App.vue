<template>
  <NavBar />
  <Content>
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </Content>
  <FootNote />
</template>

<script>
import NavBar from "./components/navBar";
import Content from "./components/mainContent";
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

<style src="./assets/tailwind.css"></style>
<style>@import "./assets/transitions.css";</style>
