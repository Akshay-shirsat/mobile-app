<template>
  <q-page>
    <div v-if="flag">

      <q-header elevated class="bg-white text-primary">
        <q-bar class="q-py-lg bg-white text-primary">
          <q-toolbar-title class="q-ml-sm" style="color: black">
            Accident Report
          </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>

      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <q-item-label class="q-pa-md q-ml-sm text-weight-medium" color="grey-5"
          >Continue Where you left</q-item-label
        >
      </div>
      <div
        class="rounded-box q-pt-sm q-pa-md q-gutter-sm"
        v-for="(item, index) in completedReports"
        :key="index"
      >
        <q-list
          rounded
          padding
          dense
          class="rounded-borders bg-light-green-2"
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
            :src="item.imageSrc"
            :alt="item.imageAlt"
            :width="item.imageWidth"
            :height="item.imageHeight"
          />
          <q-item clickable v-ripple style="flex-grow: 1">
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium"
                >{{ item.status }}</q-item-label
              >
              <q-item-label class="text-left text-bold" lines="1"
                >{{ item.vehicle }}
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
                color="grey-4"
                size="sm"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div
        style="
          display: flex;
          justify-content: center;
          bottom: 110px;
          position: fixed;
          z-index: 999;
          width: 100%;
          box-sizing: border-box;
        "
      >
        <div style="display: flex; gap: 10px">
          <q-btn
            rounded
            label="Continue"
            color="primary"
            @click="goNext"
            style="width: 357px; height: 49px"
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
    fetchCompletedReports() {
      const dynamicData = [
        {
          status: "Injuries",
          imageSrc: "/assets/Rectangle_177.png",
          imageAlt: "Image description",
          imageWidth: "6px",
          imageHeight: "55px",
        },
        {
          status: "Date, Time and Location",
          imageSrc: "/assets/Rectangle_177.png",
          imageAlt: "Image description",
          imageWidth: "6px",
          imageHeight: "55px",
        },
        {
          status: "Collision Details ",
          imageSrc: "/assets/Rectangle_177.png",
          imageAlt: "Image description",
          imageWidth: "6px",
          imageHeight: "55px",
        },
         {
          status: "Insurance Details ",
          imageSrc: "/assets/Rectangle_176.png",
          imageAlt: "Image description",
          imageWidth: "6px",
          imageHeight: "55px",
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
  margin-left: 10px;
  margin-top: 40px;
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

.rounded-box {
  border-radius: 12px;
  overflow: hidden;
}

.rounded-borders {
  border-radius: 12px;
  overflow: hidden;
}

.q-pa-md.items-start {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
