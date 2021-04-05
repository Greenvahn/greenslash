<template>
  <div>
    <div class="content-wrap" v-for="(work, index) in works" :key="index">
      <div class="content col-span-3 space-y-4 mb-16">
        <h1 class="h1-title">{{ t(`work.title`) }}</h1>
        <p
          v-for="(p, index) in work.content"
          :key="index"
          class="dark:text-white"
        >
          {{ t(`work.content.p${index}`) }}
        </p>
      </div>
      <ProjectCard />
      <div class="content col-span-3 space-y-4 mb-16">
        <h2 class="sub-heading">{{ t(`work.second-title`) }}</h2>

        <div
          class="flex flex-row col-span-3 text-sm p-3 bg-white text-black space-x-4 border border-gray-200"
        >
          <h3 class="font-bold py-2 w-1/3">Project 01 title</h3>
          <p class="w-2/3">Short description</p>
          <ul class="flex flex-row space-x-4 font-museomoderno w-1/3">
            <li>label00</li>
            <li>label01</li>
            <li>label02</li>
          </ul>
          <div id="links-box" class="relative flex justify-end mr-2 w-1/4">
            <div class="link mx-2 w-auto">
              <a href="https://github.com/Greenvahn/vue-list-prototype" target="_blank" class="w-auto">
                <IconLink
                  name="githubFull"
                  width="25"
                  height="25"
                  style="icon-filled"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/projectCard";
import IconLink from "../components/iconDisplay";
import dataWorks from "../content/works";
import { useI18n } from "vue-i18n";

export default {
  name: "Work",
  components: {
    ProjectCard,
    IconLink,
  },
  setup() {
    const { t } = useI18n();
    const works = dataWorks;
    return { works, t };
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

.sub-heading {
  font-size: 2rem;
}
</style>
