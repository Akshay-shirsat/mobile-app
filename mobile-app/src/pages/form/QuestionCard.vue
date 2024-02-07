<template>
  <q-card class="q-ma-md">
    <div class="q-pa-sm" style="max-width: 650px">
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
                v-for="(option, index) in question.options"
                :key="index"
                outline
                :label="option"
                class="q-mr-md"
                style="width: 78px"
              />
            </div>
            <q-item-label
              class="q-pt-md text-weight-medium text-caption q-ml-md"
              color="blue-grey-6"
              >Upload Photos</q-item-label
            >
            <div class="centered-upload" fullwidth>
              <q-btn
                text-color="black"
                label="+ Upload"
                @click="openFileDialog"
                style="
                  width: 324px;
                  background-color: #d9d9d9;
                  margin-top: 10px;
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
                class="q-pt-md text-weight-medium text-caption q-ml-md"
                color="blue-grey-6"
                >Notes</q-item-label
              >
            </q-item-section>
            <div class="q-pa-md" fullwidth>
              <q-input
                dense
                type="textarea"
                label="Add Notes"
                outlined
                color="grey"
                style="width: 100%"
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
}
</style>
