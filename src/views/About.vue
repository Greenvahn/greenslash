<template>
  <div>
    <div
      v-for="(item, mainIndex) in about"
      :key="mainIndex"
      class="content-wrap"
    >
      <div class="col-span-3">
        <h1 class="h1-title">{{ t('about.title') }}</h1>
      </div>
      <div class="flex justify-right self-start col-span-3 md:col-span-1">
      <!-- Mobile picture -->
      <img
        :src="require(`../assets/${ t('about.img_sm') }`)"
        class="inline-block w-full mb-6 md:hidden"
      />

      <!-- Desktop picture-->
      <img
        :src="require(`../assets/${ t('about.img_lg') }`)"
        class="hidden w-full pr-6 py-2 md:inline-block"
      />
      </div>
      <div class="content col-span-3 md:col-span-2">
        <div v-for="(para, index) in item.content" :key="index">
          <p v-if="para.text" class="p-text">{{ t(`about.content.p${index}`) }}</p>
          <ul v-if="para.ul">
            <li v-for="(bullet, index) in para.ul" :key="index">
              {{ t(`about.content.ul.li${index}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataAbout from "../content/about";
import {useI18n} from 'vue-i18n';

export default {
  name: "About",
  props: {
    dataAbout: Object,
  },
  setup() {
    const {t} = useI18n();
    const about = dataAbout;
    return { about, t };
  },
};
</script>