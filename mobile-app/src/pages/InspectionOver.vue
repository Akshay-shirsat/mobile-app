<template>
  <div>
    <q-header elevated class="bg-white text-primary">
      <q-bar class="q-py-lg bg-white text-primary">
        <q-toolbar-title class="q-ml-md"> Inspection Overview </q-toolbar-title>
        <q-btn flat round dense icon="more_vert" />
      </q-bar>
    </q-header>
    <q-page-container>
      <q-page>
        <div class="flex-container">
          <div class="flex-item top-section">
            <q-item-section class="text-weight-medium q-mt-sm q-ml-sm">
              <q-item-label class="text-left">Vehicle Name</q-item-label>
              <q-item-label caption class="text-left text-caption"
                >Maruti suzuki LXI</q-item-label
              >
            </q-item-section>
            <q-item-section class="text-weight-medium q-mt-sm">
              <q-item-label class="text-left">Licence No</q-item-label>
              <q-item-label caption class="text-left text-caption"
                >ABCD12345</q-item-label
              >
            </q-item-section>
            <q-item-section class="text-weight-medium q-mt-sm">
              <q-item-label class="text-left">Vehicle No</q-item-label>
              <q-item-label class="text-left text-caption" caption
                >12345</q-item-label
              >
            </q-item-section>
          </div>

          <div class="flex-item">
            <img src="/assets/image1.png" alt="Image" class="image-right" />
          </div>
        </div>

        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <q-item-label
            class="q-pa-sm q-ml-sm text-weight-medium"
            color="grey-5"
            >Inspection Checklist</q-item-label
          >
          <div class="q-pa-md">
            <q-item-label class="text-left text-bold" lines="1"
              ><span class="text-weight-light">dd.mm.yyyy</span></q-item-label
            >
          </div>
        </div>
        <div class="rounded-box q-pt-sm q-pa-md q-gutter-sm">
          <q-list
            rounded
            padding
            dense
            class="rounded-borders; bg-grey-2"
            style="
              max-width: 768px;
              display: flex;
              align-items: center;
              height: 66.281px;
            "
          >
            <q-img
              class="q-mr-sm"
              src="/assets/Rectangle_186.png"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                  >Council Requirement</q-item-label
                >
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
          <q-list
            rounded
            padding
            dense
            class="rounded-borders; bg-grey-2"
            style="
              max-width: 768px;
              display: flex;
              align-items: center;
              height: 66.281px;
            "
          >
            <q-img
              class="q-mr-sm"
              src="/assets/Rectangle_186.png"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                  >Interior Check</q-item-label
                >
              </q-item-section>

      <!-- <q-item-label class="text-right q-ml-xl">0/7</q-item-label> -->

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
          <q-list
            rounded
            padding
            dense
            class="rounded-borders; bg-grey-2"
            style="
              max-width: 768px;
              display: flex;
              align-items: center;
              height: 66.281px;
            "
          >
            <q-img
              class="q-mr-sm"
              src="/assets/Rectangle_186.png"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                  >Engine Fluid Level</q-item-label
                >
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
          <q-list
            rounded
            padding
            dense
            class="rounded-borders; bg-grey-2"
            style="
              max-width: 768px;
              display: flex;
              align-items: center;
              height: 66.281px;
            "
          >
            <q-img
              class="q-mr-sm"
              src="/assets/Rectangle_186.png"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                  >Lightning Check
                </q-item-label>
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
          <q-list
            rounded
            padding
            dense
            class="rounded-borders; bg-grey-2"
            style="
              max-width: 768px;
              display: flex;
              align-items: center;
              height: 66.281px;
            "
          >
            <q-img
              class="q-mr-sm"
              src="/assets/Rectangle_186.png"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                  >Wiper and washer</q-item-label
                >
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
          <q-list
            rounded
            padding
            dense
            class="rounded-borders; bg-grey-2"
            style="
              max-width: 768px;
              display: flex;
              align-items: center;
              height: 66.281px;
            "
          >
            <q-img
              class="q-mr-sm"
              src="/assets/Rectangle_186.png"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                  >Completed</q-item-label
                >
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
          <q-list
            rounded
            padding
            dense
            class="rounded-borders; bg-grey-2"
            style="
              max-width: 768px;
              display: flex;
              align-items: center;
              height: 66.281px;
            "
          >
            <q-img
              class="q-mr-sm"
              src="/assets/Rectangle_186.png"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                  >Wiper and washer</q-item-label
                >
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
          <q-list
            rounded
            padding
            dense
            class="rounded-borders; bg-grey-2"
            style="
              max-width: 768px;
              display: flex;
              align-items: center;
              height: 66.281px;
            "
          >
            <q-img
              class="q-mr-sm"
              src="/assets/Rectangle_186.png"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                  >Wiper and washer</q-item-label
                >
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
          <q-list
            rounded
            padding
            dense
            class="rounded-borders; bg-grey-2"
            style="
              max-width: 768px;
              display: flex;
              align-items: center;
              height: 66.281px;
            "
          >
            <q-img
              class="q-mr-sm"
              src="/assets/Rectangle_186.png"
              alt="Image description"
              width="6px"
              height="55px"
            />
            <q-item clickable v-ripple style="flex-grow: 1">
              <q-item-section>
                <q-item-label
                  class="rounded-list-subtitle2 text-left text-weight-medium"
                  >Wiper and washer</q-item-label
                >
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
  color: #0b0c0b;
}

.btngroup {
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
  color: #191b17; /* Set the desired color for subtitles */
}
.rounded-box {
  border-radius: 12px; /* Set the desired border radius for the entire box */
  overflow: hidden; /* Hide overflow content */
}

.rounded-borders {
  border-radius: 12px; /* Set the desired border radius for the list */
  overflow: hidden; /* Hide overflow content */
}

.q-pt-xs {
  padding-top: 2px; /* Set the desired top padding for the second structure */
}

</style>
