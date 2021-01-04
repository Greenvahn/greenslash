<template>
  <footer class="fixed-footer">
    <p class="footNote">MADE BY SAUL VERDE / GREENSLASH</p>
    <ul class="footer-links">
      <li v-for="(item, index) in footerLinks" :key="index">
        <a class="link-green" :href="item.link" :aria-label="item.name">{{ item.name }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "FootNote",
  setup() {
    const footerLinks = [
      {
        name: "Github",
        link: "https://github.com/Greenvahn",
        icon: "null",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/saul-verde-martinez/",
        icon: "null",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/Greenvahn",
        icon: "null",
      },
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
