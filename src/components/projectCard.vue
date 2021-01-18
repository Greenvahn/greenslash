<template>
  <div class="project-card col-span-1 w-auto max-w-xs min-w-200">
    <div class="-mt-10">
      <div id="links-box" class="relative flex justify-end top-10 mr-2">
        <div class="link mx-2 w-auto">
          <a href="#" target="_blank" class="w-auto">
            <IconLink name="githubFull" :width="24" :height="24" />
          </a>
        </div>
        <div class="link mx-2 w-auto">
          <a href="#" target="_blank" class="w-auto">
            <IconLink name="openLink" :width="25" :height="25" />
          </a>
        </div>
      </div>

      <img :src="require('../assets/work-img-sample.jpg')" />

      <div class="content grid grid-cols-3 gap-2 bg-black text-white max-w-xs">
        <div class="col-span-3 text-sm p-3">
          <h3 class="font-bold py-2 ">THIS IS THE PROJECT TITLE</h3>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna.
          </p>
          <ul class="mt-6 font-museomoderno space-x-4">
            <li class="inline-block">Node</li>
            <li class="inline-block">Express</li>
            <li class="inline-block">Firebase</li>
            <li class="inline-block">Vue</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconLink from "../components/iconDisplay";

export default {
  name: "ProjectCard",
  components: {
    IconLink,
  },
};
</script>

<style lang="scss">
.project-card {
  transition: margin-top 0.2s ease-in;
  &:hover {
    margin-top: -5px;
  }
}
</style>
