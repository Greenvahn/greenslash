<template>
    <router-link v-for="(item, index) in links" :key="index" :to="item.path" class="link-green"
      >{{ item.name }}
    </router-link>
</template>

<script>
export default {
  name: "NavLinks",
  props: {
    links: Object
  }
};
</script>