<template>
  <div class="locale-switcher">
    <select
      class="select-lang"
      v-model="$i18n.locale"
      @change="updateRouteParams($event)"
    >
      <option value="en">
        <span class="flag_en"></span>
        EN
      </option>
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
        params: { lang: event.target.value },
      });
    };
    return { updateRouteParams };
  },
};
</script>

<style lang="scss">
// Reset select default browser styles
.locale-switcher {
  select:focus {
    outline: none;
  }
  select {
    background-image: url('../assets/chevron-select.svg');
    background-position: right .5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    appearance: none;
  }
}
</style>
