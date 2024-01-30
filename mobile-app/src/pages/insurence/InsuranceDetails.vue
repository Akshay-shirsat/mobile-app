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
          <q-toolbar-title class="q-ml-md"> InsuranceDetails </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-item-label
        class="q-pt-md q-ml-lg "
        color="grey-5"
        >Accident report overview
      </q-item-label>
      <div class="q-pa-md" fullwidth>
        <q-list bordered class="rounded-borders">
          <q-expansion-item expand-separator label="Insurence Details" style="background-color:white">
            <q-card>
              <q-card-section>
                <div><q-label>1st Driver Information</q-label></div>
                <br />
                <div>
                  <q-label
                    >Automatically record other driver’s insurance information
                    by taking a photo</q-label
                  >
                </div>
                <div>
                  <div class="q-mt-md">
                    <q-label>Driver’s Information</q-label>
                  </div>
                  <div style="display: flex" class="q-pa-sm">
                    <div class="col">
                      <q-label class="q-pa-sm">First Name</q-label>
                      <q-input outlined class="q-pa-sm" />
                    </div>
                    <div class="col">
                      <q-label class="q-pa-sm">Last Name</q-label>
                      <q-input outlined class="q-pa-sm" />
                    </div>
                  </div>
                  <div>
                    <q-label class="q-pa-sm">Street Address</q-label>
                    <q-input outlined class="q-pa-sm" />
                  </div>
                </div>
                <div style="display: flex">
                  <div class="col">
                    <q-label class="q-pa-sm">City</q-label>
                    <q-select outlined dense class="q-pa-sm"></q-select>
                  </div>
                  <div class="col">
                    <q-label class="q-pa-sm">State</q-label>
                    <q-select outlined dense class="q-pa-sm"></q-select>
                  </div>
                </div>
                <div style="display: flex">
                  <div class="col">
                    <q-label class="q-pa-sm" fullwidth>Country</q-label>
                    <q-select outlined dense class="q-pa-sm"></q-select>
                  </div>
                  <div class="col">
                    <q-label class="q-pa-sm">Zip Code</q-label>
                    <q-select outlined dense class="q-pa-sm"></q-select>
                  </div>
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
          bottom: 110px;
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
