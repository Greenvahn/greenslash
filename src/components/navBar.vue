<template>
  <header
    class="flex flex-row justify-start space-x-2 bg-white py-6 px-6 h-32 w-full"
  >
    <IconLink
      name="grslash"
      :viewBox="'0 0 100 73.23'"
      :width="125"
      :height="125"
      :style="'icon-pulse flex-none h-32 -mt-4'"
      @click="redirect"
    />
    <nav class="flex flex-row justify-start flex-grow gap-x-4 w-96">
      <NavLinks :links="navItems" />
    </nav>
    <div id="resources" class="flex flex-row justify-end h-10">
      <LangSwitcher class="ml-7 mr-7" />
      <a
        class="btn-green cursor-pointer text-sm h-9 leading-5"
        href="saulverde_cv_2021.pdf"
        target="_blank"
        >Resume</a
      >
    </div>
  </header>
</template>

<script>
import NavLinks from "./navLinks";
import IconLink from "./iconDisplay";
import LangSwitcher from "./langSwitcher";
import { useRouter } from "vue-router";

export default {
  name: "NavBar",
  components: {
    NavLinks,
    LangSwitcher,
    IconLink,
  },
  setup() {
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

    return { navItems, redirect };
  },
};
</script>
