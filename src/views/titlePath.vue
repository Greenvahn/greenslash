<template>
  <h1 class="title-path">
    <img
      src="./../assets/codeArrow.svg"
      width="110"
      class="mr-4 opacity-50"
      v-if="$route.name"
    />
    <span v-if="$route.name">{{ $route.name }}</span>
  </h1>
</template>

<script>

export default {
  name: "titlePath",
  props: {
    id: String,
    extra: String
  },
};
</script>
