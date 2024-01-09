<template>
  <div>
    <q-bar dense class="bg-white text-black">
      <div>10:00AM</div>
      <q-space />
      <div class="custom-icon">
        <img src="/assets/Levels.png" alt="Custom Icon" />
      </div>
    </q-bar>

    <!-- Login Section -->
    <div class="login-section q-mb-md">
      <text-h1 class="login-title">Log-in</text-h1>
      <p class="sub-title">Please Sign in to continue</p>

      <!-- Driver Name Input -->
      <q-input
        v-model="driverName"
        filled
        placeholder="Driver Name"
        dense
        class="input-field"
      ></q-input>

      <!-- Password Input -->
      <q-input
        v-model="password"
        filled
        type="password"
        placeholder="Password"
        dense
        class="input-field"
      ></q-input>
      <div class="checkbox-link-container ">
      <!-- Keep me logged in checkbox -->
      <q-checkbox v-model="keepLoggedIn" label="Keep me logged in" dense class="keep-logged-in-checkbox q-mt-sm q"/>

      <!-- Forgot Password link -->
      <q-btn flat label="Forgot Password?" class="forgot-password q-mr-xl q-mt-sm" />
    </div>
      <!-- Login Button -->
      <q-btn
        color="primary"
        label="Login"
        @click="handleLogin"
        class="login-button q-mt-md"
      />

      <!-- Sign Up Option -->
      <p class="signup-option q-mt-md">Don't have an account? <a href="#">Sign Up</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      driverName: '',
      password: '',
      keepLoggedIn: false,
    };
  },
  methods: {
    handleLogin() {
      // Implement your login logic here
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */

.login-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  flex-shrink: 0;
  color: #4A4A4A;
  text-align: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  margin-top: 25%;
  max-width: 100%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}



.sub-title {
  font-size: 14px;
  color: #919191;
  margin-top: 8px;

}

.input-field {
  width: 100%;
  max-width: 300px; /* Adjust as needed */
  margin-top: 16px;
}

.forgot-password {
  font-size: 14px;
  color: #3498db; /* Adjust the color as needed */
}

.login-button {
  margin-top: 16px;
}

.signup-option {
  font-size: 14px;
  color: #666666;
  margin-top: 16px;
}

.signup-option a {
  color: #3498db; /* Adjust the color as needed */
  text-decoration: underline;
}
.keep-logged-in-checkbox {
  color: #999;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  width: 212px;
  height: 20px;
  flex-shrink: 0;
}
.forgot-password {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  color: #3498db; /* Adjust the color as needed */
  width: 220px;
height: 26px;
flex-shrink: 0;
}
.checkbox-link-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
