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
    <ProjectCard
      v-for="(card, index) in cards"
      :card="card"
      :key="index"
    />
  </div>
</template>

<script>
import ProjectCard from "../components/projectCard";

export default {
  name: "Work",
  components: {
    ProjectCard,
  },
  setup() {
    const cards = [
      {
        title: "THIS IS THE PROJECT TILE",
        content: [
          {
            text: "Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          },
        ],
        frameworks: [
          { name: "Node" },
          { name: "Express" },
          { name: "Firebase" },
          { name: "Vue" }
        ],
        icons: [
          { name: "githubFull", w: 24, h: 24 },
          { name: "openLink", w: 25, h: 25 },
        ],
        img: "work-img-sample.jpg",
      },
      {
        title: "THIS IS THE PROJECT TILE",
        content: [
          {
            text: "Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          },
        ],
        frameworks: [
          { name: "Node" },
          { name: "Express" },
          { name: "Firebase" },
          { name: "Vue" }
        ],
        icons: [
          { name: "githubFull", w: 24, h: 24 },
          { name: "openLink", w: 25, h: 25 },
        ],
        img: "work-img-sample.jpg",
      },
      {
        title: "THIS IS THE PROJECT TILE",
        content: [
          {
            text: "Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
          },
        ],
        frameworks: [
          { name: "Node" },
          { name: "Express" },
          { name: "Firebase" },
          { name: "Vue" }
        ],
        icons: [
          { name: "githubFull", w: 24, h: 24 },
          { name: "openLink", w: 25, h: 25 },
        ],
        img: "work-img-sample.jpg",
      },
    ];

    return { cards };
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
