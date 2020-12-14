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
            <div class="flex-auto grid-cols-1">
              <NavLinks :links='navItems' />
            </div>
            <div class="flex-auto grid-cols-8">
              <h1 class="title-path">
                <img src="./../assets/codeArrow.svg" width="110" class="mr-4 opacity-50" />
                H3L!O WORLD
              </h1>
            </div>
          </div>
          <div class="grid-cols-4">
              <button class="btn-green mr-7">RESUME</button>
          </div>

      </div>
    </div>
  </nav>
</template>

<script>
import NavLinks from './navLinks.vue'

export default {
  name: "NavBar",
  components: {
    NavLinks
  },
  setup() {
    const navItems = [
      { link: "HOME", path: "#" },
      { link: "PROJECTS", path: "#" },
      { link: "ABOUT", path: "#" },
      { link: "CONTACT", path: "#" },
    ];

    return { navItems };
  },
};
</script>

<style></style>
