<template>
  <q-page>
    <div v-if="flag">
       <q-header class="bg-white text-primary">
        <q-bar class="q-py-lg bg-white">
          <q-btn
            flat
            dense
            icon="arrow_back"
            style="color: black"
            @click="goBack"
          />
          <q-toolbar-title
            class="q-ml-md"
            style="color: black;width: 104px
                height: 33px
                 top: 132.29px
              left: 16.5px
            "
          >
            Log Miles
          </q-toolbar-title>
          <q-btn flat round dense color="black" icon="more_vert" />
        </q-bar>
      </q-header>
      <q-separator />
      <div class="flex-container">
        <div class="flex-item">
          <img src="~assets/image1.png" alt="Image" class="image-center" />
        </div>
      </div>
<div style="padding-bottom:85px;">
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

        <div>
          <q-item-label
            class="q-pa-sm q-ml-sm text-weight-medium"
            color="grey-5"
          >
            {{ selectedVehicleName }}
          </q-item-label>
        </div>


        <div class="q-pa-md">
          <q-item-label class="text-left text-bold" lines="1">
            <span class="text-weight-light text-left">{{
              selectedVehicleTag
            }}</span>
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

        <div>
          <q-item-label
            class="q-pa-sm q-ml-sm text-weight-medium"
            color="grey-5"
          >
            {{ Licence_number }}
          </q-item-label>
        </div>


        <div class="q-pa-md">
          <q-item-label class="text-left text-bold" lines="1">
            <span class="text-weight-light text-left">{{
              Licence_number2
            }}</span>
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

        <div>
          <q-item-label
            class="q-pa-sm q-ml-sm text-weight-medium"
            color="grey-5"
          >
            {{ Vehicle_number }}
          </q-item-label>
        </div>


        <div class="q-pa-md">
          <q-item-label class="text-left text-bold" lines="1">
            <span class="text-weight-light text-left">{{
              Vehicle_number2
            }}</span>
          </q-item-label>
        </div>
      </div>
      <q-separator inset />
      <q-item-label
        class="q-pt-md q-ml-md text-weight-regular text-caption"
        color="grey-5"
        >Please enter current mileage of vehicle</q-item-label
      >
      <div
        class="q-pa-md"
        style="display: flex; justify-content: center; gap: 10px"
      >
        <q-select
          outlined
          dense
          v-model="selectedOption"
          :options="dropdownOptions"
          label="Miles"
          style="width: 150px; margin-left: 10px"
        ></q-select>

        <q-select
          outlined
          dense
          v-model="selectedOption"
          :options="dropdownOptions"
          label="100"
          style="width: 150px; margin-left: 10px"
        ></q-select>
      </div>
</div>
       <div
        style="
          display: flex;
          justify-content: center;

          position: fixed;
          z-index: 999;
          padding: 10px;
          width: 100%;
          box-sizing: border-box;
          background-color:white;
          bottom: 0px;
        "
      >
        <div style="display: flex; gap: 10px">
          <q-btn
            rounded
            label="Cancel"
            color="grey-5"
            @click="goBack"
            class="q-mr-md"
            style="width: 169.224px; height: 49px"
          />
          <q-btn
            rounded
            label="Save"
            color="primary"
            @click="goNext"
            style="width: 169.224px; height: 49px"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <SkelLogmiles />
    </div>
  </q-page>
</template>

<style scoped>
.q-toolbar-title {
  font-size: 18px;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-item {
  margin-top: 40px;
}
.image-center {
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
  color: #333;
}

.vehicle-name {
  font-size: 16px;
  color: #555;
}
</style>
<script>
import SkelLogmiles from "../components/skeleton/SkelLogmiles.vue";

export default {

  data() {
    return {
      selectedOption: null,
      dropdownOptions: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
      ],
      flag: false,
      selectedVehicleName: "Vehicle Name",
      selectedVehicleTag: "Your Vehicle Tag",
      Licence_number: "Licence number",
      Licence_number2: "12345678",
      Vehicle_number: "Vehicle number",
      Vehicle_number2: "12345678",
    };
  },
  components: {
    SkelLogmiles,

  },
  created() {
    setTimeout(() => {
      this.selectedVehicleName = "Example Vehicle";
      this.flag = true;
    }, 1000  );
  },
  methods: {
    viewDetails() {},
    toggleDarkMode() {
      this.$q.dark.toggle();
    },
    goBack() {
this.$router.go(-1);
  },
  },

};
</script>
