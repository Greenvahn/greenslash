<template>
  <div class="flex-auto grid-cols-1">
    <router-link
      v-for="(item, index) in links"
      :key="index"
      :to="{ name: item.name, params: { id: item.id} }"
      class="link-green"
      >{{ item.name }}
      <!-- <TitlePath :active="isActive" :id="item.id"/> -->
    </router-link>
  </div>
  <div class="flex-auto grid-cols-8">
    <TitlePath />
  </div>
</template>

<script>
import TitlePath from "./../views/titlePath";
export default {
  name: "NavLinks",
  components: {
    TitlePath,
  },
  props: {
    links: Object,
  }
};
</script>
