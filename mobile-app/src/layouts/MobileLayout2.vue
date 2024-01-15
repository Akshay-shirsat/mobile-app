<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-btn
      color="primary"
      no-caps
      rounded
      label="Start"
      @click="handleStart"
      class="Start-button q-mt-xl"
    />

    <vue-bottom-sheet
      ref="myBottomSheet"
      :visible="bottomSheetVisible"
      @hide="closeBottomSheet"
      class="vue-bottom-sheet"
    >
      <div class="q-pa-md q-gutter-sm bottom-sheet-content">
        <div
          v-for="category in categories"
          :key="category.name"
          class="category-item"
          @click="navigateTo(category.route)"
        >
          <img :src="category.icon" class="category-icon" />
          <div :class="{ 'emergency-name': category.name === 'Emergency' }">{{ category.name }}</div>
        </div>
      </div>
    </vue-bottom-sheet>
  </q-layout>
</template>

<script>
export default {
  name: "MobileLayout",
  data() {
    return {
      bottomSheetVisible: true,
      categories: [
        { name: "Dashboard", icon: "/assets/grid.png", route: "dashboard" },
        { name: "Inspection", icon: "/assets/calendar--tools.png", route: "inspection" },
        { name: "Emergency",  icon: "/assets/Emergency.png", route: "inspection" },
        { name: "Accident", icon: "/assets/calendar--add.png", route: "inspection" },
        { name: "Setting", icon: "/assets/settings.png", route: "inspection" },
      ],
    };
  },
  methods: {
    closeBottomSheet() {
      this.bottomSheetVisible = false;
    },
    navigateTo(page) {
      console.log(`Navigating to ${page}`);
    },
    handleStart() {
      // Handle Start button click
    },
  },
};
</script>

<style scoped>
.bottom-sheet-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* Style for each category */
.category-item {
  text-align: center;
  margin: 4px;
  cursor: pointer;
}

/* Set bottom sheet position to fixed at the bottom */
.vue-bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 998; /* Adjust the z-index as needed */
  background-color: aliceblue;
}

.Start-button {
  position: fixed;
  width: 93%;
  bottom: 90px;
  left: 46%;
  transform: translateX(-46.5%); /* Half of the difference between 100% and 93% */
  z-index: 999; /* Higher z-index than the bottom sheet */
  height: 49px;
}

/* Style for the 'Emergency' category name */
.emergency-name {
  color: red;
}
</style>
