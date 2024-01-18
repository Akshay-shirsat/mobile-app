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
            Interior Check
          </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-item-label
        class="q-pt-md q-ml-md text-weight-medium text-h6"
        color="grey-5"
        >Questions</q-item-label
      >
      <q-card class="q-ma-md">
        <div class="q-pa-sm" style="max-width: 650px">
          <q-expansion-item
            v-model="expanded"
            label="Are all seatbelts present, securely fixed and free from cuts or damage? "
            class="text-subtitle2"
          >
            <q-separator />

            <q-card>
              <q-card-section class="q-pt-md q-pb-md">
                <div class="centered-container">
                  <q-btn
                    outline
                    label="Yes"
                    class="q-mr-md"
                    style="width: 78px"
                  />
                  <q-btn
                    outline
                    label="No"
                    class="q-mr-md"
                    style="width: 78px"
                  />
                  <q-btn outline label="N/A" style="width: 78px" />
                </div>
                <q-item-label
                  class="q-pt-md text-weight-medium text-caption q-ml-md"
                  color="blue-grey-6"
                  >Upload Photos</q-item-label
                >
                <div class="centered-upload">
                  <q-btn
                    text-color="black"
                    label="+ Upload"
                    @click="openFileDialog"
                    style="
                      width: 324px;
                      background-color: #d9d9d9;
                      margin-top: 10px;
                    "
                  />
                  <input
                    type="file"
                    ref="fileInput"
                    style="display: none"
                    @change="handleFileUpload"
                  />
                </div>
                <q-item-label
                  class="q-pt-md text-weight-medium text-caption q-ml-md"
                  color="blue-grey-6"
                  >Notes</q-item-label
                >
                <div class="q-pa-md" style="max-width: 300px">
                  <q-input
                    dense
                    type="textarea"
                    label="type here"
                    outlined
                    style="width: 324px"
                  />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          </div>
          </q-card>
          <q-card class="q-ma-md">
        <div class="q-pa-sm" style="max-width: 650px">
          <q-expansion-item
            v-model="expanded"
            label="Are there any dashboard warning lights illuminuted including: EML, OIL, ABS, TYRES, BRAKES, ETC?"
            class="text-subtitle2"
          >
            <q-separator />

            <q-card>
              <q-card-section class="q-pt-md q-pb-md">
                <div class="centered-container">
                  <q-btn
                    outline
                    label="Yes"
                    class="q-mr-md"
                    style="width: 78px"
                  />
                  <q-btn
                    outline
                    label="No"
                    class="q-mr-md"
                    style="width: 78px"
                  />
                  <q-btn outline label="N/A" style="width: 78px" />
                </div>
                <q-item-label
                  class="q-pt-md text-weight-medium text-caption q-ml-md"
                  color="blue-grey-6"
                  >Upload Photos</q-item-label
                >
                <div class="centered-upload">
                  <q-btn
                    text-color="black"
                    label="+ Upload"
                    @click="openFileDialog"
                    style="
                      width: 324px;
                      background-color: #d9d9d9;
                      margin-top: 10px;
                    "
                  />
                  <input
                    type="file"
                    ref="fileInput"
                    style="display: none"
                    @change="handleFileUpload"
                  />
                </div>
                <q-item-label
                  class="q-pt-md text-weight-medium text-caption q-ml-md"
                  color="blue-grey-6"
                  >Notes</q-item-label
                >
                <div class="q-pa-md" style="max-width: 300px">
                  <q-input
                    dense
                    type="textarea"
                    label="type here"
                    outlined
                    style="width: 324px"
                  />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          </div>
          </q-card>
          <q-card class="q-ma-md">
        <div class="q-pa-sm" style="max-width: 650px">
          <q-expansion-item
            v-model="expanded"
            label="Does the horn operate correctly?"
            class="text-subtitle2"
          >
            <q-separator />

            <q-card>
              <q-card-section class="q-pt-md q-pb-md">
                <div class="centered-container">
                  <q-btn
                    outline
                    label="Yes"
                    class="q-mr-md"
                    style="width: 78px"
                  />
                  <q-btn
                    outline
                    label="No"
                    class="q-mr-md"
                    style="width: 78px"
                  />
                  <q-btn outline label="N/A" style="width: 78px" />
                </div>
                <q-item-label
                  class="q-pt-md text-weight-medium text-caption q-ml-md"
                  color="blue-grey-6"
                  >Upload Photos</q-item-label
                >
                <div class="centered-upload">
                  <q-btn
                    text-color="black"
                    label="+ Upload"
                    @click="openFileDialog"
                    style="
                      width: 324px;
                      background-color: #d9d9d9;
                      margin-top: 10px;
                    "
                  />
                  <input
                    type="file"
                    ref="fileInput"
                    style="display: none"
                    @change="handleFileUpload"
                  />
                </div>
                <q-item-label
                  class="q-pt-md text-weight-medium text-caption q-ml-md"
                  color="blue-grey-6"
                  >Notes</q-item-label
                >
                <div class="q-pa-md" style="max-width: 300px">
                  <q-input
                    dense
                    type="textarea"
                    label="type here"
                    outlined
                    style="width: 324px"
                  />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          </div>
          </q-card>
          <q-card class="q-ma-md">
        <div class="q-pa-sm" style="max-width: 650px">
          <q-expansion-item
            v-model="expanded"
            label="Are all driving mirrors free from damage or cracks securely fitted and aligned correctly?"
            class="text-subtitle2"
          >
            <q-separator />

            <q-card>
              <q-card-section class="q-pt-md q-pb-md">
                <div class="centered-container">
                  <q-btn
                    outline
                    label="Yes"
                    class="q-mr-md"
                    style="width: 78px"
                  />
                  <q-btn
                    outline
                    label="No"
                    class="q-mr-md"
                    style="width: 78px"
                  />
                  <q-btn outline label="N/A" style="width: 78px" />
                </div>
                <q-item-label
                  class="q-pt-md text-weight-medium text-caption q-ml-md"
                  color="blue-grey-6"
                  >Upload Photos</q-item-label
                >
                <div class="centered-upload">
                  <q-btn
                    text-color="black"
                    label="+ Upload"
                    @click="openFileDialog"
                    style="
                      width: 324px;
                      background-color: #d9d9d9;
                      margin-top: 10px;
                    "
                  />
                  <input
                    type="file"
                    ref="fileInput"
                    style="display: none"
                    @change="handleFileUpload"
                  />
                </div>
                <q-item-label
                  class="q-pt-md text-weight-medium text-caption q-ml-md"
                  color="blue-grey-6"
                  >Notes</q-item-label
                >
                <div class="q-pa-md" style="max-width: 300px">
                  <q-input
                    dense
                    type="textarea"
                    label="type here"
                    outlined
                    style="width: 324px"
                  />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
           </div>
          </q-card>
        <div  style="display: flex; justify-content: center;">
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

      console.log("Go back clicked");
    },
    goNext() {
      console.log("Go next clicked");
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
