<template>
  <button class="flex self-center mr-6 focus:outline-none">
    <IconLink v-show="!active" name="menu" :width="Number(60)" :height="Number(60)" class="icon-menu" />
    <IconLink v-show="active" name="menuClose" :width="Number(60)" :height="Number(60)" class="icon-menu-close" />
  </button>
</template>

<script>
import IconLink from "./iconDisplay";
export default {
  name: "MenuMobile",
  components: {
    IconLink
  },
  props: {
    active: Boolean
  }
};
</script>
