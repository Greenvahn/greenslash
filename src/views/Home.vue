<template>
  <div>
    <div
      class="wrapper-view "
      v-for="(intro, index) in dataHome"
      :key="index"
    >
      <div class="col-span-3">
        <h1 class="text-5xl h-12 bold mb-8">{{ t('home.title') }}</h1>
        <p v-for="(p, index) in intro.content" :key="index" class="max-w-xl">
          {{ t(`home.content.p${index}`)}}
        </p>
      </div>
      <div class="col-span-3 mt-10">
        <a
          v-for="(button, index) in intro.buttons"
          :key="index"
          class="btn-green mr-7 cursor-pointer"
          :href="button.url"
          target="_blank"
          >{{ t('home.buttons.text')}}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import dataHome from "../content/home";
import {useI18n} from 'vue-i18n'

export default {
  name: "Home",
  setup() {
    const {t, locale} = useI18n();
    return { dataHome, t, locale };
  },
};
</script>

<style scoped>
.wrapper-view {
  @apply flex grid w-auto grid-cols-3 ml-64 mr-32 pl-6;
}
</style>
