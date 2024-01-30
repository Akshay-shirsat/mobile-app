<template>
  <q-card class="q-ma-md">
    <div class="q-pa-sm" style="max-width: 650px">
      <q-expansion-item v-model="expanded" :label="question.label" class="text-subtitle2">
        <q-separator />

        <q-card>
          <q-card-section class="q-pt-md q-pb-md">
            <div class="centered-container">
              <q-btn v-for="(option, index) in question.options" :key="index" outline :label="option" class="q-mr-md" style="width: 78px" />
            </div>

            <!-- Check if the question has 'date' property -->
            <template v-if="question.date">
              <q-item-label class="q-pt-md text-weight-medium text-caption q-ml-md" color="blue-grey-6">Date</q-item-label>
              <q-date v-model="selectedDate" style="width: 324px" />
            </template>

            <!-- Check if the question has 'time' property -->
            <template v-if="question.time">
              <q-item-label class="q-pt-md text-weight-medium text-caption q-ml-md" color="blue-grey-6">Time</q-item-label>
              <q-time v-model="selectedTime" style="width: 324px" />
            </template>

            <!-- Check if the question has 'allLocation' property -->
            <template v-if="question.allLocation">
              <q-item-label class="q-pt-md text-weight-medium text-caption q-ml-md" color="blue-grey-6">Address</q-item-label>
            <div class="q-pa-md" style="max-width: 300px;">
              <q-input dense v-model="text"  label="type here" outlined style="width: 324px;" />
            </div>
             <q-item-label class="q-pt-md text-weight-medium text-caption q-ml-md" color="Primary" Icon="Radar">Auto Detect My Location</q-item-label>
              <!-- Add your All Location input or component here -->
            </template>
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
      expanded: ref(false),
      selectedDate: null,
      selectedTime: null,
       text: ref('')
    };
  },
  methods: {
    // ... (you can add methods specific to this component)
  },
};
</script>

<style scoped>
/* Your styles go here */
</style>
