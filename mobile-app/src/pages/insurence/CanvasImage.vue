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
          <q-toolbar-title class="q-ml-md"> Collision Details </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-item-label class="q-pt-md q-ml-md text-weight-medium" color="grey-5"
        >Accident report overview
      </q-item-label>
      <div style="padding-bottom: 85px">
        <div class="q-pa-md" fullwidth>
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              v-model="expanded"
              expand-separator
              label="Collision Details "
              style="background-color: white"
              class="text-weight-medium"
            >
              <q-card>
                <div class="centered-container">
                  <q-card-section>
                    <div>
                      <q-label style="color: #474747"
                        >1. Is your vehicle driveable?</q-label
                      >
                    </div>

                    <q-btn
                      flat
                      no-caps
                      style="
                        width: 77.79px;
                        height: 23px;
                        border: 1px solid rgb(190, 176, 176);
                      "
                      class="q-ma-sm"
                      label="Yes"
                    />
                    <q-btn
                      flat
                      no-caps
                      style="
                        width: 77.79px;
                        height: 23px;
                        border: 1px solid rgb(190, 176, 176);
                      "
                      class="q-ma-sm"
                      label="No"
                    />
                    <div>
                      <q-label style="color: #474747"
                        >2. No. Of vehicle Involved
                      </q-label>
                    </div>
                    <div
                      class="square-box q-mb-sm q-ml-sm q-mt-sm"
                      style="width: 156px; height: 42px"
                    >
                      <div
                        class="q-pa-md q-gutter-md q-space-between"
                        style="display: flex; align-items: center"
                      >
                        <q-btn
                          @click="decrement"
                          class="bg-primary"
                          rounded
                          dense
                          flat
                          icon="remove"
                        ></q-btn>
                        <div class="count">{{ count }}</div>
                        <q-btn
                          @click="increment"
                          class="bg-primary"
                          rounded
                          dense
                          flat
                          icon="add"
                        ></q-btn>
                      </div>
                    </div>
                    <q-label class="q-mt-md" style="color: #474747"
                      >Tap on the image below to indicate where your vehicle has
                      been damaged. You can select multiple area</q-label
                    >
                    <div class="centered-image">
                      <div
                        style="position: relative; width: 294px; height: 149px"
                      >
                        <img
                          @click="markDamage($event)"
                          src="~assets/image38.png"
                          alt="Your Vehicle"
                          style="width: 294px; height: 149px"
                        />
                        <div
                          v-for="(point, index) in damagedPoints"
                          :key="index"
                          :style="{
                            position: 'absolute',
                            left: point.x + 'px',
                            top: point.y + 'px',
                            width: '15px',
                            height: '15px',
                            background: '#367CFF',
                            borderRadius: '50%',
                          }"
                        ></div>
                      </div>
                    </div>
                  </q-card-section>
                </div>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
        <QuestionCard
          v-for="(question, index) in questions"
          :key="index"
          :question="question"
        />
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
    <div v-else>
      <SkelQuestioncard />
    </div>
  </q-page>
</template>
<script>
import QuestionCard from "../form/QuestionCard.vue";
import SkelQuestioncard from "../../components/skeleton/SkelQuestioncard.vue";
import { ref } from "vue";

export default {
  components: {
    QuestionCard,
    SkelQuestioncard,
  },
  created() {
    setTimeout(() => {
      this.flag = true;
      this.fetchCompletedReports();
    }, 2000);
  },
  data() {
    return {
      damagedPoints: [],
     
      flag: false,
      progress: 0.66,
      count: 0,
      expanded: ref(true),
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
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
    markDamage(event) {
      const rect = event.target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const existingIndex = this.damagedPoints.findIndex((point) => {
        return point.x === x && point.y === y;
      });

      if (existingIndex !== -1) {
        this.damagedPoints.splice(existingIndex, 1);
      } else {
        this.damagedPoints.push({ x, y });
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
