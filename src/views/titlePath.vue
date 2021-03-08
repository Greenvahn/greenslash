<template>
  <h1 class="title-path h-24" v-if="$route.name">
    <!-- <img :src="require(`./../assets/arrow_${currentTheme}.svg`)" width="110" class="mr-4 opacity-50" /> -->
    <IconDisplay name="arrowRoute" :width="Number(100)" :height="Number(110)" :viewBox="'0 0 106.95 96.28'" class="arrow-route mr-4 opacity-5" />
    <!-- <span>{{ $route.name }}</span> -->
    <span>{{ t(`navBar.navItems.${String($route.name)}`) }}</span>
  </h1>
</template>

<script>
import {useI18n} from 'vue-i18n'
import IconDisplay from '../components/iconDisplay';
export default {
  name: "titlePath",
  components: {
    IconDisplay
  },
  setup(){
    const {t} = useI18n();
    const currentTheme = localStorage.getItem("theme");
    return {t, currentTheme }
  }
};
</script>