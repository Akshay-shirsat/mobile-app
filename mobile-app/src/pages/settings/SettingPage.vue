<template>
  <q-page>
    <div v-if="flag">

      <q-header  class="bg-white text-primary">
        <q-bar class="q-py-lg bg-white text-primary">
          <q-btn flat round dense style="color: black"  icon="arrow_back" @click="goBack" />
          <q-toolbar-title class="q-ml-sm" style="color: black">
            Settings
          </q-toolbar-title>

        </q-bar>
      </q-header>
<q-separator />
<div style="padding-bottom:85px;">
     <div style="display: flex; align-items: center;">
          <q-icon name="person" class="q-ml-lg text-h6" />
          <q-item-label class="q-pa-md text-weight-medium text-h6 " >Account</q-item-label>
        </div>
      <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm" v-for="(item, index) in completedReports" :key="index">
        <q-list rounded padding dense class="rounded-borders" style=" display: flex; align-items: center; height: 50px; margin-top: -10px;">
          <q-img class="q-mr-sm" :src="item.imageSrc" :alt="item.imageAlt" :width="item.imageWidth" :height="item.imageHeight" />
          <q-item clickable v-ripple style="flex-grow: 1">
            <q-item-section>
              <q-item-label class="rounded-list-subtitle2 text-left text-weight-medium">{{ item.status }}</q-item-label>
              <q-item-label class="text-left text-bold" lines="1">{{ item.vehicle }}<span class="text-weight-light">{{ item.dueDate }}</span></q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn class="q-mr-sm" text-color="black" round icon="keyboard_arrow_right" flat size="sm" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
<q-separator  inset />

     <div style="display: flex; align-items: center;">
          <q-icon name="person" class="q-ml-lg text-h6" />
          <q-item-label class="q-pa-md text-weight-medium text-h6" >More</q-item-label>
        </div>
      <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm" v-for="(item, index) in moreItems" :key="index">
        <q-list rounded padding dense class="rounded-borders " style=" display: flex; align-items: center; height: 50px; margin-top: -10px;">
          <q-img class="q-mr-sm" :src="item.imageSrc" :alt="item.imageAlt" :width="item.imageWidth" :height="item.imageHeight" />
          <q-item clickable v-ripple style="flex-grow: 1">
            <q-item-section>
              <q-item-label class="rounded-list-subtitle2 text-left text-weight-medium">{{ item.status }}</q-item-label>
              <q-item-label class="text-left text-bold" lines="1">{{ item.vehicle }}<span class="text-weight-light">{{ item.dueDate }}</span></q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn class="q-mr-sm" text-color="black" round icon="keyboard_arrow_right" flat size="sm" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
</div>
<q-separator  inset />
    </div>
    <div v-else>
      <SkelSetting />
    </div>
  </q-page>
</template>

<script>
import SkelSetting from "../../components/skeleton/SkelSetting.vue";
export default {
  created() {
    setTimeout(() => {
      this.flag = true;
      this.fetchCompletedReports();
    }, 3000);
  },
  data() {
    return {
      completedReports: [],
      moreItems: [],
      flag: false,
    };
  },
  components: {
    SkelSetting,
  },
  methods: {
    viewDetails() {},
    goBack() {
this.$router.go(-1);
  },
    fetchCompletedReports() {
      const dynamicData = [
        {
          status: "Edit Profile",
          imageWidth: "6px",
          imageHeight: "5px",
        },
        {
          status: "Change Password",
          imageWidth: "6px",
          imageHeight: "55px",
        },
        {
          status: "Language",
          imageWidth: "6px",
          imageHeight: "55px",
        },
        {
          status: "Insurance Details",
          imageWidth: "6px",
          imageHeight: "55px",
        },
      ];


      const moreData = [

         {
          status: "Privacy Policy",
          imageWidth: "6px",
          imageHeight: "5px",
        },
          {
          status: "Support",
          imageWidth: "6px",
          imageHeight: "5px",
        },
           {
          status: "Night-Mode",
          imageWidth: "6px",
          imageHeight: "5px",
        },
      ];

      this.completedReports = dynamicData;
      this.moreItems = moreData;
    },
  },
};
</script>
<style scoped>
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
  margin-left: 10px;
  margin-top: 40px;
}
.image-right {
  width: 187.041px;
  height: 111.807px;
  flex-shrink: 0;
}

.top-section {
  margin-top: -35px;
}

.btngroup {
  width: 170px;
}

.rounded-box {
  border-radius: 12px;
  overflow: hidden;
}

.rounded-borders {
  border-radius: 12px;
  overflow: hidden;
}

.q-pa-md.items-start {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
