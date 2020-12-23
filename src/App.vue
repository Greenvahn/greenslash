<template>
  <NavBar />
  <Content>
    <FootNote />
    <keep-alive include="ABOUT">
      <router-view />
    </keep-alive>
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

<style src="./assets/tailwind.css" />
