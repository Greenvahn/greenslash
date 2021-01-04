<template>
  <footer class="fixed-footer">
    <p class="footNote">MADE BY SAUL VERDE / GREENSLASH</p>
    <ul class="footer-links">
      <li v-for="(item, index) in footerLinks" :key="index">
        <a :href="item.link" :aria-label="item.name">
          <!-- <img class="w-3.5 mt-5" :src="item.icon" /> -->
          <FooterIcon :name="item.name" :width="25" :height="25" />          
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import FooterIcon from './footerIcon'
export default {
  name: "FootNote",
  components: {
    FooterIcon
  },
  setup() {
    const footerLinks = [
      {
        name: "github",
        link: "https://github.com/Greenvahn"
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/saul-verde-martinez/"
      },
      {
        name: "twitter",
        link: "https://twitter.com/Greenvahn"
      }
    ];
    return { footerLinks };
  },
};
</script>

<style scoped>
.fixed-footer {
  width: 100%;
  left: 20px;
  bottom: 20px;
  position: fixed;
}
.footNote {
  width: 100%;
  font-size: 10px;
  transform-origin: left;
  transform: rotate(-90deg);
  opacity: 0.4;
}
</style>
