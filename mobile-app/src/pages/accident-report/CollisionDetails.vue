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
          <q-btn flat round dense icon="arrow_back" @click="goBack" />
          <q-toolbar-title class="q-ml-md"> Collision Details </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-item-label
        class="q-pt-md q-ml-md text-weight-medium "
        color="grey-5"
        >Accident report overview
      </q-item-label>

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
          to="/InsuranceDetails"
          class="q-ma-sm"
        />
      </div>
    </div>
  </q-page>
</template>
<script>
import QuestionCard from "../form/QuestionCard.vue";

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
          label: "Upload Photos of damage to Vehicle 1",
        },
        {
          label: "Upload Photos of damage to Vehicle 2",
        },

      ],
      newQuestions: [
        {
          title: "Collision Details ",
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
    goBack() {
this.$router.go(-1);
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
