<template>
<div>
  <div
    v-for="(item, index) in about"
    :key="index"
    class="wrapper-view max-w-3xl"
  >
    <div class="col-span-3">
      <h1 class="text-5xl h-12 bold mb-8">{{ item.title }}</h1>
    </div>
    <img
      :src="require(`../assets/${item.img}`)"
      class="inline-block col-span-1"
    />
    <div class="content col-span-2 space-y-4">
      <div v-for="(para, index) in item.content" :key="index">
        <p v-if="para.text">{{ para.text }}</p>
        <ul v-if="para.ul">
          <li v-for="(bullet, index) in para.ul" :key="index">
            {{ bullet.li }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "About",
  props: {
    dataAbout: Object,
  },
  setup() {
    const about = [
      {
        title: "About me",
        img: "Testimonials.png",
        content: [
          {
            text:
              "I like to build products for the internet with great user interfaces and performant experiences. I’m strong team player who truly believes on collaborative work, always eager to explore new paths.",
          },
          {
            text:
              "In my spare time I create small web applications while learning new programming languages. I also playing handball and running for a few years now. Love technology, videogames and cinema.",
          },
          {
            text: "Here are few technologies I’ve been working with recently:",
          },
          {
            ul: [
              { li: "Javascript (ES6+)" },
              { li: "Vue" },
              { li: "React" },
              { li: "HTML & (S)CSS" },
              { li: "Node.js" },
            ],
          },
        ],
      },
    ];
    return { about };
  },
};
</script>

<style scoped>
.wrapper-view {
  @apply flex grid w-auto grid-cols-3 gap-2 ml-64 mr-32 pl-6;
}
</style>
