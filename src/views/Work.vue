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

    <ProjectCard id="project01"/>
    <ProjectCard id="project02"/>
    <ProjectCard id="project02"/>
  </div>
</template>

<script>
import ProjectCard from "../components/projectCard";

export default {
  name: "Work",
  components: {
    ProjectCard,
  },
};
</script>

<style lang="scss">
.wrapper-view {
  @apply flex grid w-auto grid-cols-3 gap-4 ml-64 pl-6;
}

.project-card {
  transition: margin-top 0.2s ease-in;
  &:hover {
    margin-top: -5px;
  }
}
</style>
