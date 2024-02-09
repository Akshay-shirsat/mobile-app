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
            Inspection
          </q-toolbar-title>
          <q-btn flat round dense color="black" icon="more_vert" />
        </q-bar>
      </q-header>
      <q-separator />
      <div class="flex-container">
        <div class="flex-item top-section">
          <q-item-section class="text-weight-medium q-mt-xl q-ml-sm">
            <q-item-label class="text-left">Vehicle Name</q-item-label>
            <q-item-label caption class="text-left text-caption text-dark"
              >Maruti suzuki LXI</q-item-label
            >
          </q-item-section>
          <q-item-section class="text-weight-medium q-my-md">
            <q-item-label class="text-left">Licence No</q-item-label>
            <q-item-label caption class="text-left text-caption text-dark"
              >ABCD12345</q-item-label
            >
          </q-item-section>
          <q-item-section class="text-weight-medium q-my-md">
            <q-item-label class="text-left">Vehicle No</q-item-label>
            <q-item-label class="text-left text-caption text-dark" caption
              >12345</q-item-label
            >
          </q-item-section>
        </div>

        <div class="flex-item">
          <img src="~assets/image1.png" alt="Image" class="image-right" />
        </div>
      </div>
      <q-separator class="q-mt-sm" />
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <q-item-label
          class="q-pa-sm q-ml-sm text-weight-medium"
          style="color: #4e4d4f"
          >Inspection Checklist</q-item-label
        >
        <div class="q-pa-md">
          <q-item-label class="text-left text-bold" lines="1"
            ><span class="text-weight-light text-grey-5 ft-12"
              >DD/MM/YYYY</span
            ></q-item-label
          >
        </div>
      </div>


      <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
        <q-list
          fullwidth
          rounded
          padding
          dense
          class="rounded-borders; bg-grey-2"
          style="
            overflow: hidden;
            border-radius: 10px;
            display: flex;
            align-items: center;
            height: 55.281px;
            margin-top: -10px;
          "
        >
          <div class="leftBorderDefault"></div>

          <q-item
            v-for="(item, index) in items"
            :key="index"
            clickable
            v-ripple
            style="flex-grow: 1"
          >
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium"
                >{{ item.title }}</q-item-label
              >
            </q-item-section>
            <q-item-section side>
              <q-item-label class="text-weight-medium q-mr-sm">{{
                item.progress
              }}</q-item-label>
            </q-item-section>
            <q-btn
              class="q-mr-sm"
              text-color="black"
              round
              icon="keyboard_arrow_right"
              color="grey-4"
              size="sm"
              to="/councilReq"
            />
          </q-item>
        </q-list>
      </div>
      <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
        <q-list
          fullwidth
          rounded
          padding
          dense
          class="rounded-borders; bg-grey-2"
          style="
          overflow: hidden;
            border-radius: 10px;
            display: flex;
            align-items: center;
            height: 55.281px;
            margin-top: -10px;
          "
        >
          <div class="leftBorderDefault"></div>


          <q-item
            v-for="(item, index) in secondListItems"
            :disabled="isSecondListDisabled"
            :key="index"
            clickable
            v-ripple
            style="flex-grow: 1"
          >
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium "
                >{{ item.title }}</q-item-label
              >
            </q-item-section>
            <q-item-section side>
              <q-item-label class="text-weight-medium q-mr-sm">{{
                item.progress
              }}</q-item-label>
            </q-item-section>
            <q-btn
              class="q-mr-sm"
              text-color="black"
              round
              icon="keyboard_arrow_right"
              color="grey-4"
              size="sm"
            />
          </q-item>
        </q-list>
      </div>
       <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
        <q-list
          fullwidth
          rounded
          padding
          dense
          class="rounded-borders; bg-grey-2"
          style="
          overflow: hidden;
            border-radius: 10px;
            display: flex;
            align-items: center;
            height: 55.281px;
            margin-top: -10px;
          "
        >
          <div class="leftBorderDefault"></div>


          <q-item
          :disabled="isSecondListDisabled"
            v-for="(item, index) in thirdListItems"
            :key="index"
            clickable
            v-ripple
            style="flex-grow: 1"
          >
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium"
                >{{ item.title }}</q-item-label
              >
            </q-item-section>
            <q-item-section side>
              <q-item-label class="text-weight-medium q-mr-sm">{{
                item.progress
              }}</q-item-label>
            </q-item-section>
            <q-btn
              class="q-mr-sm"
              text-color="black"
              round
              icon="keyboard_arrow_right"
              color="grey-4"
              size="sm"
            />
          </q-item>
        </q-list>
      </div>
 <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
        <q-list
          fullwidth
          rounded
          padding
          dense
          class="rounded-borders; bg-grey-2"
          style="
          overflow: hidden;
            border-radius: 10px;
            display: flex;
            align-items: center;
            height: 55.281px;
            margin-top: -10px;
          "
        >
          <div class="leftBorderDefault"></div>


          <q-item
          :disabled="isSecondListDisabled"
            v-for="(item, index) in fourthListItems"
            :key="index"
            clickable
            v-ripple
            style="flex-grow: 1"
          >
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium"
                >{{ item.title }}</q-item-label
              >
            </q-item-section>
            <q-item-section side>
              <q-item-label class="text-weight-medium q-mr-sm">{{
                item.progress
              }}</q-item-label>
            </q-item-section>
            <q-btn
              class="q-mr-sm"
              text-color="black"
              round
              icon="keyboard_arrow_right"
              color="grey-4"
              size="sm"
            />
          </q-item>
        </q-list>
      </div>
 <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
        <q-list
          fullwidth
          rounded
          padding
          dense
          class="rounded-borders; bg-grey-2"
          style="
          overflow: hidden;
            border-radius: 10px;
            display: flex;
            align-items: center;
            height: 55.281px;
            margin-top: -10px;
          "
        >
          <div class="leftBorderDefault"></div>


          <q-item
          :disabled="isSecondListDisabled"
            v-for="(item, index) in fifthListItems"
            :key="index"
            clickable
            v-ripple
            style="flex-grow: 1"
          >
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium"
                >{{ item.title }}</q-item-label
              >
            </q-item-section>
            <q-item-section side>
              <q-item-label class="text-weight-medium q-mr-sm">{{
                item.progress
              }}</q-item-label>
            </q-item-section>
            <q-btn
              class="q-mr-sm"
              text-color="black"
              round
              icon="keyboard_arrow_right"
              color="grey-4"
              size="sm"
            />
          </q-item>
        </q-list>
      </div>
<div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
        <q-list
          fullwidth
          rounded
          padding
          dense
          class="rounded-borders; bg-grey-2"
          style="
          overflow: hidden;
            border-radius: 10px;
            display: flex;
            align-items: center;
            height: 55.281px;
            margin-top: -10px;
          "
        >
          <div class="leftBorderDefault"></div>


          <q-item
          :disabled="isSecondListDisabled"
            v-for="(item, index) in sixthListItems"
            :key="index"
            clickable
            v-ripple
            style="flex-grow: 1"
          >
            <q-item-section>
              <q-item-label
                class="rounded-list-subtitle2 text-left text-weight-medium"
                >{{ item.title }}</q-item-label
              >
            </q-item-section>
            <q-item-section side>
              <q-item-label class="text-weight-medium q-mr-sm">{{
                item.progress
              }}</q-item-label>
            </q-item-section>
            <q-btn
              class="q-mr-sm"
              text-color="black"
              round
              icon="keyboard_arrow_right"
              color="grey-4"
              size="sm"
            />
          </q-item>
        </q-list>
      </div>

      <div
        style="
          display: flex;
          justify-content: center;
          position: fixed;
          z-index: 999;
          padding: 15px;
          width: 100%;
          box-sizing: border-box;
          background-color: white;
          bottom: 0px;
        "
        class="shadow-5"
      >
        <div style="display: flex">
          <q-btn
            no-caps
            rounded
            label="Start"
            color="primary"
            @click="goNext"
            style="width: 357px; height: 49px"
            to="/councilReq"
            class="q-ma-sm"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <SkelDash />
    </div>
  </q-page>
</template>

<script>
import SkelDash from "../../components/skeleton/SkelOver.vue";
export default {
  data() {
    return {
      isSecondListDisabled: true,
      items: [{ title: "Council Requirement", progress: "0/7" }],
      secondListItems: [{ title: "Interior Check", progress: "0/5" }],
      thirdListItems: [{ title: "Engine Fluid Level", progress: "0/5" }],
      fourthListItems: [{ title: "Lightning Check", progress: "0/5" }],
      fifthListItems: [{ title: "Wiper and Washers", progress: "0/5" }],
      sixthListItems: [{ title: "Tyre Check", progress: "0/5" }],

      selectedOption: null,
      dropdownOptions: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
      ],
      flag: false,
    };
  },
  components: {
    SkelDash,
  },
  created() {
    setTimeout(() => {
      this.flag = true;
    }, 1000);
  },
  methods: {
    viewDetails() {},
    goBack() {
      this.$router.go(-1);
    },
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
  margin-left: 10px;
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
.details {
  flex-grow: 1;
  margin-left: 10px;
}

.q-btn {
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
  color: #0b0c0b;
}

.btngroup {
  width: 170px;
}
.rounded-list-container {
  border-radius: 12px;
  border: 2px solid red;
  overflow: hidden;
}

.rounded-list-title {
  font-weight: bold;
}

.rounded-list-subtitle {
  color: red;
}
.rounded-list-subtitle2 {
  color: #191b17;
}
.rounded-box {
  border-radius: 12px;
  overflow: hidden;
}

.rounded-borders {
  border-radius: 10px;
  overflow: hidden;
}

.q-pt-xs {
  padding-top: 2px;
}
</style>
