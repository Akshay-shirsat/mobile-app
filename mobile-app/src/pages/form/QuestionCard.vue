<template>
  <q-card class="q-ma-md">
    <div class="q-pa-md">
      <q-expansion-item
        v-model="expanded"
        :label="question.label"
        class="text-subtitle2"
        fullwidth
      >
        <q-separator class="q-mx-sm" />

        <q-card>
          <q-card-section class="q-pt-md q-pb-md">
            <div style="display: flex; justify-content: space-between">
              <q-btn
                flat
                text-color="black"
                v-for="(option, index) in question.options"
                :key="index"
                :label="option"
                class="no-shadow btnclass"
              />
            </div>

            <q-item-label
              class="q-pt-md text-weight-medium text-caption subline"
              >Upload Photos</q-item-label
            >
            <div class="centered-upload q-mr-none">
              <q-btn
                no-caps
                flat
                label="+ Upload"
                @click="openFileDialog"
                style="
                  width: 100%;
                  background-color: #d9d9d9;
                  margin-top: 10px;
                  color: #484848;
                  border-radius: 6px;
                  font-size: 12px;
                  font-weight: normal;
                "
              />
              <input
                type="file"
                ref="fileInput"
                style="display: none"
                @change="handleFileUpload"
              />
            </div>
            <q-item-section icon>
              <q-item-label
                class="q-pt-md text-weight-medium text-caption subline"
                color="blue-grey-6"
                >Notes</q-item-label
              >
            </q-item-section>
            <div class="q-pt-md" fullwidth>
              <q-input
                dense
                type="textarea"
                label="Add Notes"
                outlined
                color="grey"
                v-model="notes"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </div>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    question: Object,
  },
  data() {
    return {
      expanded: ref(true),
      notes: "",
    };
  },
  methods: {
    openFileDialog() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      console.log("Selected file:", file);
    },
  },
  watch: {
    notes(newVal) {
      if (newVal.trim().length >= 10) {
        this.expanded = false;
      }
    },
  },
};
</script>

<style scoped>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.centered-upload {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-right: 25px; */
}
</style>
