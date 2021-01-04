<template>
  <footer class="fixed-footer w-full fixed bottom-16 left-8">
    <p class="footNote absolute origin-left transform -rotate-90 left-4 opacity-40 px-8 text-xs">MADE BY SAUL VERDE / GREENSLASH</p>
    <ul class="footer-links w-8">
      <li v-for="(item, index) in footerLinks" :key="index">
        <a :href="item.link" :aria-label="item.name">
          <!-- <img class="w-3.5 mt-5" :src="item.icon" /> -->
          <FooterIcon :name="item.name" :width="30" :height="30" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import FooterIcon from "./footerIcon";
export default {
  name: "FootNote",
  components: {
    FooterIcon,
  },
  setup() {
    const footerLinks = [
      {
        name: "github",
        link: "https://github.com/Greenvahn",
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/saul-verde-martinez/",
      },
      {
        name: "twitter",
        link: "https://twitter.com/Greenvahn",
      },
    ];
    return { footerLinks };
  },
};
</script>
