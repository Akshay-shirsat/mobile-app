<template>
  <q-page>
    <div v-if="flag">
      <q-header  class="bg-white">
        <q-bar class="q-py-lg bg-white">
          <q-toolbar-title class="q-ml-sm text-black">
            Inspection
          </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <q-separator />
      <div class="flex-container">
        <div class="flex-item">
          <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="dark"
            >Selected Vehicle
          </q-item-label>

          <q-select
            outlined
            dense
            v-model="selectedOption"
            :options="dropdownOptions"
            label="Select an option"
            style="width: 162px; height: 35px"
            class="q-ml-md"
          ></q-select>

          <q-btn
            label="View Details"
            color="primary"
            no-caps
            rounded
            @click="viewDetails"
            class="q-mt-lg q-ml-md"
            style="width: 137px"
          />
        </div>
        <div class="flex-item image-container imageCenter">
          <img src="~assets/image1.png" alt="Image"  style="max-width: 100%; height: auto;"/>
        </div>
      </div>
      <q-separator class="q-mt-md" />
      <div class="q-pa-md q-mt-sm items-start">
        <q-btn-group
          rounded
          style="display: flex; justify-content: center; width: 100%"
        >
          <q-btn
            color="white"
            rounded
            text-color="black"
            no-caps
            label="Pending"
            style="width: 100%"
            to="/inspectionCar"
          />
          <q-btn
            color="grey-4"
            rounded
            text-color="black"
            no-caps
            label="Completed"
            style="width: 100%"
            to="/inspectionComp"
          />
        </q-btn-group>
      </div>
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="grey-5"
          >Completed and Pending reports</q-item-label
        >
      </div>
      <div style="padding-bottom:85px;">
      <div
        class="rounded-box q-pt-sm q-pa-md q-gutter-sm"
        v-for="(item, index) in completedReports"
        :key="index"
      >
        <q-list
          fullwidth
          rounded
          padding
          dense
          class="rounded-borders bg-light-green-1"
          style="
            display: flex;
            align-items: center;
            height: 66.281px;
            margin-top: -10px;
          "
        >
          <div class="leftBorderSuccess"></div>
          <q-item clickable v-ripple style="flex-grow: 1">
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium"
                >{{ item.status }}</q-item-label
              >
              <q-item-label class="text-left text-bold" lines="1"
                >{{ item.vehicle }},
                <span class="text-weight-light">{{
                  item.dueDate
                }}</span></q-item-label
              >
            </q-item-section>

            <q-item-section side>
              <q-btn
                class="q-mr-sm"
                text-color="black"
                round
                icon="keyboard_arrow_right"
                color="light-green-2"
                size="sm"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      </div>
    </div>
    <div v-else>
      <SkelAccompleted />
    </div>
  </q-page>
</template>

<script>
import SkelAccompleted from "../../components/skeleton/SkelAccompleted.vue";
export default {
  created() {
    setTimeout(() => {
      this.flag = true;
      this.fetchCompletedReports();
    }, 2000);
  },
  data() {
    return {
      selectedOption: null,
      dropdownOptions: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
      ],
      flag: false,
    };
  },
  components: {
    SkelAccompleted,
  },
  methods: {
    viewDetails() {},
    fetchCompletedReports() {
      const dynamicData = [
        {
          status: "Completed",

          imageAlt: "Image description",
          imageWidth: "6px",
          imageHeight: "55px",
          vehicle: "Sienna",
          dueDate: "due by-dd.mm.yyyy",
        },
        {
          status: "Completed",

          imageAlt: "Image description",
          imageWidth: "6px",
          imageHeight: "55px",
          vehicle: "BMW",
          dueDate: "due by-dd.mm.yyyy",
        },
      ];

      this.completedReports = dynamicData;
    },
  },
};
</script>

<style scoped>
.text-h6 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}



.btngroup {
  width: 170px;
}

.rounded-list-subtitle2 {
  color: #53aa0f;
}
.rounded-box {
  border-radius: 12px;
  overflow: hidden;
}

.rounded-borders {
  border-radius: 10px;
  overflow: hidden;
  margin-top: -10px;
}

.q-pa-md.items-start {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
