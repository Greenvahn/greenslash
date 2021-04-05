<template>
        <div v-for="(project, projectIndex) in datalist" :key="projectIndex"
          class="flex flex-row col-span-3 text-sm p-3 bg-white text-black space-x-4 border border-gray-200 py-2"
        >
          <h3 class="font-bold w-1/3">{{project.id}}</h3>
          <p v-for="(p, pIndex) in project.content" :key="pIndex" class="w-2/3">{{p.text}}</p>
          <ul class="flex flex-row space-x-4 font-museomoderno w-1/3">
            <li v-for="(item, labelIndex) in project.labels" :key="labelIndex">{{item.name}}</li>
          </ul>
          <div id="links-box" class="relative flex justify-end mr-2 w-1/4">
            <div v-for="(icon, inconIndex) in project.icons" :key="inconIndex" class="link mx-2 w-auto">
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
import datalist from "../content/projectList"

export default {
  name: "Projectlist",
  components: {
    IconLink
  },
  setup() {
    
    return {datalist}
  },
}
</script>
