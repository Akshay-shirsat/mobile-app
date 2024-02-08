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
          <q-toolbar-title class="q-ml-md">
            Odometer
          </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-item-label class="q-pt-md q-ml-md text-weight-medium" color="grey-5">
        Odometer
      </q-item-label>
      <div class="q-pa-md" fullwidth>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
             v-model="expanded"
            expand-separator
            class="text-weight-medium"
            label="Please enter current mileage of vehicle"
            style="background-color: white"
          >
        <q-separator inset />
            <q-card>
              <q-card-section>
                <div
                  class="q-pa-md"
                  style="display: flex; justify-content: center; gap: 30px "
                >
                  <q-select
                  fullwidth
                    outlined
                    dense
                    v-model="selectedOption"
                    :options="dropdownOptions"
                    label="Miles"
                    style="width: 150px; "
                  ></q-select>

                  <q-select
                    fullwidth
                    outlined
                    dense
                    v-model="selectedOption"
                    :options="dropdownOptions"
                    label="100"
                    style="width: 150px; "
                  ></q-select>
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
          label="Back"
          color="grey-5"
          @click="goBack"
          class="q-ma-sm"
          text-color="black"
          style="width: 200.224px; height: 49px"
        />
        <q-btn
          no-caps
          rounded
          label="Next"
          color="primary"
          @click="goNext"
          style="width: 200.224px; height: 49px"
          to="/CommentsD"
          class="q-ma-sm"
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
      progress: 0.77,
      expanded: ref(true)
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
