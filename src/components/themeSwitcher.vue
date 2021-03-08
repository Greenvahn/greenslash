<template>
  <form>
    <div @click="colorSwitcher" class="switch" role="button" aria-checked="false" aria-label="Toggle dark mode" tabindex="0">
      <IconDisplay name="colorMode" :width="Number(35)" :height="Number(34)" class="icon-darkmode" /> 
      <span v-if="text">{{ t(`theme`) }}</span>
    </div>
  </form>
</template>
<script>
import IconDisplay from "./iconDisplay";
import {useI18n} from 'vue-i18n';
export default {
  name: "themeSwitcher",
  props: {
    text: Boolean
  },
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

    const {t} = useI18n();

    return { colorSwitcher, t }
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
  text-align: center;
  cursor: pointer;
  padding: 0 5px;
  margin-left: 5px;

  .icon-darkmode {
    svg {
      opacity: 0.2;
    }
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
}

.menu-side .switch {
  padding: 0;
  margin-left: 0;
  opacity: 0.5;

  .icon-darkmode {
    svg {
      opacity: 0.8;
      fill: white;
    }
  }

  span {
    color: white;
    padding-left: 5px;
  }

  &:hover {
    opacity: 1;
  }
}

.dark .switch {
  .icon-darkmode {
    svg {
       fill: #21d896;
    }
  }
}

.dark .menu-side .switch {
  .icon-darkmode {
    svg {
      opacity: 0.8;
      fill: #21d896;
    }
  }
  span {
    color: #21d896;
  }
}


</style>
