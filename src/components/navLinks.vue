<template>
  <div>
    <a v-for="(item, index) in links" :key="index" href="#" class="link-green"
      >{{ item.link }}
    </a>
  </div>
</template>

<script>
export default {
  name: "NavLinks",
  props: {
    links: Object
  }
};
</script>