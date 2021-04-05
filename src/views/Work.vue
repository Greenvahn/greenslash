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
        <h2 class="sub-heading dark:text-white">{{ t(`work.second-title`) }}</h2>
        <ProjectList />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/projectCard";

import dataWorks from "../content/works";
import ProjectList from "../components/projectList";
import { useI18n } from "vue-i18n";

export default {
  name: "Work",
  components: {
    ProjectCard,
    ProjectList
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
