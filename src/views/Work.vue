<template>
  <div>
    <div class="content-wrap" v-for="(work, index) in works" :key="index">
      <div class="content col-span-3 space-y-4 mb-16">
        <h1 class="h1-title">{{work.title}}</h1>
        <p
          v-for="(p, index) in work.content"
          :key="index"
          class="dark:text-white"
        >
          {{ t(`work.content.p${index}`) }}
        </p>
      </div>
      <ProjectCard
        v-for="(card, index) in work.cards"
        :card="card"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "../components/projectCard";
import dataWorks from "../content/works"
import { useI18n } from "vue-i18n";

export default {
  name: "Work",
  components: {
    ProjectCard,
  },
  setup() {
    const {t} = useI18n();
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
</style>
