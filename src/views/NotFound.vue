<template>
  <div>
    <div
      class="content-wrap"
      v-for="(item, index) in notFound"
      :key="index"
    >
      <div class="col-span-3">
        <h1 class="text-5xl h-12 bold mb-8">{{ item.title }}</h1>
        <p v-for="(p, index) in item.content" :key="index" class="max-w-xl">
          {{ p.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import data404 from "../content/404";
export default {
  name: "NotFound",
  props: {
    data404: Object,
  },
  setup() {
    const notFound = data404;
    return { notFound };
  },
};
</script>
