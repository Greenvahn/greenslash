<template>
  <div
    v-for="(project, projectIndex) in datalist"
    :key="projectIndex"
    class="flex flex-col col-span-3 text-sm p-3 bg-white text-black border border-gray-200 py-2 md:flex-row md:space-x-4 dark:bg-black dark:text-white dark:border-gray-900 dark:border-r-0"
  >
    <h3 class="font-bold w-full md:w-1/3">{{ t(`projectList.listItem.project${projectIndex}.id`) }}</h3>
    <p v-for="(p, pIndex) in project.content" :key="pIndex" class="w-full md:w-2/3">
      {{ t(`projectList.listItem.project${projectIndex}.content.p${pIndex}`) }}
    </p>
    <ul class="flex flex-row space-x-4 font-museomoderno w-1/3 mt-5 text-gray-400 md:mt-0">
      <li v-for="(item, labelIndex) in project.labels" :key="labelIndex">
        {{ t(`projectList.listItem.project${projectIndex}.labels.name${labelIndex}`) }}
      </li>
    </ul>
    <div id="links-box" class="absolute right-5 flex justify-end mr-2 w-1/4 md:relative md:right-0">
      <div
        v-for="(icon, inconIndex) in project.icons"
        :key="inconIndex"
        class="link mx-2 w-auto list-project-icon"
      >
        <a :href="icon.URL" target="_blank" class="w-auto">
          <IconLink
            :name="icon.name"
            :width="icon.w"
            :height="icon.h"
            :style="icon.style"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IconLink from "../components/iconDisplay";
import datalist from "../content/projectList";
import { useI18n } from "vue-i18n";

export default {
  name: "Projectlist",
  components: {
    IconLink,
  },
  setup() {
    const { t } = useI18n();
    return { datalist, t };
  },
};
</script>

<style lang="scss" scoped>
.dark .list-project-icon svg {
  fill: white
}
</style>
