<template>
  <div class="locale-switcher">
    <select
      class="select-lang"
      v-model="$i18n.locale"
      @change="updateRouteParams($event)"
    >
      <option value="en">{{ t('lang.EN')}}</option>
      <option value="es">{{ t('lang.ES')}}</option>
    </select>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import {useI18n} from 'vue-i18n';
export default {
  name: "langSwitcher",
  setup() {
    const router = useRouter();
    const updateRouteParams = (event) => {
      router.push({
        params: { lang: event.target.value },
      });
    };
    const {t} = useI18n();
    return { updateRouteParams, t };
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
    background-color: transparent;
    appearance: none;
  }
}
</style>
