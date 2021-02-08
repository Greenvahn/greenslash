<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "langSwitcher"
};
</script>
