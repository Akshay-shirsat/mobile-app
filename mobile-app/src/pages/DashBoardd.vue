<template>
  <q-page >
    <div>
      <q-header class="text-primary">
        <q-bar style="background-color: white; height: 45px">
          <q-toolbar-title
            style="margin-left: 3px"
            class="text-primary text-bold"
          >
            Good Morning Dan!
          </q-toolbar-title>

          <q-btn
            square
            class="outlined-button"
            icon="notifications"
            color="transparent"
            text-color="primary"
            flat
          >
          </q-btn>
        </q-bar>
      </q-header>
      <div class="flex-container">
        <div class="flex-item q-ml-sm">
          <q-item-label
            class="q-pa-sm q-ml-sm text-weight-medium"
            style="
              color: #4e4d4f;
              font-size: 16px;
              font-weight: 700;
              line-height: 21px;
              letter-spacing: 0px;
              text-align: left;
              width: 134px
              height: 22.95px
              top: 128.05px
              left: 18px

            "
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
            to="/VehicleDetails"
          />
        </div>
        <div class="flex-item image-container">
          <img src="../assets/image1.png" alt="Image" class="image-right" />
        </div>
      </div>
      <q-separator class="q-mt-md" />
      <q-item-label
        class="q-pa-md q-ml-sm text-weight-medium"
        style="color: #4e4d4f;font-family: Roboto;
              font-size: 16px;
              font-weight: 700;
              line-height: 22px;
              letter-spacing: 0px;
              text-align: left;
              width: 154px
              height: 21px
              top: 298.28px
              left: 17px"
        >Quick Actions</q-item-label
      >
      <q-row class="three-columns-section q-pa-sm q-mx-md">
        <q-col
          v-for="(icon, index) in icons"
          :key="index"
          cols="12"
          md="4"
          class="q-flex q-flex-center q-flex-column text-center"
          size="4rem"
        >
          <div class="border-rounded shadow-2 quickActionDisc">
            <router-link :to="{ name: icon.route }">
              <q-icon :class="['custom-icon', 'icon' + (index + 1)]"></q-icon>
            </router-link>
          </div>

          <div class="name">{{ icon.name }}</div>
        </q-col>
      </q-row>
      <q-item-label
        class="q-pa-sm q-ml-md text-weight-medium"
        style="color: #4e4d4f;
                font-size: 16px;
                font-weight: 700;
                line-height: 22px;
                letter-spacing: 0px;
                text-align: left;
                width: 186px
                height: 18px
                top: 478px
                left: 18px"
        >Need Your Attention</q-item-label
      >

      <div class="q-px-lg q-gutter-md q-mt-sm"  >
        <q-list fullwidth class="bg-accent" style="height: auto">
          <q-item clickable v-ripple>
            <q-item-section avatar top class="q-pa-none">
              <q-avatar
                rounded
                color="secondary"
                size="68px"
                text-color="white"
              >
                <img src="../assets/horizontal.png" class="q-py-sm q-px-sm" />
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
                color="secondary"
                size="sm"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <q-list fullwidth class="bg-accent" style="height: auto">
          <q-item clickable v-ripple>
            <q-item-section avatar top class="q-pa-none">
              <q-avatar
                rounded
                color="secondary"
                size="68px"
                text-color="white"
              >
                <img src="../assets/security.png" class="q-py-sm q-px-sm" />
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
                color="secondary"
                size="sm"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <q-list fullwidth class="bg-accent" style="height: auto">
          <q-item clickable v-ripple>
            <q-item-section avatar top class="q-pa-none">
              <q-avatar
                rounded
                color="secondary"
                size="68px"
                text-color="white"
              >
                <img src="../assets/certificate.png" class="q-py-sm q-px-sm" />
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
                color="secondary"
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
        {
          name: "Start Inspection",
          route: "inspectionOver",
          url: "/assets/calendar--tools.png",
        },
        {
          name: "Accident Report",
          route: "Accidentchecklist",
          url: "/assets/vector.png",
        },
        { name: "Log Miles ", route: "logMile", url: "/assets/vectorr.png" },
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

.icon1 {
  background-image: url("../assets/calendar--tools.png");
}

.icon2 {
  background-image: url("../assets/vector.png");
}

.icon3 {
  background-image: url("../assets/vectorr.png");
}

.icon11 {
  background-image: url("../assets/horizontal.png");
}

.icon12 {
  background-image: url("../assets/security.png");
}

.icon13 {
  background-image: url("../assets/certificate.png");
}
.subtitle {
  color: red;
}
.q-item {
  padding: 0 10px 0 0 !important;
}
.border-rounded {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}
</style>
