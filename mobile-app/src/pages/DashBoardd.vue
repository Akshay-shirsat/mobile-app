<template>
  <q-page>
    <div>
      <q-header class="text-primary">
        <q-bar style="background-color: primary; height: 45px">
          <q-toolbar-title style="margin-left: 3px; color: white">
            Good Morning Dan!
          </q-toolbar-title>

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
          <img src="/assets/image1.png" alt="Image" class="image-right" />
        </div>
      </div>

      <q-item-label class="q-pa-md q-ml-sm text-weight-medium" color="grey-5"
        >Quick Actions</q-item-label
      >
      <q-row class="three-columns-section q-pa-sm q-mx-md">
        <q-col
          v-for="(icon, index) in icons"
          :key="index"
          cols="12"
          md="4"
          class=" q-flex q-flex-center q-flex-column text-center border-rounded "
         size="4rem"
        >
          <router-link :to="{ name: icon.route }">
            <q-icon :class="['custom-icon', 'icon' + (index + 1)]"></q-icon>
          </router-link>
          <div class="name">{{ icon.name }}</div>
        </q-col>
      </q-row>
      <q-item-label class="q-pa-sm q-ml-md text-weight-medium"
        >Need Your Attention</q-item-label
      >

        <div class="q-pa-sm q-gutter-md ">
          <q-list fullwidth class="bg-grey-2 " style="height:auto" >
            <q-item clickable v-ripple>
              <q-item-section avatar top class="q-pa-none" >
                <q-avatar rounded color="grey-4" size="68px" text-color="white" >
                  <img src="/assets/horizontal.png" class="q-py-sm q-px-sm" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1" class="text-left q-ml-sm"
                  >Licence Due Date</q-item-label
                >
                <q-item-label lines="1" caption class="subtitle text-left q-ml-sm"
                  >Expiring in 2 days</q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <q-btn
                  text-color="black"
                  round
                  icon="keyboard_arrow_right"
                  color="grey-4"
                  size="sm"
                />
              </q-item-section>
            </q-item>
          </q-list>
           <q-list fullwidth class="bg-grey-2 " style="height:auto" >
            <q-item clickable v-ripple>
              <q-item-section avatar top class="q-pa-none">
                <q-avatar rounded color="grey-4" size="68px" text-color="white">
                  <img src="/assets/security.png" class="q-py-sm q-px-sm" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1" class="text-left q-ml-sm"
                  >MOT Due in</q-item-label
                >
                <q-item-label lines="1" caption class="subtitle text-left q-ml-sm"
                  >5 days</q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <q-btn
                  text-color="black"
                  round
                  icon="keyboard_arrow_right"
                  color="grey-4"
                  size="sm"
                />
              </q-item-section>
            </q-item>
          </q-list>
         <q-list fullwidth class="bg-grey-2 " style="height:auto" >
            <q-item clickable v-ripple>
              <q-item-section avatar top class="q-pa-none">
                <q-avatar rounded color="grey-4" size="68px" text-color="white">
                  <img src="/assets/certificate.png" class="q-py-sm q-px-sm" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label lines="1" class="text-left q-ml-sm"
                  >Insurance Due</q-item-label
                >
                <q-item-label lines="1" caption class="subtitle text-left q-ml-sm"
                  >Expiring in 2 days</q-item-label
                >
              </q-item-section>

              <q-item-section side>
                <q-btn
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
// import DarkModeToggle from "./DarkModeToggle.vue";
export default {
  // components: {
  //   DarkModeToggle,
  // },
  data() {
    return {
      selectedOption: null,
      dropdownOptions: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
      ],
      icons: [
        { name: "Start Inspection", route: "inspectionOver" },
        { name: "Accident Report", route: "Accident" },
        { name: "LogMiles ", route: "logMile" },
      ],
    };
  },
  methods: {
    viewDetails() {},
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

.title-container {
  margin-left: 10px;
}

.three-columns-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;

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
  width: 95px;
}
.custom-icon {
  width: 24px;
  height: 24px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: 8px;
  margin-top: 12px;
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
.q-item{
  padding: 0 10px 0 0 !important;
}
.border-rounded {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;

}

</style>
