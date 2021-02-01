<template>
  <div class="wrapper-view max-w-3xl ">
    <div class="col-span-3">
      <h1 class="text-5xl h-12 bold mb-8">About me</h1>
    </div>
    <img
      :src="require('../assets/Testimonials.png')"
      class="inline-block col-span-1"
    />
    <div class="content col-span-2 space-y-4">
      <p>
        I like to build products for the internet with great user interfaces and
        performant experiences. I’m strong team player who truly believes on
        collaborative work, always eager to explore new paths.
      </p>
      <p>
        In my spare time I create small web applications while learning new
        programming languages. I also playing handball and running for a few
        years now. Love technology, videogames and cinema.
      </p>
      <p>Here are few technologies I’ve been working with recently:</p>
      <ul>
        <li>Javascript (ES6+)</li>
        <li>Vue</li>
        <li>React</li>
        <li>HTML & (S)CSS</li>
        <li>Node.js</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.wrapper-view {
  @apply flex grid w-auto grid-cols-3 gap-2 ml-64 mr-32 pl-6;
}
</style>
