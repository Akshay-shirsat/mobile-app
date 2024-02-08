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
      <q-item-label class="q-pt-md q-ml-md text-weight-medium" color="grey-5"
        >Comments</q-item-label
      >
      <QuestionCard
        v-for="(question, index) in questions"
        :key="index"
        :question="question"
      />
      <div class="q-pa-md" fullwidth>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            v-model="expanded"
            expand-separator
            label="Add Location"
            style="background-color: white"
            class="text-weight-medium q-pa-sm"

          >
          <q-separator  inset/>
            <q-card>
              <q-card-section>
                <q-item-section icon>
                  <q-item-label
                    class="text-weight-medium text-caption subline"

                    >Address</q-item-label
                  >
                </q-item-section>
                <div class="q-pt-md q-mr-md" fullwidth>
                  <q-input
                    dense
                    type="input"
                    outlined
                    color="grey"
                    style="width: 100%"
                    v-model="notes"
                  />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
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
          icon="arrow_back"
          label="Back"
          color="grey-5"
          text-color="black"
          @click="goBack"
          class="q-ma-sm"
          style="width: 101.501px; height: 49px"
        />
        <q-btn
          no-caps
          rounded
          label="submit checks"
          color="info"
          @click="goNext"
          style="width: 233.653px; height: 49px"
          to="/inspectionComp"
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
      expanded: ref(true),
      progress: 1,
      questions: [
        {
          label: "Any Comments? ",
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
