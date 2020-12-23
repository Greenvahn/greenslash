<template>
  <nav class="bg-white bg-opacity-0">
    <div class="mx-auto sm:px-6 lg:px-32 lg:py-16">
      <div class="flex items-center justify-between h-32">
        <div class="flex items-center grid-cols-12">
          <div class="flex-auto grid-cols-3">
            <img
              src="./../assets/Logo.svg"
              alt="logo"
              width="125"
              class="mr-4"
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

export default {
  name: "NavBar",
  components: {
    NavLinks,
  },
  setup() {
  const navItems = [
      { name: "HOME", path: "/", id: "HOME" },
      { name: "PROJECTS", path: "/projects", id: "PR0!ECT5" },
      { name: "ABOUT", path: "/about", id: "A3OUT" },
      { name: "CONTACT", path: "/contact", id: "C0NT4CT" },
    ];

    return { navItems };
  },
};
</script>

<style></style>
