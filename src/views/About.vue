<template>
  <div>
    <div
      v-for="(item, mainIndex) in about"
      :key="mainIndex"
      class="content-wrap grid-cols-8"
    >
      <div class="col-span-10">
        <h1 class="h1-title">{{ t("about.title") }}</h1>
      </div>
      <div class="flex justify-right self-start max-h-60 col-span-8 md:col-span-2 lg:col-span-2 lg:max-h-full">
        <!-- Mobile picture -->
        <img
          :src="require(`../assets/${t('about.img_sm')}`)"
          class="img-portrait-rectangle mb-6 md:hidden"
        />

        <!-- Desktop picture-->
        <img
          :src="require(`../assets/${t('about.img_lg')}`)"
          class="hidden img-portrait-square mt-2 md:inline-block"
        />
      </div>
      <div class="content col-span-8 md:ml-16 md:col-span-6 md:max-w-prose lg:col-span-6 lg:ml-0">
        <div v-for="(para, index) in item.content" :key="index">
          <p v-if="para.text" class="p-text mr-0">
            {{ t(`about.content.p${index}`) }}
          </p>
          <ul v-if="para.ul1" class="category float-left mr-12 dark:text-white">
            <li v-for="(bullet, index) in para.ul1" :key="index" class="remark">
              {{ t(`about.content.ul1.li${index}`) }}
            </li>
          </ul>
          <ul v-if="para.ul2" class="category ml-0 float-left dark:text-white">
            <li v-for="(bullet, index) in para.ul2" :key="index" class="remark">
              {{ t(`about.content.ul2.li${index}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataAbout from "../content/about";
import { useI18n } from "vue-i18n";

export default {
  name: "About",
  props: {
    dataAbout: Object,
  },
  setup() {
    const { t } = useI18n();
    const about = dataAbout;
    return { about, t };
  },
};
</script>
