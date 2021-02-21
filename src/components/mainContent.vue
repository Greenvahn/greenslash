<template>
  <main id="content" class="mx-auto max-w-full relative mt-48 z-0 min-h-300">
    <!-- <div class="content-wrap"> -->
      <slot></slot>
    <!-- </div> -->
  </main>
</template>

<script>
export default {
  name: "Content blocks",
};
</script>

<style lang="scss" scoped>
  // .content-wrap {
  //   @apply flex grid grid-cols-3 items-center h-auto min-h-full;
  // }
</style>
