<template>
  <h1 class="title-path" v-if="$route.name">
    <img src="./../assets/codeArrow.svg" width="110" class="mr-4 opacity-50" />
    <!-- <span>{{ $route.name }}</span> -->
    <span>{{ t(`navBar.navItems.${$route.name}`) }}</span>
  </h1>
</template>

<script>
import {useI18n} from 'vue-i18n'
export default {
  name: "titlePath",
  setup(){
    const {t} = useI18n();
    return {t}
  }
};
</script>