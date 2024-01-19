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
           Body Work
          </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-item-label
        class="q-pt-md q-ml-md text-weight-medium text-h6"
        color="grey-5"
        >Body Work</q-item-label
      >
<QuestionCard v-for="(question, index) in questions" :key="index" :question="question" />

  <div style="display: flex; justify-content: center;">
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
import QuestionCard from './QuestionCard.vue';
import { ref } from "vue";

export default {
  components: {
    QuestionCard,
  },
  data() {
    return {
      progress: ref(0.65),
      questions: [
        {
          label: "Council vehicle licence plate(s) clearly displayed and not obsured? *",
          options: ["Yes", "No", "N/A"],
        },
        // Add more questions as needed
      ],
    };
  },
  methods: {
    openFileDialog() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      // Handle file upload logic here
      const file = event.target.files[0];
      console.log("Selected file:", file);
      // You can perform further actions with the selected file
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
