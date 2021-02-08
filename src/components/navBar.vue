<template>
  <nav class="bg-white bg-opacity-0">
    <div class="mx-auto sm:px-6 lg:px-6 lg:py-8">
      <div class="flex items-center justify-between h-32">
        <div class="flex items-center grid-cols-12">
          <div class="flex-auto grid-cols-3">
            <img
              src="./../assets/Logo.svg"
              alt="logo"
              width="125"
              class="mr-4 cursor-pointer"
              @click="redirect"
            />
          </div>
          <NavLinks :links="navItems" />
        </div>
        <div class="grid-cols-2">
          <LangSwitcher />
        </div>
        <div class="grid-cols-2">
          <a class="btn-green mr-7 cursor-pointer" href="saulverde_cv_2021.pdf" target="_blank">RESUME</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLinks from "./navLinks";
import LangSwitcher from "./langSwitcher"
import { useRouter } from "vue-router";

export default {
  name: "NavBar",
  components: {
    NavLinks,
    LangSwitcher
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
