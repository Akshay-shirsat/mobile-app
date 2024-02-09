<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <vue-bottom-sheet
      ref="myBottomSheet"
      :visible="bottomSheetVisible"
      @hide="closeBottomSheet"
      class="vue-bottom-sheet"
    >
      <div class="q-pa-sm q-gutter-sm bottom-sheet-content">
        <div
          v-for="category in categories"
          :key="category.name"
          class="category-item"
          @click="navigateTo(category.route)"
        >

          <div v-if="category.name === 'Emergency'" class="emergency-wrapper">
            <img :src="category.icon" class="category-icon" />
            <img src="../assets/Frame.png" class="emergency-frame" />
          </div>

          <div v-else>
            <img :src="category.icon" class="category-icon" />
          </div>
          <div>{{ category.name }}</div>
        </div>
      </div>
    </vue-bottom-sheet>
  </q-layout>
</template>

<script>
import GridI from "../assets/grid.png"
import InspectionI from "../assets/calendar--tools.png"
import Sos from "../assets/Emergency.png"
import AccidentI from "../assets/calendar--add.png"
import setting from "../assets/settings.png"

export default {
  name: "MobileLayout",
  data() {
    return {
      bottomSheetVisible: true,
      categories: [
        { name: "Dashboard",
         icon: GridI,
         route: "dashboard" },
        {
          name: "Inspection",
          icon: InspectionI,
          route: "inspectionComp",
        },
        {
          name: "Emergency",
          icon:Sos,
          route: "Emergency",
        },
        {
          name: "Accident",
          icon: AccidentI,
          route: "Accident",
        },
        { name: "setting", icon: setting, route: "setting" },
      ],
    };
  },
  methods: {
    closeBottomSheet() {
      this.bottomSheetVisible = false;
    },
    navigateTo(page) {
      this.$router.push({ name: page });
      console.log(`Navigating to ${page}`);
    },
  },
};
</script>

<style scoped>
q-layout{
  position: fixed;
}
.bottom-sheet-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.category-item {
  text-align: center;
  margin: 4px;
  cursor: pointer;
  color: #888;
}

.vue-bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: aliceblue;
}
.emergency-frame {
  position: absolute;
  top: 10px;
  left: 19px;
  width: 30px;
  z-index: 1;
}
.emergency-wrapper {
  position: relative;
}
</style>
