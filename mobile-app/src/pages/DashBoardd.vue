<template>
<q-page>
  <div>
    <q-header elevated>
      <q-bar class="q-py-lg" color="primary">
        <q-toolbar-title class="q-ml-md">
          Good Morning Akshay!
        </q-toolbar-title>
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
    </q-header>
    <q-page-container>
      <q-page>
        <div class="flex-container">
          <div class="flex-item top-section">
            <div class="text-h6 q-ml-md q-mt-sm">Selected Vehicle</div>

            <q-select
              outlined
              dense
              v-model="selectedOption"
              :options="dropdownOptions"
              label="Select an option"
              style="width: 150px; margin-left: 10px"
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
        <div class="quick-actions-section">
          <div class="text-h6 q-ml-md">Quick Actions</div>
        </div>
<div class="q-pa-sm q-gutter-md">
      <q-list bordered padding class="text-left" style="max-width: 670px">
      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar square  color="grey-4" text-color="white" class="q-ml-sm" >
            <img src="/assets/horizontal.png" class="q-py-sm q-px-sm">
          </q-avatar>
        </q-item-section>

        <q-item-section >
          <q-item-label lines="1" class="text-left">Licence Due Date</q-item-label>
          <q-item-label lines="1" caption class="subtitle text-left">Expiring in 2 days</q-item-label>
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
           <q-avatar square  color="grey-4" text-color="white" class="q-ml-sm" >
            <img src="/assets/security.png" class="q-py-sm q-px-sm">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1" class="text-left">MOT Due in</q-item-label>
          <q-item-label lines="1" caption class="subtitle text-left">5 days</q-item-label>
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

      <q-item clickable v-ripple >
        <q-item-section avatar top >
          <q-avatar square  color="grey-4" text-color="white" class="q-ml-sm  " >
            <img src="/assets/certificate.png" class="q-py-sm q-px-sm">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1" class="text-left" >Insurance Due</q-item-label>
          <q-item-label  lines="1" caption class="subtitle text-left" >Expiring in 2 days</q-item-label>
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
      </q-page>
    </q-page-container>
  </div>
</q-page>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
      dropdownOptions: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
      ],
    };
  },
  methods: {
    viewDetails() {},
  },
};
</script>

<style scoped>
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
.top-section {
  margin-top: -35px;
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
