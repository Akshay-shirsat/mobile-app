<template>
  <q-page style="background-color: #f4f4f4">
    <div class="container" v-if="flag">
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
          <q-toolbar-title class="q-ml-md">
            Interior Check
          </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-item-label class="q-pt-md q-ml-md text-weight-medium" color="dark"
        >Questions</q-item-label
      >
      <div style="padding-bottom:85px;">
<QuestionCard v-for="(question, index) in questions" :key="index" :question="question" />
</div>
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
          text-color="black"
          color="grey-5"
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
          to="/ExteriorCheck"
          class="q-ma-sm"
        />
      </div>
    </div>
    <div v-else>
      <SkelQuestioncard />
    </div>
  </q-page>
</template>
<script>
import QuestionCard from './QuestionCard.vue';
import { ref } from "vue";
import SkelQuestioncard from "../../components/skeleton/SkelQuestioncard.vue";
export default {
  components: {
    QuestionCard,
    SkelQuestioncard
  },
  created() {
    setTimeout(() => {
      this.flag = true;
      this.fetchCompletedReports();
    }, 2000);
  },
  data() {
    return {
       flag: false,
      progress: 0.22,
      questions: [
        {
          label: "Are all seatbelts present, securely fixed and free from cuts or damage?",
          options: ["Yes", "No", "N/A"],
        },
         {
          label: "Are there any dashboard warning lights illuminuted including: EML, OIL, ABS, TYRES, BRAKES, ETC?",
          options: ["Yes", "No", "N/A"],
        },
         {
          label: "Does the horn operate correctly?",
          options: ["Yes", "No", "N/A"],
        },
         {
          label: "Are all driving mirrors free from damage or cracks securely fitted and aligned correctly?",
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
