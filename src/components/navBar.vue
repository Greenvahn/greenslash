<template>
  <header
    class="fixed z-10 flex flex-row justify-between w-full items-start bg-white py-2 px-2 h-26 md:justify-between md:h-32 m:py-6 md:px-6 lg:p-6"
  >
    <IconLink
      name="grslash"
      :viewBox="'0 0 100 73.23'"
      :style="'main-logo flex-none p-2 w-1/4 h-22 lg:h-32 lg:-mt-4 lg:w-32 z-30'"
      @click="redirect"
    />
    <MenuMobileBtn
      @click="menuModal"
      :active="mobileMenuOpen"
      class="lg:hidden z-30"
    />
    <nav class="flex flex-row justify-start flex-grow h-24 w-96 hidden lg:flex">
      <NavLinks :links="navItems" />
    </nav>
    <div id="resources" class="flex flex-row justify-end h-10 hidden lg:flex">
      <LangSwitcher class="ml-7 mr-7" />
      <a
        class="btn-green text-sm h-9 leading-5"
        href="saulverde_cv_2021.pdf"
        target="_blank"
        role="button"
        >Resume</a
      >
    </div>
    <MenuAside v-show="mobileMenuOpen"  :active="mobileMenuOpen" class="z-20" />
  <transition name="slide-blur">
    <div v-show="mobileMenuOpen" class="overlay-blur lg:hidden" aria-hidden="true" @click="menuModal"></div>
  </transition>
  </header>
</template>

<script>
import NavLinks from "./navLinks";
import IconLink from "./iconDisplay";
import LangSwitcher from "./langSwitcher";
import MenuMobileBtn from "./menuMobileBtn";
import MenuAside from "./menuAside";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  name: "NavBar",
  emits: ["switcher"],
  components: {
    NavLinks,
    LangSwitcher,
    IconLink,
    MenuMobileBtn,
    MenuAside,
  },
  setup(props, context) {
    const router = useRouter();
    const navItems = [
      { path: "home" },
      { path: "about" },
      { path: "work" },
      { path: "contact" },
    ];

    const redirect = () => {
      router.push({ name: "home" });
    };

    let mobileMenuOpen = ref(false);
  
    const menuModal = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
      context.emit('switcher')
    };

    // Close menu aside after route has been chosen
    router.afterEach(() => {
      mobileMenuOpen.value = false
    });

    return { navItems, redirect, mobileMenuOpen, menuModal };
  },
};
</script>
