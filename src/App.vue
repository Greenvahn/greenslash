<template>
  <NavBar />
  <Content>
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </Content>
  <Footer />
</template>

<script>
import NavBar from "./components/navBar";
import Content from "./components/mainContent";
import Footer from "./components/footer";

export default {
  name: "App",
  components: {
    NavBar,
    Content,
    Footer,
  },
};
</script>

<style src="./assets/tailwind.css"></style>
<style>@import "./assets/transitions.css";</style>
