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
            Sos Details
          </q-toolbar-title>
          <q-btn flat round dense color="black" icon="more_vert" />
        </q-bar>
      </q-header>
      <q-separator />
      <div style="padding-bottom:85px;">
      <div class="q-pa-md q-gutter-md">
        <q-list padding class="rounded-borders" fullwidth>
          <q-item clickable v-ripple>
            <q-item-section avatar top>
              <q-avatar color="grey-9" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Emergency Number</q-item-label>
              <q-item-label caption>999</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn flat round dense icon="more_horiz" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar top>
              <q-avatar color="grey-9" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Hospital</q-item-label>
              <q-item-label caption>123456789</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn flat round dense icon="more_horiz" />
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar top>
              <q-avatar color="grey-9" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Fire Department</q-item-label>
              <q-item-label caption>1234567890</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn flat round dense icon="more_horiz" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar top>
              <q-avatar color="grey-9" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Hospital</q-item-label>
              <q-item-label caption>1234567890</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-btn flat round dense icon="more_horiz" />
            </q-item-section>
          </q-item>
        </q-list>
        <div class="flex-container">
          <q-btn
            flat
            @click="addMoreContacts"
            label="+ Add More Contact"
            class="q-mb-md"
            color="primary"
          />
        </div>
      </div>
      </div>
    </div>
    <div v-else>
      <SkelSos />
    </div>
  </q-page>
</template>

<style scoped>
.q-toolbar-title {
  font-size: 18px;
}

.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-item {
  margin-top: 40px;
}
</style>
<script>
import SkelSos from "../components/skeleton/SkelSos.vue";
export default {
  data() {
    return {
      flag: false,
    };
  },
  components: {
    SkelSos,
  },
  methods: {
    addMoreContacts() {
      console.log("Adding more contacts...");
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {
    setTimeout(() => {
      this.flag = true;
    }, 1000);
  },
};
</script>
