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
        />
      </div>
      <q-header class="bg-white text-primary">
        <q-bar class="q-py-lg bg-white text-black">
          <q-btn flat round dense icon="arrow_back" @click="goBack" />
          <q-toolbar-title class="q-ml-md">
            Council Requirement
          </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-item-label class="q-pt-md q-ml-md text-weight-medium" color="grey-5"
        >Questions</q-item-label
      >
      <QuestionCard
        v-for="(question, index) in questions"
        :key="index"
        :question="question"
      />

      <div
        style="
          display: flex;
          justify-content: center;
          background-color: white;
          bottom: 0px;
          position: fixed;
          z-index: 999;
          padding: 10px;
          width: 100%;
          box-sizing: border-box;
        "
      >
        <q-btn
          no-caps
          rounded
          label="Back"
          color="grey-5"
          text-color="black"
          @click="goBack"
          class="q-ma-sm"
          style="width: 200.224px; height: 49px"
        />
        <q-btn
          no-caps
          rounded
          label="Next"
          color="primary"
          @click="goNext"
          style="width: 200.224px; height: 49px"
          to="/interiorCheck"
          class="q-ma-sm"
        />
      </div>
    </div>
  </q-page>
</template>
<script>
import QuestionCard from "./QuestionCard.vue";
import { ref } from "vue";

export default {
  components: {
    QuestionCard,
  },
  data() {
    return {
      progress: 0.11,
      questions: [
        {
          label:
           "Council vehicle licence plate(s) clearly displayed and not obscured?*",
          options: ["Yes", "No", "N/A"],
        },
        {
          label:
            "No Smoking signs are displayed and viewable by every passenger? *",
          options: ["Yes", "No", "N/A"],
        },
        {
          label:
            "Is there a first aid kit available and accessible? * (Check expiry date) ",
          options: ["Yes", "No", "N/A"],
        },
         {
          label:
            "Is there a fire extinguisher available and accessible? * (Check expiry date)  ",
          options: ["Yes", "No", "N/A"],
        },
         {
          label:
            "Is the taxi meter visible and correctly collaborated to the current tariffs? ",
          options: ["Yes", "No", "N/A"],
        },
        {
          label:
            "Is the table of charges cleared displayed in accordance to licence? ",
          options: ["Yes", "No", "N/A"],
        },
        {
          label:
            "In vehicle CCTV-Signed displayed and viewable? Sound is switched off camera whilst recording? *",
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
      goBack() {
    this.$router.go(-1);
  },

  goNext() {
    if (this.progress < 100) {
      this.progress += 10;
    }
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
