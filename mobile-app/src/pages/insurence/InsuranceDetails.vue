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
          <q-toolbar-title class="q-ml-md"> InsuranceDetails </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-item-label class="q-pt-md q-ml-lg" color="grey-5"
        >Accident report overview
      </q-item-label>
      <div style="padding-bottom: 85px">
        <div class="q-pa-md" fullwidth>
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              v-model="expanded"
              expand-separator
              class="text-weight-medium"
              label="Insurence Details"
              style="background-color: white"
            >
              <q-card>
                <q-card-section>
                  <div><q-label>1st Driver Information</q-label></div>
                  <div style="color: #848484">
                    <q-label
                      >Automatically record other driver’s insurance information
                      by taking a photo</q-label
                    >
                  </div>
                  <q-row class="three-columns-section q-pa-sm q-mx-md">
                    <q-col
                      v-for="(icon, index) in icons"
                      :key="index"
                      cols="8"
                      md="2"
                      class="q-flex q-flex-center q-flex-column text-center"
                      size="4rem"
                    >
                      <div class="border-rounded quickActionDisc">
                        <router-link :to="{ name: icon.route }">
                          <q-icon
                            :class="['custom-icon', 'icon' + (index + 1)]"
                          ></q-icon>
                        </router-link>
                      </div>

                      <div class="name" style="color: #848484">
                        {{ icon.name }}
                      </div>
                    </q-col>
                  </q-row>

                  <div>
                    <div class="q-mt-md">
                      <q-label>Driver’s Information</q-label>
                    </div>
                    <div style="display: flex" class="q-pa-sm">
                      <div class="col">
                        <q-label class="q-pa-sm" style="color: #848484"
                          >First Name</q-label
                        >
                        <div class="q-pa-sm" style="color: #848484">
                          <q-input
                            dense
                            v-model="text"
                            label="type here"
                            outlined
                            fullwidth
                          />
                        </div>
                      </div>
                      <div class="col">
                        <q-label class="q-pa-sm" style="color: #848484"
                          >Last Name</q-label
                        >
                        <div class="q-pa-sm" style="color: #848484">
                          <q-input
                            dense
                            v-model="text"
                            label="type here"
                            outlined
                            fullwidth
                          />
                        </div>
                      </div>
                    </div>
                    <div class="q-pa-sm" style="color: #848484">
                      <q-label class="q-pa-sm">Street Address</q-label>
                      <div class="q-pa-sm" style="color: #848484">
                        <q-input
                          dense
                          v-model="text"
                          label="type here"
                          outlined
                          fullwidth
                        />
                      </div>
                    </div>
                  </div>
                  <div style="display: flex">
                    <div class="col">
                      <div class="q-pa-sm" style="color: #848484">
                        <q-label class="q-pa-sm" fullwidth>City</q-label>

                        <q-select outlined dense class="q-pa-sm"></q-select>
                      </div>
                    </div>
                    <div class="col">
                      <div class="q-pa-sm" style="color: #848484">
                        <q-label class="q-pa-sm">State</q-label>
                        <q-select outlined dense class="q-pa-sm"></q-select>
                      </div>
                    </div>
                  </div>
                  <div style="display: flex" class="q-pa-sm">
                    <div class="col">
                      <q-label class="q-pa-sm" style="color: #848484"
                        >Country</q-label
                      >
                      <div class="q-pa-sm" style="color: #848484">
                        <q-input
                          dense
                          v-model="text"
                          label="type here"
                          outlined
                          fullwidth
                        />
                      </div>
                    </div>
                    <div class="col">
                      <q-label class="q-pa-sm" style="color: #848484"
                        >zip code</q-label
                      >
                      <div class="q-pa-sm" style="color: #848484">
                        <q-input
                          dense
                          v-model="text"
                          label="type here"
                          outlined
                          fullwidth
                        />
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
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
          style="width: 101.5px; height: 47px"
        />
        <q-btn
          no-caps
          rounded
          label="submit"
          color="info"
          @click="goNext"
          style="width: 233.65px; height: 47px"
          to="/AccidenntReport"
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
      expanded: ref(true),
      progress: 1,
      icons: [
        {
          name: "Driver’s License",
          route: "",
        },
        {
          name: "Insurance Card ",
          route: "",
        },
      ],

      questions: [
        {
          label: "Any Comments? ",
        },
        {
          label: "Add Location",
          sections: [
            {
              type: "text",
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
.border-rounded {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}
.three-columns-section {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  gap: 65px;
}
</style>
