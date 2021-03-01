<template>
  <div>
    <div
      class="content-wrap"
      v-for="(intro, index) in dataHome"
      :key="index"
    >
      <div class="col-span-3">
        <h1 class="h1-title">{{ t('home.title') }}</h1>
        <p v-for="(p, index) in intro.content" :key="index" class="p-text">
          {{ t(`home.content.p${index}`)}}
        </p>
      </div>
      <div class="col-span-3 mt-10">
        <a
          v-for="(button, index) in intro.buttons"
          :key="index"
          class="btn-green w-full block text-center md:w-44 lg:w-40 lg:max-w-xs"
          :href="button.url"
          target="_blank"
          role="button"
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