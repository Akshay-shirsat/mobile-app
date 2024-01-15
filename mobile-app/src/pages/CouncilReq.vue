<template>
<div>
   <div >
    <q-linear-progress
      v-for="size in [ 'md']"
      :key="size"
      :size="size"
      :value="progress"
      color="primary"
      @click="randomize"
    />
  </div>
    <q-header  class="bg-white text-primary">
      <q-bar class="q-py-lg bg-white text-black">
        <q-toolbar-title class="q-ml-md"> Council Requirement  </q-toolbar-title>
        <q-btn flat round dense icon="more_vert" />
      </q-bar>
    </q-header>
    <q-item-label
            class="q-pa-md q-ml-sm text-weight-medium text-h6"
            color="grey-5"
            >Questions</q-item-label
          >
          <div class="q-pa-sm " style="max-width: 650px">
    <q-expansion-item
      v-model="expanded"
      label="Council vehicle licence plate(s) clearly displayed and not obsured? *"
      class="text-subtitle2"
    >
      <q-card>
        <q-card-section>
          <div class="q-pa-md q-gutter-y-md column items-start">
            <q-btn-group>
      <q-btn color="white" glossy label="First" />
      <q-btn color="white" glossy label="Second" />
      <q-btn color="white" glossy label="Third" />
      <q-btn color="secondary" glossy label="Fourth" />
    </q-btn-group>
    </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>


</div>
     </template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    const progress = ref(0.65)

    return {
      progress,
      randomize () {
        progress.value = Math.random()
      }
    }
  }
}
</script>
