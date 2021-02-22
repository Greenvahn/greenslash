<template>
  <div class="project-card col-span-3 w-auto min-w-200 mb-12 sm:col-span-3 md:col-span-1 md:mr-6 lg:max-w-lg">
    <div class="-mt-10">
      <div id="links-box" class="relative flex justify-end top-10 mr-2">
        <div v-for="(icon, index) in card.icons" :key="index" class="link mx-2 w-auto">
          <a href="#" target="_blank" class="w-auto">
            <IconLink :name="icon.name" :width="icon.w" :height="icon.h" :style="icon.style" />
          </a>
        </div>
      </div>

      <img :src="require(`../assets/${card.img}`)" class="w-full"/>

      <div class="content grid grid-cols-3 gap-2 bg-black text-white">
        <div class="col-span-3 text-sm p-3">
          <h3 class="font-bold py-2 ">{{ card.title }}</h3>
          <p v-for="(p, index) in card.content" :key="index">
            {{ p.text }}
          </p>
          <ul class="mt-6 font-museomoderno space-x-4">
            <li
              v-for="(skill, index) in card.frameworks"
              :key="index"
              class="inline-block"
            >
              {{ skill.name }}
            </li>
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
  props: {
    card: Object,
  },
  components: {
    IconLink,
  }
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
