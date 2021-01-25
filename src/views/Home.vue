<template>
  <div>
    <div
      class="wrapper-view "
      v-for="(intro, index) in introduction"
      :key="index"
    >
      <div class="col-span-3">
        <h1 class="text-5xl h-12 bold mb-8">{{ intro.title }}</h1>
        <p v-for="(p, index) in intro.content" :key="index" class="max-w-xl">
          {{ p.text }}
        </p>
      </div>
      <div class="col-span-3 mt-10">
        <a
          v-for="(button, index) in intro.buttons"
          :key="index"
          class="btn-green mr-7 cursor-pointer"
          :href="button.url"
          target="_blank"
          >{{ button.text }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import dataHome from "../content/home";

export default {
  name: "Home",
  props: {
    dataHome: Object,
  },
  setup() {
    const introduction = dataHome;
    return { introduction };
  },
};
</script>

<style scoped>
.wrapper-view {
  @apply flex grid w-auto grid-cols-3 ml-64 mr-32 pl-6;
}
</style>
