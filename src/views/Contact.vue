<template>
  <div>
    <div
      class="content-wrap"
      v-for="(intro, index) in contact"
      :key="index"
    >
      <div class="col-span-3">
        <h1 class="h1-title">{{ t('contact.title') }}</h1>
        <p v-for="(p, index) in intro.content" :key="index" class="max-w-xl dark:text-white">
          <!-- {{ p.text }} -->
          {{ t(`contact.content.p${index}`)}}
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
          >
          <!-- {{ button.text }} -->
          {{ t(`contact.buttons.btn${index}.text`)}}
          </a>
      </div>
    </div>
  </div>
</template>

<script>
import dataContact from "../content/contact";
import {useI18n} from 'vue-i18n';

export default {
  name: "Contact",
  props: {
    dataContact: Object,
  },
  setup() {
    const contact = dataContact;
    const {t,} = useI18n();
    return { contact, t };
  },
};
</script>
