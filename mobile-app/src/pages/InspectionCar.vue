<template>
      <q-page>
        <div v-if="flag">
            <q-header elevated class="bg-white text-primary">
        <q-bar class="q-py-lg bg-white text-primary">
          <q-toolbar-title class="q-ml-md"> Inspection </q-toolbar-title>
          <q-btn flat round dense icon="more_vert" />
        </q-bar>
      </q-header>
        <div class="flex-container">
          <div class="flex-item top-section">
            <div class="text-h6 q-ml-md q-mt-xl">Selected Vehicle</div>

            <q-select
              outlined
              dense
              v-model="selectedOption"
              :options="dropdownOptions"
              label="Select an option"
              style="width: 150px; margin-left: 10px;"
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

          <div class="flex-item" >
            <img src="/assets/image1.png" alt="Image" class="image-right"  />
          </div>
        </div>
          <div class="q-pa-md items-start">
      <q-btn-group rounded style="justify-content: center;">
        <q-btn
          color="grey-4"
          rounded
          text-color="black"
          no-caps
          label="Pending"
          class="btngroup"
        />
        <q-btn
          color="white"
          rounded
          text-color="black"
          no-caps
          label="Completed"
          class="btngroup"
        />
      </q-btn-group>
    </div>
 <div style="display: flex; justify-content: space-between; align-items: center;">
  <q-item-label class="q-pa-sm q-ml-sm text-weight-medium" color="grey-5">Draft and Pending reports</q-item-label>
  <div class="q-pa-md">
    <q-btn-dropdown size="12px" label="Filter">
      <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Draft</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Completed</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</div>
<div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
    <q-list bordered padding dense class="rounded-borders" style="max-width: 768px; display: flex; align-items: center ;height:66.281px;">
      <q-img
        class="q-mr-sm"
        src="/assets/Rectangle_175.png"
        alt="Image description"
        width="6px"
        height="55px"
      />
      <q-item clickable v-ripple style="flex-grow: 1;">
        <q-item-section>
          <q-item-label class="rounded-list-subtitle text-left text-weight-medium">Pending</q-item-label>
          <q-item-label class="text-left text-bold" lines="1">Sienna, <span class="text-weight-light">due by-dd.mm.yyyy</span></q-item-label>
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
   <div class="rounded-box q-pt-xs q-pa-md q-gutter-sm">
    <q-list bordered padding dense class="rounded-borders" style="max-width: 768px; display: flex; align-items: center ;height:66.281px;">
      <q-img
        class="q-mr-sm"
        src="/assets/Rectangle_175.png"
        alt="Image description"
        width="6px"
        height="55px"
      />
      <q-item clickable v-ripple style="flex-grow: 1;">
        <q-item-section>
          <q-item-label class="rounded-list-subtitle text-left text-weight-medium">Pending</q-item-label>
          <q-item-label class="text-left text-bold" lines="1">Sienna, <span class="text-weight-light">due by-dd.mm.yyyy</span></q-item-label>
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
   <div class="rounded-box q-pt-xs q-pa-md q-gutter-md">
    <q-list bordered padding dense class="rounded-borders" style="max-width: 768px; display: flex; align-items: center ;height:66.281px;">
      <q-img
        class="q-mr-sm"
        src="/assets/Rectangle_175.png"
        alt="Image description"
        width="6px"
        height="55px"
      />

      <q-item clickable v-ripple style="flex-grow: 1;">
        <q-item-section>
          <q-item-label class="rounded-list-subtitle text-left text-weight-medium">Pending</q-item-label>
          <q-item-label class="text-left text-bold" lines="1">Sienna, <span class="text-weight-light">due by-dd.mm.yyyy</span></q-item-label>
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
     <div class="rounded-box q-pt-xs q-pa-md q-gutter-md">
    <q-list bordered padding dense class="rounded-borders" style="max-width: 768px; display: flex; align-items: center ;height:66.281px;">
      <q-img
        class="q-mr-sm"
        src="/assets/Rectangle_176.png"
        alt="Image description"
        width="6px"
        height="55px"
      />
      <q-item clickable v-ripple style="flex-grow: 1;">
        <q-item-section>
          <q-item-label class="rounded-list-subtitle2 text-left text-weight-medium">Draft</q-item-label>
          <q-item-label class="text-left text-bold" lines="1">Sienna, <span class="text-weight-light">due by-dd.mm.yyyy</span></q-item-label>
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
     <div class="rounded-box q-pt-xs q-pa-md q-gutter-md">
    <q-list bordered padding dense class="rounded-borders" style="max-width: 768px; display: flex; align-items: center ;height:66.281px;">
      <q-img
        class="q-mr-sm"
        src="/assets/Rectangle_176.png"
        alt="Image description"
        width="6px"
        height="55px"

      />

      <q-item clickable v-ripple style="flex-grow: 1;">
        <q-item-section>
          <q-item-label class="rounded-list-subtitle2 text-left text-weight-medium">Draft</q-item-label>
          <q-item-label class="text-left text-bold" lines="1">Sienna, <span class="text-weight-light">due by-dd.mm.yyyy</span></q-item-label>
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
  </div>
  <div v-else>
<SkelDraft />
  </div>
      </q-page>
</template>

<script>
import SkelDraft from '../components/skeleton/SkelDrafts.vue'
export default {
created(){
  setTimeout(()=>{
    this.flag=true
  },3000)
},
  data() {
    return {
      selectedOption: null,
      dropdownOptions: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
      ],
      flag:false,
    };
  },
  components:{
    SkelDraft,
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
  margin-top: 40px;
  margin-left: 20px;
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
/*
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
} */

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
.q-ml-xl {
  margin-left: 1.5rem;
}
.btngroup{
width: 170px;
}
.rounded-list-container {
  border-radius: 12px; /* Set the desired border radius */
  border: 2px solid red; /* Set the desired border color */
  overflow: hidden; /* Hide overflow content */
}

.rounded-list-title {
  font-weight: bold;
}

.rounded-list-subtitle {
  color: red; /* Set the desired color for subtitles */
}
.rounded-list-subtitle2 {
  color: rgb(72, 43, 150); /* Set the desired color for subtitles */
}
.rounded-box {
  border-radius: 12px; /* Set the desired border radius for the entire box */
  overflow: hidden; /* Hide overflow content */

}

.rounded-borders {
  border-radius: 12px; /* Set the desired border radius for the list */
  overflow: hidden; /* Hide overflow content */
}
.vertical-separator {
  width: 1px;
  height: 100%;
  background-color: rgba(255, 251, 251, 0); /* Set the desired color for the separator */
  margin-right: 10px;
}
.q-pt-sm {
  padding-top: 15px; /* Set the desired top padding for the first structure */
}

.q-pt-xs {
  padding-top: 2px; /* Set the desired top padding for the second structure */
}
.q-pa-md.items-start {
  display: flex;
  flex-direction: column;
  align-items: center;
}




</style>
