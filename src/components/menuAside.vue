<template>
  <aside
    :aria-hidden="active"
    :tabindex="`${active ? 1 : 0}`"
    class="menu-side lg:hidden"
  >
    <LangSwitcher class="mb-16" />
    <NavLinks :links="navItems" />
    <div class="mt-16">
      <a
        class="btn-green cursor-pointer tex-sm"
        href="saulverde_cv_2021.pdf"
        target="_blank"
        >Resume</a
      >
    </div>
  </aside>
</template>

<script>
import NavLinks from "./navLinks";
import LangSwitcher from "./langSwitcher";
export default {
  name: "menuAside",
  components: {
    NavLinks,
    LangSwitcher,
  },
  props: {
    active: Boolean,
  },
  setup() {
    const navItems = [
      { path: "home" },
      { path: "about" },
      { path: "work" },
      { path: "contact" },
    ];

    return { navItems };
  },
};
</script>

<style lang="scss">
// Reset select default browser styles
.menu-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  padding: 150px 10px;
  width: min(75vw, 400px);
  height: 100vh;
  outline: 0px;
  background-color: black;
  box-shadow: -10px 0px 30px -15px black;
  visibility: visible;

  .navlinks-wrap a {
    margin: 10px 0;
    color: white;
    &:hover {
      color: #21D896;
    }
  }
  .btn-green {
    color: #21D896;
  }

  .locale-switcher select {
    opacity: 0.5;
    background-color: transparent;
    color: white;
    &:hover {
      opacity: 1;
    }
    option {
      color: black;
    }
  }
}
</style>
