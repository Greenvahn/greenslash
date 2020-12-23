<template>
  <div class="wrapper-view">
    <div class="col-span-3">
      <h1 class="text-3xl h-12">This is home template</h1>
      <p class="max-w-xl">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
    </div>
    <div class="col-span-3 py-12">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.wrapper-view {
  @apply flex grid w-auto grid-cols-3 ml-8 mr-32;
}
</style>
