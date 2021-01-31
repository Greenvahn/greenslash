<template>
  <footer class="fixed-footer w-full fixed bottom-16 left-8">
    <p class="footNote absolute origin-left transform -rotate-90 left-4 opacity-40 px-8 text-xs">MADE BY SAUL VERDE / GREENSLASH</p>
    <ul class="footer-links w-8">
      <li v-for="(item, index) in footerLinks" :key="index">
        <a :href="item.link" :aria-label="item.name">
          <a :href="item.link" target="_blank" class="w-auto">
            <IconLink :name="item.name" :width="item.w" :height="item.h" :style="item.style" />
          </a>
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
