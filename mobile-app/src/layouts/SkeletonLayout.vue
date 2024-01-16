<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-btn class="Start-button q-mt-xl q-ml-sm">
      <q-skeleton :type="'rect'" width="100%" height="100%" />
    </q-btn>

    <vue-bottom-sheet
      ref="myBottomSheet"
      :visible="bottomSheetVisible"
      @hide="closeBottomSheet"
      class="vue-bottom-sheet"
    >
      <!-- Bottom sheet content with skeleton loading -->
      <div class="q-pa-md q-gutter-sm bottom-sheet-content">
        <div
          v-for="category in categories"
          :key="category.name"
          class="category-item"
          @click="navigateTo(category.route)"
        >
          <!-- Add a wrapper for the Emergency category -->
          <div v-if="category.name === 'Emergency'" class="emergency-wrapper">
            <q-skeleton
              :type="'rect'"
              width="40px"
              height="40px"
              class="category-icon"
            />
            <div class="emergency-frame">
              <q-skeleton
                :type="'rect'"
                width="30px"
                height="10px"
                class="skeleton-frame"
              />
            </div>
          </div>
          <!-- For other categories, render as usual -->
          <div v-else>
            <q-skeleton
              :type="'rect'"
              width="40px"
              height="40px"
              class="category-icon"
            />
          </div>
          <div>
            <q-skeleton :type="'text'" />
          </div>
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
        {
          name: "Inspection",
          icon: "/assets/calendar--tools.png",
          route: "inspection",
        },
        {
          name: "Emergency",
          icon: "/assets/Emergency.png",
          route: "inspection",
        },
        {
          name: "Accident",
          icon: "/assets/calendar--add.png",
          route: "inspection",
        },
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
/* Styles for skeleton loading */
.skeleton-icon {
  width: 40px;
  height: 40px;
  background: #e0e0e0;
  border-radius: 50%;
}

.skeleton-frame {
  width: 30px;
  height: 10px;
  background: #e0e0e0;
}

/* Styles for bottom-fixed button */
.bottom-fixed-button {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  width: 95%;
  height: 49px;
  background: #e0e0e0;
  border-radius: 8px;
}

/* Styles for your components */
.bottom-sheet-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.category-item {
  text-align: center;
  margin: 4px;
  cursor: pointer;
}

.vue-bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 998;
  background-color: aliceblue;
}

.Start-button {
  position: fixed;
  width: 95%;
  bottom: 90px;
  left: 47%;
  transform: translateX(-46.5%);
  z-index: 999;
  height: 49px;
}

.emergency-name {
  color: red;
}

.emergency-frame {
  position: absolute;
  top: 10px;
  left: 19px;
  width: 30px;
  height: 15px;
  z-index: 1;
}

.emergency-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Add other styles as needed */
</style>
