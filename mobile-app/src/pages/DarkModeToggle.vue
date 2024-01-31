<template>
  <q-btn
    icon="brightness_4"
    @click="toggleDarkMode"
    flat
    dense
    round
    color="primary"
    class="dark-mode-toggle"
  />
</template>

<script>
export default {
  methods: {
    toggleDarkMode() {
      console.log('Toggle dark mode called');
      this.$q.dark.toggle();
    },
  },
};
</script>

<style scoped>
.dark-mode-toggle {
 color: #fff;
}
</style>
