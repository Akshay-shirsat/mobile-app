<template>
  <div>
    <dark-mode-toggle />
    <!-- Forget Password Section -->
    <div class="forget-password-section q-mb-md">
      <text-h1 class="forget-password-title">Forget Password</text-h1>
      <p class="sub-title">Enter your email to reset your password</p>

      <!-- Email Input -->
      <q-input
        v-model="email"
        dense
        outlined
        placeholder="Email"
        class="input-field q-pb-md"
      ></q-input>

      <!-- Send Reset Link Button -->
      <q-btn
        color="primary"
        no-caps
        rounded
        label="Send Reset Link"
        @click="sendResetLink"
        class="send-reset-link-button q-px-lg q-py-sm q-mt-md"
      />

      <!-- Back to Login link -->
      <router-link to="/login" class="back-to-login q-mt-md">
        Back to Login
      </router-link>
    </div>
  </div>
</template>

<script>
import DarkModeToggle from './DarkModeToggle.vue';
export default {
  components: {
    DarkModeToggle,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    sendResetLink() {
      // Implement logic to send a reset link to the provided email
      // You may want to interact with a service or make an API call here
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */

.forget-password-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  flex-shrink: 0;
  color: #4a4a4a;
  text-align: center;
  font-family: "DM Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  margin-top: 55%;
  max-width: 100%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.forget-password-title {
  font-size: 24px;
  color: #333; /* Adjust the color as needed */
  margin-top: 16px;
}

.sub-title {
  font-size: 12px;
  color: #919191;
  margin-top: 8px;
}

.input-field {
  width: 100%;
  max-width: 320px; /* Adjust as needed */
  margin-top: 16px;
}

.send-reset-link-button {
  margin-top: 36px;
  width: 215px;
  height: auto;
}

.back-to-login {
  font-size: 12px;
  color: #777777;
  margin-top: 16px;
  text-decoration: underline;
}
</style>
