<template>
  <q-card class="q-ma-md">
    <q-expansion-item v-model="expanded" expand-separator :label="question.title" class="text-subtitle2">
      <q-separator />

      <q-card>
        <q-card-section class="q-pt-md q-pb-md">
          <!-- Yes and No Buttons -->
          <div class="centered-container">
            <q-btn @click="answerQuestion('Yes')" outline label="Yes" class="q-mr-md" style="width: 78px" />
            <q-btn @click="answerQuestion('No')" outline label="No" style="width: 78px" />
          </div>

          <!-- Increment and Decrement Buttons -->
          <div class="centered-container">
            <q-btn @click="increment" outline label="+" class="q-mr-md" style="width: 78px" />
            <q-item-label class="text-weight-medium">{{ quantity }}</q-item-label>
            <q-btn @click="decrement" outline label="-" style="width: 78px" />
          </div>

          <!-- Additional Question -->
          <q-item-label class="q-pt-md text-weight-medium text-caption q-ml-md" color="blue-grey-6">Additional Question</q-item-label>
          <q-input dense v-model="additionalQuestion" label="Type here" outlined style="width: 324px;" />

          <!-- Image Section -->
          <q-item-label class="q-pt-md text-weight-medium text-caption q-ml-md" color="blue-grey-6">Image</q-item-label>
          <q-img
            src="https://placekitten.com/300/200" 
            alt="Image"
            style="width: 100%; max-width: 300px; height: auto;"
          />
        </q-card-section>
      </q-card>
    </q-expansion-item>
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
      quantity: ref(1),
      additionalQuestion: ref(""),
    };
  },
  methods: {
    answerQuestion(answer) {
      // Handle the answer logic as needed
      console.log(`Selected answer: ${answer}`);
    },
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity--;
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
</style>
