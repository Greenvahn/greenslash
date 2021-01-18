<template>
  <div class="icon-display">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 25 25"
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
.icon-display {
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
</style>
