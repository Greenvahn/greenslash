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

    <div class="col-span-1 w-auto max-w-xs">

      <img :src="require('../assets/work-img-sample.jpg')" />

      <div class=" content grid grid-cols-3 gap-2 bg-black text-white max-w-xs">
        <div class="col-span-3 text-sm p-3">
          <h3 class="font-bold py-2 ">THIS IS THE PROJECT TITLE</h3>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna.
          </p>
          <p class="mt-6 font-museomoderno">Node   Express   Firebase   Vue</p>
        </div>
      </div>
      <div id="links-box" class="content flex justify-end">
        <div class="link mx-2">
          <a href="#" target="_blank" class="w-auto">
            <IconLink name="openLink" :width="25" :height="25" />
          </a>
        </div>
        <div class="link mx-2">
          <a href="#" target="_blank" class="w-auto">
            <IconLink name="openLink" :width="25" :height="25" />
          </a>
        </div>
      </div>
    </div>

    <div class="col-span-1">2</div>
    <div class="col-span-1">3</div>
  </div>
</template>

<script>
import IconLink from "../components/iconDisplay";

export default {
  name: "Work",
  components: {
    IconLink,
  },
};
</script>

<style scoped>
.wrapper-view {
  @apply flex grid w-auto grid-cols-3 gap-4 ml-64 pl-6;
}
</style>
