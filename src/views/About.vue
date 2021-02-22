<template>
  <div>
    <div
      v-for="(item, index) in about"
      :key="index"
      class="content-wrap"
    >
      <div class="col-span-3">
        <h1 class="h1-title">{{ item.title }}</h1>
      </div>
      <div class="flex justify-right self-start col-span-3 md:col-span-1">
      <!-- Mobile picture -->
      <img
        :src="require(`../assets/${item.img_sm}`)"
        class="inline-block w-full mb-6 md:hidden"
      />

      <!-- Desktop picture-->
      <img
        :src="require(`../assets/${item.img_lg}`)"
        class="hidden w-full pr-6 py-2 md:inline-block"
      />
      </div>
      <div class="content col-span-3 md:col-span-2">
        <div v-for="(para, index) in item.content" :key="index">
          <p v-if="para.text" class="p-text">{{ para.text }}</p>
          <ul v-if="para.ul">
            <li v-for="(bullet, index) in para.ul" :key="index">
              {{ bullet.li }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataAbout from "../content/about";
export default {
  name: "About",
  props: {
    dataAbout: Object,
  },
  setup() {
    const about = dataAbout;
    return { about };
  },
};
</script>