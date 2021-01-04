<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    class="icon-footer"
    viewBox="0 0 50 50"
  >
    <path :d="path()" />
  </svg>
</template>

<script>
import icons from "../assets/icons.json";

export default {
  name: "footerIcon",
  props: {
    name: String,
    width: Number,
    height: Number
  },
  setup(props){
    const path = () => {
      return icons[props.name];
    }
    return {path}
  }
};
</script>


<style lang="scss" scoped>
.icon-footer {
  opacity: 0.5;
  fill: none;
  stroke-width: 2;
  stroke: currentColor;
  transition: top 0.2s ease-in;
  position: relative;
  top: 0px;
  margin-top: 15px;
  &:hover{
    opacity: 1;
    stroke: #21D896;
    top: -5px;
  }
}
</style>
