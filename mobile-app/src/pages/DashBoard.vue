<template>
  <div>
    <!-- Top Navigation Bar -->
    <q-header elevated>
      <!-- Left side: Greeting -->
      <q-bar class="q-py-lg" color="primary">
        <q-toolbar-title class="abc q-ml-sm"> Good Morning Akshay! </q-toolbar-title>
        <q-btn
          square
          class="outlined-button"
          icon="notifications"
          color="transparent"
          text-color="white"
          border-color="white"
        >
        </q-btn>
      </q-bar>

      <!-- Right side: Notification Icon -->
    </q-header>


    <q-page-container>
      <q-page>

        <div class="flex-container">

          <div class="flex-item top-section">

            <div class="text-h6 q-ml-md q-mt-sm" >
              Selected Vehicle
            </div>

            <q-select
            outlined
            dense
              v-model="selectedOption"
              :options="dropdownOptions"
              label="Select an option"
              style="width: 150px; margin-left: 10px;"
            ></q-select>

            <q-btn label="View Details" color="primary"
        no-caps
        rounded @click="viewDetails" class="q-mt-lg q-ml-md"/>
          </div>


          <div class="flex-item">

            <img src="/assets/image1.png" alt="Image" class="image-right" />
          </div>
        </div>
        <div class="quick-actions-section">
          <div class="text-h6 q-ml-md">
            Quick Actions
          </div>
        </div>
        <!-- Three Columns Section -->
        <div class="three-columns-section">
          <!-- Column 1 -->
          <div class="column">
            <q-icon class="custom-icon icon1 q-ml-xl"></q-icon>
            <div class="name">Start Inspection</div>
          </div>

          <!-- Column 2 -->
          <div class="column">
            <q-icon class="custom-icon icon2 q-ml-xl"></q-icon>
            <div class="name">Accident Report</div>
          </div>

          <!-- Column 3 -->
          <div class="column">
            <q-icon class="custom-icon icon3 q-ml-xl"></q-icon>
            <div class="name">Log Miles</div>
          </div>
        </div>
        <div class="attention-row">
          <div class="text-h6 q-mt-md q-ml-md">Need Your Attention</div>
        </div>
        <div class="row-structure">
          <!-- Row 1 -->
          <div class="row">
            <q-icon class="custom-icon icon11 q-mx-xl"></q-icon>
            <div class="details">
              <div class="text-h6">Licence Due Date</div>
              <div class="subtitle">Expiring in 2 days</div>
            </div>
            <q-btn icon="keyboard_arrow_right" color="primary" />
          </div>

          <!-- Row 2 -->
          <div class="row">
            <q-icon class="custom-icon icon12 q-mx-xl"></q-icon>
            <div class="details">
              <div class="text-h6">MOT Due</div>
              <div class="subtitle">Expiring in 5 days</div>
            </div>
            <q-btn icon="keyboard_arrow_right" color="primary" />
          </div>

          <!-- Row 3 -->
          <div class="row">
            <q-icon class="custom-icon icon13 q-mx-xl"></q-icon>
            <div class="details">
              <div class="text-h6">Insurance Due</div>
              <div class="subtitle">Expiring on 19/11/2023</div>
            </div>
            <q-btn icon="keyboard_arrow_right" color="primary" />
          </div>
        </div>
        
      </q-page>
    </q-page-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
      dropdownOptions: [
        { label: 'Option 1', value: 1 },
        { label: 'Option 2', value: 2 },

      ],
    };
  },
  methods: {
    viewDetails() {

    },
  },
};
</script>

<style scoped>
.q-toolbar-title {
  font-size: 18px;
}

/* Style for the title */
.text-h6 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
}

/* Flex Container Styles */
.flex-container {
  display: flex;
  justify-content: space-between;
}

/* Flex Item Styles */
.flex-item {
  flex: 1;
  margin-right: 20px;
}

/* Image Style */
.image-right {
  width: 187.041px;
  height: 111.807px;
  flex-shrink: 0;
}
.title-container {
  margin-left: 10px;

}
.top-section {
  margin-top: -35px; /* Adjust the margin-top as needed */
}
/* Style for Quick Actions section */
.quick-actions-section {
  margin-top: 20px; /* Adjust the margin-top as needed */
}

/* Style for Three Columns section */
.three-columns-section {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* Adjust the margin-top as needed */
}

/* Style for each column */
.column {
  flex: 1;
  text-align: center;
}

/* Style for icon */
.icon {
  font-size: 24px; /* Adjust the font size as needed */
  margin-bottom: 8px; /* Adjust the margin-bottom as needed */
}

/* Style for name */
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
  width: 24px; /* Adjust the width as needed */
  height: 24px; /* Adjust the height as needed */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: 8px;
}

/* Style for icon1 */
.icon1 {
  background-image: url('/assets/calendar--tools.png'); /* Adjust the path as needed */
}

/* Style for icon2 */
.icon2 {
  background-image: url('/assets/vector.png'); /* Adjust the path as needed */
}

/* Style for icon3 */
.icon3 {
  background-image: url('/assets/vectorr.png'); /* Adjust the path as needed */
}
.row-structure {
  display: flex;
  flex-direction: column;
  margin-top: 20px; /* Adjust the margin-top as needed */
}

/* Style for each row in the structure */
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd; /* Add a border between rows */
  padding: 10px 0; /* Adjust the padding as needed */
}

/* Style for logo */


/* Style for details (title and subtitle) */
.details {
  flex-grow: 1;
  margin-left: 10px; /* Adjust the margin-left as needed */
}

/* Style for ">" button */
q-btn {
  margin-left: 10px; /* Adjust the margin-left as needed */
}
.icon11 {
  background-image: url('/assets/horizontal.png'); /* Adjust the path as needed */
}

/* Style for icon2 */
.icon12 {
  background-image: url('/assets/security.png'); /* Adjust the path as needed */
}

/* Style for icon3 */
.icon13 {
  background-image: url('/assets/certificate.png'); /* Adjust the path as needed */
}
.subtitle{
  color: red;
}

</style>
