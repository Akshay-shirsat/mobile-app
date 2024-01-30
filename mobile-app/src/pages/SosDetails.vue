<template>
  <q-page>
    <div v-if="flag">
      <q-header class="bg-white text-primary">
        <q-bar class="q-py-lg bg-white text-primary">
          <q-toolbar-title class="q-ml-md"> SoS Detail </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
      <div class="flex-container">
      <div class="flex-item">
        <img src="/assets/image1.png" alt="Image" class="image-center" />
      </div>
    </div>

<div
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1px;
      font-family: DM Sans;
      font-size: 12px;
      font-weight: 700;
      line-height: normal;
    "
  >
    <!-- Left side: Vehicle Name -->
    <div>
      <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="grey-5">
        {{ selectedVehicleName }}
      </q-item-label>
    </div>

    <!-- Right side: Vehicle Tag -->
    <div class="q-pa-md" >
      <q-item-label class="text-left text-bold" lines="1">
        <span class="text-weight-light text-left">{{ selectedVehicleTag }}</span>
      </q-item-label>
    </div>
  </div>
<q-separator inset />

<div
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1px;
      font-family: DM Sans;
      font-size: 12px;
      font-weight: 700;
      line-height: normal;
    "
  >
    <!-- Left side: Vehicle Name -->
    <div>
      <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="grey-5">
        {{ Licence_number }}
      </q-item-label>
    </div>

    <!-- Right side: Vehicle Tag -->
    <div class="q-pa-md">
      <q-item-label class="text-left text-bold" lines="1">
        <span class="text-weight-light text-left">{{ Licence_number2 }}</span>
      </q-item-label>
    </div>
  </div>
<q-separator inset />

<div
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1px;
      font-family: DM Sans;
      font-size: 12px;
      font-weight: 700;
      line-height: normal;
    "
  >
    <!-- Left side: Vehicle Name -->
    <div>
      <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="grey-5">
        {{ oil_type }}
      </q-item-label>
    </div>

    <!-- Right side: Vehicle Tag -->
    <div class="q-pa-md">
      <q-item-label class="text-left text-bold" lines="1">
        <span class="text-weight-light text-left">{{ info }}</span>
      </q-item-label>
    </div>
  </div>
<q-separator inset />
<div
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1px;
      font-family: DM Sans;
      font-size: 12px;
      font-weight: 700;
      line-height: normal;
    "
  >
    <!-- Left side: Vehicle Name -->
    <div>
      <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="grey-5">
        {{ Coolant_Type }}
      </q-item-label>
    </div>

    <!-- Right side: Vehicle Tag -->
    <div class="q-pa-md">
      <q-item-label class="text-left text-bold" lines="1">
        <span class="text-weight-light text-left">{{ info }}</span>
      </q-item-label>
    </div>
  </div>
<q-separator inset />
<div
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1px;
      font-family: DM Sans;
      font-size: 12px;
      font-weight: 700;
      line-height: normal;
    "
  >
    <!-- Left side: Vehicle Name -->
    <div>
      <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="grey-5">
        {{ PSI }}
      </q-item-label>
    </div>

    <!-- Right side: Vehicle Tag -->
    <div class="q-pa-md">
      <q-item-label class="text-left text-bold" lines="1">
        <span class="text-weight-light text-left">{{ info }}</span>
      </q-item-label>
    </div>
  </div>
<q-separator inset />
<div
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1px;
      font-family: DM Sans;
      font-size: 12px;
      font-weight: 700;
      line-height: normal;
    "
  >
    <!-- Left side: Vehicle Name -->
    <div>
      <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="grey-5">
        {{ PSI2 }}
      </q-item-label>
    </div>

    <!-- Right side: Vehicle Tag -->
    <div class="q-pa-md">
      <q-item-label class="text-left text-bold" lines="1">
        <span class="text-weight-light text-left">{{ info }}</span>
      </q-item-label>
    </div>
  </div>
<q-separator inset />
<div
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1px;
      font-family: DM Sans;
      font-size: 12px;
      font-weight: 700;
      line-height: normal;
    "
  >
    <!-- Left side: Vehicle Name -->
    <div>
      <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="grey-5">
        {{ mileage }}
      </q-item-label>
    </div>

    <!-- Right side: Vehicle Tag -->
    <div class="q-pa-md">
      <q-item-label class="text-left text-bold" lines="1">
        <span class="text-weight-light text-left">{{ mileageN }}</span>
      </q-item-label>
    </div>
  </div>
<q-separator inset />
    </div>
    <div v-else>
      <SkelDash />
    </div>
  </q-page>
</template>

<style scoped>
.q-toolbar-title {
  font-size: 18px;
}

.flex-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.flex-item {
  margin-top: 40px;
}
.image-center {
  /* Additional styles for centering the image if needed */
  display: block;
  margin: 0 auto;
}
.vehicle-info {
  text-align: center;
  margin-top: 10px;
}

.vehicle-name-tag {
  font-size: 14px;
  font-weight: bold;
  color: #333; /* Adjust the color as needed */
}

.vehicle-name {
  font-size: 16px;
  color: #555; /* Adjust the color as needed */
}
</style>
<script>
import SkelDash from "../components/skeleton/SkelDrafts.vue";
export default {
  data() {
    return {
      selectedOption: null,
      dropdownOptions: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },

      ],
      flag: false,
      selectedVehicleName: "Vehicle name",
      selectedVehicleTag: "Maruti suzuki Lxi",
      Licence_number:"Licence number",
      Licence_number2:"12345678",
      oil_type:"Oil type",
      Coolant_Type:"Coolant Type",
      PSI:"Front Tyre Pressures PSI",
      PSI2:"Rear Tyre Pressures PSI",
      info:"info",
      mileage:"mileage",
      mileageN:"0000"
    };
  },
  components: {
    SkelDash,
  },
  created() {
    setTimeout(() => {
      // Code to be executed after the specified delay

      this.flag = true;
    }, 5000);
  },
  methods: {
    viewDetails() {},
  },
};
</script>
