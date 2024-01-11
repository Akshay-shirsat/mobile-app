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
      <div class="q-pa-md q-gutter-sm bottom-sheet-content">
        <div
          v-for="category in categories"
          :key="category.name"
          class="category-item"
          @click="navigateTo(category.route)"
        >
          <q-icon :name="category.icon" class="category-icon" />
          <div>{{ category.name }}</div>
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
        { name: "Dashboard", icon: "dashboard", route: "dashboard" },
        { name: "Inspection", icon: "pageview", route: "inspection" },
        { name: "Emergency", icon: "warning", route: "emergency" },
        { name: "Accident", icon: "report_problem", route: "accident" },
        { name: "Settings", icon: "settings", route: "settings" },
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
  color: #888;
}

/* Style for category icon */
.category-icon {
  font-size: 24px;
  color: #888;
}

/* Set bottom sheet position to fixed at the bottom */
.vue-bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* Adjust the z-index as needed */
  background-color: aliceblue;
}
</style>
