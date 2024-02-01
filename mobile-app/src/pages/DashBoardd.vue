<template>
  <q-page>
    <div>
      <q-header elevated>
<q-bar style="background-color:white; height:45px">
          <q-toolbar-title style="margin-left:10px; color:black">
            Good Morning Akshay!
          </q-toolbar-title>
          <dark-mode-toggle />
          <q-btn
            square
            class="outlined-button"
            icon="notifications"
            color="transparent"
            text-color="black"
            flat
          >
          </q-btn>
</q-bar>
      </q-header>
          <div class="flex-container">
            <div class="flex-item ">
              <div class="text-h6 q-ml-md q-mt-sm">Selected Vehicle</div>

              <q-select
                outlined
                dense
                v-model="selectedOption"
                :options="dropdownOptions"
                label="Select an option"
                style="width: 150px; margin-left: 10px"
                class="no-border"
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
          <q-row class="three-columns-section">
            
            <q-col v-for="(icon, index) in icons" :key="index" cols="12" md="4" class="q-flex q-flex-center q-flex-column text-center q-ma-md">
              <router-link :to="{ name: icon.route }">
              <q-icon
                :class="['custom-icon', 'icon' + (index + 1),]"
              ></q-icon>
              </router-link>
              <div class="name">{{ icon.name }}</div>
               
            </q-col>
          </q-row>
          <div class="quick-actions-section">
            <div class="text-h6 q-ml-md">Quick Actions</div>
          </div>
          <div class="q-pa-sm q-gutter-md">
            <q-list bordered padding class="text-left" fullwidth>
              <q-item clickable v-ripple>
                <q-item-section avatar top>
                  <q-avatar
                    square
                    color="grey-4"
                    text-color="white"
                    class="q-ml-sm"
                  >
                    <img src="/assets/horizontal.png" class="q-py-sm q-px-sm" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label lines="1" class="text-left"
                    >Licence Due Date</q-item-label
                  >
                  <q-item-label lines="1" caption class="subtitle text-left"
                    >Expiring in 2 days</q-item-label
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

              <q-item clickable v-ripple>
                <q-item-section avatar top>
                  <q-avatar
                    square
                    color="grey-4"
                    text-color="white"
                    class="q-ml-sm"
                  >
                    <img src="/assets/security.png" class="q-py-sm q-px-sm" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label lines="1" class="text-left"
                    >MOT Due in</q-item-label
                  >
                  <q-item-label lines="1" caption class="subtitle text-left"
                    >5 days</q-item-label
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

              <q-item clickable v-ripple>
                <q-item-section avatar top>
                  <q-avatar
                    square
                    color="grey-4"
                    text-color="white"
                    class="q-ml-sm"
                  >
                    <img
                      src="/assets/certificate.png"
                      class="q-py-sm q-px-sm"
                    />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label lines="1" class="text-left"
                    >Insurance Due</q-item-label
                  >
                  <q-item-label lines="1" caption class="subtitle text-left"
                    >Expiring in 2 days</q-item-label
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
  </q-page>
</template>

<script>
import DarkModeToggle from "./DarkModeToggle.vue";
export default {
  components: {
    DarkModeToggle,
  },
  data() {
    return {
      selectedOption: null,
      dropdownOptions: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
      ],
      icons: [
        { name: "Start Inspection",route: "inspectionCar" },
        { name: "Accident Report",route:"Accident" },
        { name: "Log Miles",route:"logMile" },
        // Add more icons if needed
      ],
    };
  },
  methods: {
    viewDetails() {},
  },
};
</script>

<style scoped>
.no-border .q-field__bottom {
  display: none;
}
.q-toolbar-title {
  font-size: 18px;
}
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
}
.image-right {
  width: 187.041px;
  height: 111.807px;
  flex-shrink: 0;
}
.title-container {
  margin-left: 10px;
}


.quick-actions-section {
  margin-top: 20px;
}

.three-columns-section {
  display: flex;
  justify-content: space-between;
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

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
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
</style>
