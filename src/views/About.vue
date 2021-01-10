<template>
  <div class="wrapper-view max-w-3xl ">
    <img
      :src="require('../assets/Testimonials.png')"
      class="inline-block col-span-1"
    />
    <div class="content col-span-2 space-y-4">
      <h1 class="text-3xl h-12">This is home template</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.wrapper-view {
  @apply flex grid w-auto grid-cols-3 gap-2 ml-64 mr-32 pl-6;
}
</style>
