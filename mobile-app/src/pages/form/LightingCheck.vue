<template>
  <q-page style="background-color: #f4f4f4">
    <div class="container">
      <div>
        <q-linear-progress
          v-for="size in ['md']"
          :key="size"
          :size="size"
          :value="progress"
          color="primary"
          @click="randomize"
        />
      </div>
      <q-header class="bg-white text-primary">
        <q-bar class="q-py-lg bg-white text-black">
          <q-toolbar-title class="q-ml-md">
            LightingCheck
          </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-item-label
        class="q-pt-md q-ml-md text-weight-medium text-h6"
        color="grey-5"
      >Questions</q-item-label>

      <div v-for="(question, index) in questions" :key="index">
        <q-card class="q-ma-md">
          <div class="q-pa-sm" style="max-width: 650px">
            <q-expansion-item
              v-model="expanded[index]"
              :label="question.label"
              class="text-subtitle2"
            >
              <q-separator />
              <q-card>
                <q-card-section class="q-pt-md q-pb-md">
                  <div class="centered-container">
                    <q-btn
                      v-for="(option, optionIndex) in question.options"
                      :key="optionIndex"
                      outline
                      :label="option"
                      class="q-mr-md"
                      style="width: 78px"
                    />
                  </div>
                  <!-- ... other elements ... -->
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </q-card>
      </div>

      <div style="display: flex; justify-content: center; bottom: 110px; position: fixed; z-index: 999; padding: 10px; width: 100%; box-sizing: border-box;">
        <q-btn
          rounded
          label="Back"
          color="grey-5"
          @click="goBack"
          class="q-mr-md"
          style="width: 169.224px;height: 49px;"
        />
        <q-btn
          rounded
          label="Next"
          color="primary"
          @click="goNext"
          style="width: 169.224px;height: 49px;"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      progress: ref(0.65),
      expanded: [],
      questions: [
        {
          label: "Council vehicle licence plate(s) clearly displayed and not obscured? *",
          options: ["Yes", "No", "N/A"],
        },
        {
          label: "No Smoking signs are displayed and viewable by every passenger? *",
          options: ["Yes", "No", "N/A"],
        },
      ],
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
    randomize() {
      this.progress = Math.random();
    },
  },
};
</script>
<style scoped>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.centered-upload {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
