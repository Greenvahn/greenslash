<template>
  <div class="content-wrap lg:max-w-4xl">
    <div class="content col-span-3 space-y-4 mb-16">
      <h1 class="h1-title">Some of the projects I've built</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
    </div>
    <ProjectCard
      v-for="(card, index) in cards"
      :card="card"
      :key="index"
    />
  </div>
</template>

<script>
import ProjectCard from "../components/projectCard";
import dataWorks from "../content/works"

export default {
  name: "Work",
  components: {
    ProjectCard,
  },
  setup() {
    const cards = dataWorks;
    return { cards };
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
