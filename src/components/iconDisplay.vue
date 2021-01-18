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
  fill: none;
  stroke-width: 2;
  stroke: currentColor;
  // transition: top 0.2s ease-in;
  // position: relative;
  // top: 0px;
  // margin-top: 15px;
  &:hover {
    opacity: 1;
    stroke: #21d896;
    // top: -5px;
  }
}
</style>
