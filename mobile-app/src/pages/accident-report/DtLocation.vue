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
          <q-btn flat round dense icon="arrow_back" @click="goBackk" />
          <q-toolbar-title class="q-ml-md"> Date, Time and Location </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
<q-item-label
        class="q-pt-md q-ml-md text-weight-medium"
        color="grey-5"
        >Date, Time and Location</q-item-label
      >
      <!-- Include your NewQuestionCard component here -->
      <NewQuestionCard :question="dateQuestion" />
      <NewQuestionCard :question="timeQuestion" />
      <NewQuestionCard :question="locationQuestion" />


        <div
        style="
          display: flex;
          justify-content: center;

          position: fixed;
          z-index: 999;
          padding: 10px;
          width: 100%;
          box-sizing: border-box;
          background-color:white;
          bottom: 0px;
        "
      >
        <q-btn
          rounded
          label="Back"
          color="grey-5"
          @click="goBack"
          class="q-mr-md"
          style="width: 169.224px; height: 47px"
        />
        <q-btn
          rounded
          label="Next"
          color="primary"
          @click="goNext"
          style="width: 169.224px; height: 47px"
          to="/collisionDetails"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import NewQuestionCard from "./NewQuestionCard.vue" // Adjust the path accordingly

export default {
  components: {
    NewQuestionCard,
  },
  data() {
    return {
      progress: ref(0.65),
      // Define your questions for Date, Time, and Location
      dateQuestion: {
        label: "Select Date",
        date: true,
      },
      timeQuestion: {
        label: "Select Time",
        time: true,
      },
      locationQuestion: {
        label: "Add Location",
        allLocation: true,
      },
    };
  },
  methods: {

    randomize() {
      this.progress = Math.random();
    },
    goBack() {
      // Implement goBack method if needed
    },
    goNext() {
      // Implement goNext method if needed
    },
    goBackk() {
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
