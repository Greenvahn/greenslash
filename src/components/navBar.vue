<template>
  <nav class="bg-white bg-opacity-0">
    <div class="mx-auto sm:px-6 lg:px-6 lg:py-8">
      <div class="flex items-center justify-between h-32">
        <div class="flex items-center grid-cols-12">
            <!-- <img
              src="./../assets/Logo.svg"
              alt="logo"
              width="125"
              class="main-logo mr-4 cursor-pointer"
              @click="redirect"
            /> -->
          <IconLink name="grslash" :viewBox="'0 0 100 73.23'" :width="125" :height="125" :style="'icon-pulse grid-cols-3'"  @click="redirect" />
          <NavLinks :links="navItems" />
        </div>
        <div class="flex items-right grid-cols-12">
          <a class="btn-green cursor-pointer" href="saulverde_cv_2021.pdf" target="_blank">RESUME</a>
          <LangSwitcher class="ml-7 mr-7"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLinks from "./navLinks";
import IconLink from "./iconDisplay"
import LangSwitcher from "./langSwitcher"
import { useRouter } from "vue-router";

export default {
  name: "NavBar",
  components: {
    NavLinks,
    LangSwitcher,
    IconLink
  },
  setup() {
    const router = useRouter();
    const navItems = [
      { path: "home"},
      { path: "about"},
      { path: "work"},
      { path: "contact"},
    ];

    const redirect = () => {
      router.push({ name: "home" });
    };

    return { navItems, redirect };
  },
};
</script>
