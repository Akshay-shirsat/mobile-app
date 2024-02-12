<template>
  <q-page>
    <div v-if="flag">
      <q-header class="bg-white text-dark">
        <q-bar class="q-py-lg bg-white">
          <q-toolbar-title class="q-ml-md"> Accident Report </q-toolbar-title>

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
        <div class="flex-item image-container">
          <img src="~assets/image1.png" alt="Image"  style="max-width: 100%; height: auto;"/>
        </div>
      </div>
      <q-separator class="q-mt-md" />

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
          <q-btn-dropdown
            size="12px"
            flat
            no-caps
            label="Filter"
            icon="filter_list"
            color="primary"
            class="removearrow"
          >
            <q-list>
              <q-item clickable v-close-popup >
                <q-item-section>
                  <q-item-label>Draft</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup >
                <q-item-section>
                  <q-item-label>Completed</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
<div style="padding-bottom:85px;">
      <div
        class="rounded-box q-pt-sm q-pa-md q-gutter-sm"
        v-for="(item, index) in completedReports"
        :key="index"
      >
        <q-list
          bordered
          padding
          dense
          class="rounded-borders bg-negative"
          style="
            max-width: 768px;
            display: flex;
            align-items: center;
            height: 66.281px;
            margin-top: -10px;
          "
        >
          <div class="leftBorderInfo"></div>
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
                color="#367CFF33"
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
          class="rounded-borders bg-negative"
          style="
            max-width: 768px;
            display: flex;
            align-items: center;
            height: 66.281px;
            margin-top: -10px;
          "
        >
          <div class="leftBorderInfo"></div>
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
                color="#367CFF33"
                size="sm"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div
        class="rounded-box q-pa-md q-gutter-sm"
        v-for="(item, index) in completedReports"
        :key="index"
      >
        <q-list
          fullwidth
          bordered
          padding
          dense
          class="rounded-borders bg-positive"
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
              <q-item-label class="text-bold text-left rounded-list-subtitle">{{
                item.status
              }}</q-item-label>
              <q-item-label class="text-left text-weight-medium" lines="1"
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
                color="#53AA0F33; "
                size="sm"


              />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
</div>




      <div
        style="
          display: flex;
          justify-content: right;
          bottom: 90px;
          position: fixed;
          z-index: 999;
          width: 100%;
          box-sizing: border-box;
        "
      >
        <q-btn
          round
          label="+"
          color="primary"
          @click="goNext"
          style="width: 63px; height: 63px; flex-shrink: 0"
          class="q-mr-lg"
          to="/AcciReportOver"
        />
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
    }, 1000);
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
    fetchCompletedReports() {
      const dynamicData = [
        {
          status2: "Drafts",
          status: "Completed",
          imageSrc: "/assets/Rectangle_175.png",
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
.flex-container {
  display: flex;
  justify-content: space-between;
}
.flex-item {
  flex: 1;
  margin-right: 20px;
  margin-top: 10px;
}


.btngroup {
  width: 200px;
}

.rounded-list-subtitle {
  color: #53aa0f;
}
.rounded-list-subtitle2 {
  color: #367cff;
}
.rounded-box {
  border-radius: 12px;
  overflow: hidden;
}

.rounded-borders {
  border-radius: 12px;
  overflow: hidden;
  margin-top: -10px;
}

.q-pa-md.items-start {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
