<template>
  <q-page>
    <div v-if="flag">
      <q-header elevated class="bg-white text-primary">
        <q-bar class="q-py-lg bg-white text-primary">
          <q-toolbar-title class="q-ml-md"> Inspection </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
   <div class="flex-container">
            <div class="flex-item ">
                <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="dark"
          >Selected Vehicle
 </q-item-label
        >

              <q-select
                outlined
                dense
                v-model="selectedOption"
                :options="dropdownOptions"
                label="Select an option"
                style="width: 162px;height:35px; "
                class="q-ml-md  "
              ></q-select>

              <q-btn
                label="View Details"
                color="primary"
                no-caps
                rounded
                @click="viewDetails"
                class="q-mt-lg q-ml-md"
                style="width:137px;"
              />
            </div>
 <div class="flex-item image-container">
              <img src="/assets/image1.png" alt="Image" class="image-right"/>
            </div>
          </div>
       <div class="q-pa-md q-mt-sm items-start">
        <q-btn-group rounded style="justify-content: center">
          <q-btn
            color="grey-4"
            rounded
            text-color="black"
            no-caps
            label="Pending"
            class="btngroup"
          />
          <q-btn
            color="white"
            rounded
            text-color="black"
            no-caps
            label="Completed"
            class="btngroup"
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
          >Draft and Pending reports</q-item-label
        >
        <div class="q-pa-md">
          <q-btn-dropdown size="12px" label="Filter" flat>
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Draft</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
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
        fullwidth
          rounded
          padding
          dense
          class="rounded-borders bg-grey-2"
          style="

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
                >{{ item.vehicle }},
                <span class="text-weight-light"
                  >{{
                  item.dueDate
                }}</span
                ></q-item-label
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
    status: "Draft",
    imageSrc: "/assets/Rectangle_176.png",
    imageAlt: "Image description",
    imageWidth: "6px",
    imageHeight: "55px",
    vehicle: "Sienna",
    dueDate: "due by-dd.mm.yyyy",
  },
  {
    status: "Draft",
    imageSrc: "/assets/Rectangle_176.png",
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

.image-right {
  width: 187.041px;
  height: 111.807px;
  flex-shrink: 0;
}
.title-container {
  margin-left: 10px;
}
.top-section {
  margin-top: -35px;
}

.quick-actions-section {
  margin-top: 20px;
}

.column {
  flex: 1;
  text-align: center;
}

.icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.name {
  color: #000;
  text-align: center;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
}
.custom-icon {
  width: 24px;
  height: 24px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: 8px;
}

.icon1 {
  background-image: url("/assets/calendar--tools.png");
}

.icon2 {
  background-image: url("/assets/vector.png");
}

.icon3 {
  background-image: url("/assets/vectorr.png");
}
.row-structure {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.details {
  flex-grow: 1;
  margin-left: 10px;
}

q-btn {
  margin-left: 10px;
}
.icon11 {
  background-image: url("/assets/horizontal.png");
}

.icon12 {
  background-image: url("/assets/security.png");
}

.icon13 {
  background-image: url("/assets/certificate.png");
}
.subtitle {
  color: red;
}
.q-ml-xl {
  margin-left: 1.5rem;
}
.btngroup {
  width: 170px;
}
.rounded-list-container {
  border-radius: 12px;
  border: 2px solid red;
  overflow: hidden;
}

.rounded-list-title {
  font-weight: bold;
}

.rounded-list-subtitle {
  color: red;
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

.q-pt-xs {
  padding-top: 2px;
}
.q-pa-md.items-start {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
