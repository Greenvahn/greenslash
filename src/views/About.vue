<template>
  <div>
    <div
      v-for="(item, index) in about"
      :key="index"
      class="content-wrap"
    >
      <div class="col-span-3">
        <h1 class="text-5xl h-12 bold mb-8">{{ item.title }}</h1>
      </div>
      <img
        :src="require(`../assets/${item.img}`)"
        class="inline-block col-span-1"
      />
      <div class="content col-span-2 space-y-4">
        <div v-for="(para, index) in item.content" :key="index">
          <p v-if="para.text">{{ para.text }}</p>
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