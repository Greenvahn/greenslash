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
        <div class="grid-cols-4">
          <button class="btn-green mr-7">RESUME</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLinks from "./navLinks";
import { useRouter } from "vue-router";

export default {
  name: "NavBar",
  components: {
    NavLinks,
  },
  setup() {
    const router = useRouter();
    const navItems = [
      { name: "HOME", path: "/", id: "HOME" },
      { name: "ABOUT", path: "/ABOUT", id: "ABOUT" },
      { name: "WORK", path: "/WORK", id: "WORK" },
      { name: "CONTACT", path: "/CONTACT", id: "CONTACT" },
    ];

    const redirect = () => {
      router.push({ name: "HOME" });
    };

    return { navItems, redirect };
  },
};
</script>
