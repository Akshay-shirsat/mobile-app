<template>
  <q-page>
    <div v-if="flag">
      <q-header elevated class="bg-white text-primary">
        <q-bar class="q-py-lg bg-white text-primary">
          <q-btn flat round dense icon="arrow_back" @click="goBack" />
          <q-toolbar-title class="q-ml-md"> Accident Report  </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <div class="flex-container">
        <div class="flex-item top-section">
          <div class="text-h6 q-ml-md q-mt-xl">Selected Vehicle</div>

          <q-select
            outlined
            dense
            v-model="selectedOption"
            :options="dropdownOptions"
            label="Select an option"
            style="width: 150px; margin-left: 10px"
          ></q-select>

          <q-btn
            label="View Details"
            color="primary"
            no-caps
            rounded
            @click="viewDetails"
            class="q-mt-lg q-ml-md"
          />
        </div>

        <div class="flex-item">
          <img src="/assets/image1.png" alt="Image" class="image-right" />
        </div>
      </div>

      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="grey-5"
          >Reports</q-item-label
        >
 <div class="q-pa-md">
          <q-btn-dropdown size="12px" flat  no-caps label="Filter" icon="filter_list">
            <q-list>
              <q-item clickable v-close-popup to="/inspectionDraft" >
                <q-item-section>
                  <q-item-label >Draft</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup to="/inspectionComp">
                <q-item-section>
                  <q-item-label>Completed</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
      <div
        class="rounded-box q-pt-sm q-pa-md q-gutter-sm"
        v-for="(item, index) in completedReports"
        :key="index"
      >
        <q-list
          bordered
          padding
          dense
          class="rounded-borders bg-light-green-1"
          style="
            max-width: 768px;
            display: flex;
            align-items: center;
            height: 66.281px;
          "
        >
          <q-img
            class="q-mr-sm"
            :src="item.imageSrc"
            :alt="item.imageAlt"
            :width="item.imageWidth"
            :height="item.imageHeight"
          />
          <q-item clickable v-ripple style="flex-grow: 1">
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle text-left text-weight-medium"
                >{{ item.status }}</q-item-label
              >
              <q-item-label class="text-left text-bold" lines="1"
                >{{ item.vehicle }},<span class="text-weight-light">{{
                  item.dueDate
                }}</span></q-item-label
              >
            </q-item-section>

            <q-item-section side>
              <q-btn
                class="q-mr-sm bg-light-green-2"
                text-color="black"
                round
                icon="keyboard_arrow_right"

                size="sm"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div
        class="rounded-box q-pt-sm q-pa-md q-gutter-sm"
        v-for="(item, index) in completedReports"
        :key="index"
      >
        <q-list
          bordered
          padding
          dense
          class="rounded-borders bg-light-green-1"
          style="
            max-width: 768px;
            display: flex;
            align-items: center;
            height: 66.281px;
            margin-top: -10px;
          "
        >
          <q-img
            class="q-mr-sm"
            :src="item.imageSrc2"
            :alt="item.imageAlt"
            :width="item.imageWidth"
            :height="item.imageHeight"
          />
          <q-item clickable v-ripple style="flex-grow: 1">
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium"
                >{{ item.status2 }}</q-item-label
              >
              <q-item-label class="text-left text-bold" lines="1"
                >{{ item.vehicle }},<span class="text-weight-light">{{
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
                color="grey-4"
                size="sm"
              />
            </q-item-section>
          </q-item>
        </q-list>
              <div
        style="
          display: flex;
          justify-content: right;
          bottom: 110px;
          position: fixed;
          z-index: 999;
          padding: 10px;
          width: 100%;
          box-sizing: border-box;

        "
      >

        <q-btn
          round
          label="+"
          color="primary"
          @click="goNext"
          style="width: 63px; height: 63px; flex-shrink: 0;"
          class="q-mr-lg"
        />
      </div>
      </div>

    </div>
    <div v-else>
      <SkelDraft />
    </div>
  </q-page>
</template>

<script>
import SkelDraft from "../../components/skeleton/SkelDrafts.vue";
export default {
  created() {
    setTimeout(() => {
      this.flag = true;
      this.fetchCompletedReports();
    }, 3000);
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
    SkelDraft,
  },
  methods: {
    viewDetails() {},
    goBack() {
this.$router.go(-1);
  },
    fetchCompletedReports() {
      const dynamicData = [
        {
          status2: "Drafts",
          status: "Complete",
          imageSrc: "/assets/Rectangle_177.png",
          imageSrc2: "/assets/Rectangle_176.png",
          imageAlt: "Image description",
          imageWidth: "6px",
          imageHeight: "55px",
          vehicle: "Sienna",
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
.flex-container {
  display: flex;
  justify-content: space-between;
}
.flex-item {
  flex: 1;
  margin-right: 20px;
  margin-top: 40px;
  margin-left: 20px;
}
.image-right {
  width: 187.041px;
  height: 111.807px;
  flex-shrink: 0;
}

.top-section {
  margin-top: -35px;
}

.btngroup {
  width: 170px;
}

.rounded-list-subtitle {
  color: #53AA0F;
}
.rounded-list-subtitle2 {
  color: rgb(72, 43, 150);
}
.rounded-box {
  border-radius: 12px;
  overflow: hidden;
}

.rounded-borders {
  border-radius: 12px;
  overflow: hidden;
}

.q-pt-sm {
  padding-top: 15px;
}

.q-pa-md.items-start {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
