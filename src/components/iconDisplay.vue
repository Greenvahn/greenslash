<template>
  <div :class="style">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :viewBox="`${viewBox ? viewBox : '0 0 25 25'}`"
      v-html="iconHTML"
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
.icon-pulse {
  cursor: pointer;
  svg {
    transition: all 0.8s ease-in;
  }
  &:hover {
    svg {
      fill: #21d896;
    }
  }
}

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
</style>
