<!-- QuestionCard.vue -->
<template>
  <q-card class="q-ma-md">
    <div class="q-pa-sm" style="max-width: 650px">
      <q-expansion-item v-model="expanded" :label="question.label" class="text-subtitle2">
        <q-separator />

        <q-card>
          <q-card-section class="q-pt-md q-pb-md">
            <div class="centered-container">
              <q-btn v-for="(option, index) in question.options" :key="index" outline :label="option" class="q-mr-md" style="width: 78px" />
            </div>
            <q-item-label class="q-pt-md text-weight-medium text-caption q-ml-md" color="blue-grey-6">Upload Photos</q-item-label>
            <div class="centered-upload">
              <q-btn text-color="black" label="+ Upload" @click="openFileDialog" style="width: 324px; background-color: #d9d9d9; margin-top: 10px" />
              <input type="file" ref="fileInput" style="display: none" @change="handleFileUpload" />
            </div>
            <q-item-label class="q-pt-md text-weight-medium text-caption q-ml-md" color="blue-grey-6">Notes</q-item-label>
            <div class="q-pa-md" style="max-width: 300px">
              <q-input dense type="textarea" label="type here" outlined style="width: 324px" />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    question: Object,
  },
  data() {
    return {
      expanded: ref(false),
    };
  },
  methods: {
    openFileDialog() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      console.log("Selected file:", file);
    },
  },
};
</script>

<style scoped>
/* Your styles go here */
</style>
