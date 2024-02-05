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
          <q-toolbar-title class="q-ml-md"> Comments </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-item-label
        class="q-pt-md q-ml-md text-weight-medium text-h6"
        color="grey-5"
        >Comments</q-item-label
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
          background-color:white;
          bottom: 0px;
          position: fixed;
          z-index: 999;
          padding: 10px;
          width: 100%;
          box-sizing: border-box;
        "
      >
        <q-btn
          rounded
          label="Back"
          color="grey-5"
          @click="goBack"
          class="q-mr-md"
          style="width: 101.501px; height: 47px"
        />
        <q-btn
          rounded
          label="submit checks"
          color="positive"
          @click="goNext"
          style="width: 233.653px; height: 47px"
          to="/inspectionComp"
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
      progress: ref(0.65),
      questions: [
        {
          label: "Any Comments? ",
        },
        {
          label: "Add Location",
          sections: [
            // Customize the sections for the "Add Location" question card
            {
              type: "text", // Assuming you have a text input for the address
              label: "Address",
            },
          ],
        },
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
