<template>
  <div class="wrapper-view max-w-full ">
    <div class="content col-span-3 space-y-4 mb-16">
      <h1 class="text-3xl h-12">Some of the projects I've built</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
    </div>

    <div class="col-span-1 w-auto">
      <img :src="require('../assets/work-img-sample.jpg')" />
      <div class=" content grid w-auto grid-cols-3 gap-2">
        <div class="col-span-3 text-sm">
          <h3 class="font-bold py-2">THIS IS THE PROJECT TITLE</h3>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna.
          </p>
        </div>
        <div class="col-span-1">
          <a href="#" target="_blank">Link 1</a>
        </div>
        <div class="col-span-1">
          <a href="#" target="_blank">Link 2</a>
        </div>
      </div>
    </div>

    <div class="col-span-1">2</div>
    <div class="col-span-1">3</div>
  </div>
</template>

<script>
export default {
  name: "Work",
};
</script>

<style scoped>
.wrapper-view {
  @apply flex grid w-auto grid-cols-3 gap-4 ml-64 pl-6;
}
</style>
