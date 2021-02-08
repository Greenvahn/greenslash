<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale" @change="updateRouteParams($event)">
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "langSwitcher",
  setup() {
    const router = useRouter();
    const updateRouteParams = (event) => {
      router.push({
        params: {lang: event.target.value}
      });
    }
    return {updateRouteParams}
  }
};
</script>
