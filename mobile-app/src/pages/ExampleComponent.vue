<template>
  <div>
    <p>Count: {{ $store.count }}</p>
    <button @click="$store.increment()">Increment</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExampleComponent',
  computed: {
    count() {
      return this.$store.count
    }
  },
  methods: {
    increment() {
      this.$store.increment()
    }
  }
})
</script>
