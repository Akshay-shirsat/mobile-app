<template>
  <q-card class="q-ma-md">
    <div class="q-pa-sm" fullwidth>
      <q-expansion-item
        v-model="expanded"
        :label="question.label"
        class="text-subtitle2"
      >
        <q-separator />

        <q-card>
          <q-card-section class="q-pt-md q-pb-md">
            <div class="centered-container" fullwidth>
              <q-btn
                no-caps
                flat
                v-for="(option, index) in question.options"
                :key="index"
                :label="option"
                class="q-mr-xl"
                style="
                  display: flex;
                  justify-contain: space-between;
                  width: 77.79px;
                  height: 23px;
                  border: 1px solid rgb(190, 176, 176);
                "
              />
            </div>
            <q-item-label
              class="q-pt-md text-weight-medium text-caption subline"
              >Upload Photos</q-item-label
            >
            <div class="centered-upload" fullwidth>
              <q-btn
                no-caps
                flat
                label="+ Upload"
                @click="openFileDialog"
                style="
                  width: 324px;
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
                style="width: 94%"
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
  margin-right: 25px;
}
</style>
