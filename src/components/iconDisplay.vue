<template>
  <div :class="style">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :viewBox="`${viewBox ? viewBox : '0 0 25 25'}`"
      v-html="iconHTML"
      focusable="false"
    ></svg>
  </div>
</template>

<script>
import icons from "../assets/icons.json";

export default {
  name: "iconDisplay",
  props: {
    name: String,
    width: Number,
    height: Number,
    style: String,
    viewBox: String,
  },
  setup(props) {
    const iconLoader = () => {
      return icons[props.name];
    };
    const iconHTML = iconLoader();
    return { iconHTML };
  },
};
</script>

<style lang="scss" scoped>
/* Light modes - normal modes
============================ */

/* Main logo */
.main-logo {
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    max-width: 112px;
    margin-right: 0px;
    transition: all 0.8s ease-in;
    @media (min-width: 768px) {
      width: 80%;
    }
    @media (min-width: 1024px) {
      width: 100%;
    }
  }
  &:hover {
    svg {
      fill: #21d896;
    }
  }
}

/* Generic class - adds fill to SVGs */
.icon-filled {
  opacity: 0.5;
  svg path {
    fill: #0000;
  }
  &:hover {
    opacity: 1;
    svg {
      opacity: 1;
      fill: #21d896;
    }
  }
}

/* Generic class - creates outlined SVGs */
.icon-outlined {
  opacity: 0.5;
  svg {
    fill: none;
    opacity: 1;
    stroke: #000;
  }
  &:hover {
    opacity: 1;
    svg {
      opacity: 1;
      stroke: #21d896;
    }
  }
}

/* Hamburguer menu icon */
.icon-menu {
  &:hover {
    svg {
      fill: #21d896;
    }
  }
}

/* Hamburguer menu - close icon */
.icon-menu-close {
  svg {
    fill: white;
  }
  &:hover {
    svg {
      fill: #21d896;
    }
  }
}


/* Dark modes
============================ */

.dark {
  /* Main logo */
  .main-logo {
    svg {
      fill: #fff;
    }
    &:hover {
      svg {
        fill: #21d896;
      }
    }
  }

  /* Arrow icon - router path*/
  .arrow-route {
    svg {
      fill: #fff;
    }
  }

  /* Hamburguer menu*/
  .icon-menu {
    svg {
      fill: #fff;
    }
    &:hover {
      svg {
        fill: #21d896;
      }
    }
  }
}
</style>
