<template>
  <footer class="flex flex-col-reverse items-center absolute w-screen bottom-4 md:w-18 lg:block lg:fixed lg:bottom-16 lg:left-8">
    <p class="footNote w-full text-center transform opacity-40 px-8 text-xs lg:-rotate-90 lg:absolute lg:origin-left lg:left-4 lg:w-56 lg:text-left">MADE BY SAUL VERDE / GREENSLASH</p>
    <ul class="flex flex-row footer-links justify-center w-full lg:block lg:w-8">
      <li v-for="(item, index) in footerLinks" :key="index">
        <a :href="item.link" :aria-label="item.name" target="_blank" class="w-auto">
          <IconLink :name="item.name" :width="item.w" :height="item.h" :style="item.style" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import IconLink from "../components/iconDisplay";


export default {
  name: "FootNote",
  components: {
    IconLink
  },
  setup() {
    const footerLinks = [
      {
        name: "github",
        w: 40,
        h: 40,
        style: 'icon-outlined relative -left-2 mb-2',
        link: "https://github.com/Greenvahn",
      },
      {
        name: "linkedin",
        w: 40,
        h: 40,
        style: 'icon-outlined relative -left-2 mb-2',
        link: "https://www.linkedin.com/in/saul-verde-martinez/",
      },
      {
        name: "twitter",
        w: 40,
        h: 40,
        style: 'icon-outlined relative -left-2 mb-2',
        link: "https://twitter.com/Greenvahn",
      },
      {
        name: "benhance",
        w: 40,
        h: 40,
        style: 'icon-outlined relative -left-2 mb-2',
        link: "https://www.behance.net/saulverde",
      },
    ];
    return { footerLinks };
  },
};
</script>
