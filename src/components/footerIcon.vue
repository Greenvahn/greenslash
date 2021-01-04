<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    class="icon mt-5"
    viewBox="0 0 16 16"
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

<style scoped>
.icon {
  opacity: 0.5;
}
.icon:hover {
  opacity: 1;
}
</style>
