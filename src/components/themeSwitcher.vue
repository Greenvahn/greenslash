<template>
  <form>
    <div @click="colorSwitcher" class="switch" role="button" aria-checked="false" aria-label="Toggle dark mode" title="Toggle dark mode" tabindex="0">
      <IconDisplay name="colorMode" :width="Number(35)" :height="Number(34)" class="icon-darkmode" />
    </div>
  </form>
</template>
<script>
import IconDisplay from "./iconDisplay";
export default {
  name: "themeSwitcher",
  components: {
    IconDisplay
  },
  setup() {
    //Change color mode
    const colorSwitcher = () => {
      // Switch values
      let currentTheme = localStorage.getItem("theme");
      currentTheme === "light"
        ? (currentTheme = "dark")
        : (currentTheme = "light");

      // Stores locally the value
      localStorage.setItem("theme", currentTheme);

      // Changes the class on HTML tag
      if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    return { colorSwitcher }
  },
};
</script>

<style lang="scss">
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  cursor: pointer;
  padding: 0 5px;
  margin-left: 5px;
  height: 36px;
}
</style>
