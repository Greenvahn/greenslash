<template>
    <a v-for="(item, index) in links" :key="index" href="#" class="link-green"
      >{{ item.link }}
    </a>
</template>

<script>
export default {
  name: "NavLinks",
  props: {
    links: Object
  }
};
</script>