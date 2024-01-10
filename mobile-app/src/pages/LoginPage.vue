<template>
  <div>
    <!-- Login Section -->
    <div class="login-section q-mb-md">
      <text-h1 class="login-title">Log-in</text-h1>
      <p class="sub-title">Please Sign in to continue</p>

      <!-- Driver Name Input -->
      <q-input
        v-model="driverName"
        dense
        outlined
        placeholder="Driver Name"
        class="input-field q-pb-md"
      ></q-input>

      <!-- Password Input -->
      <q-input
        v-model="password"
        outlined
        dense
        type="password"
        placeholder="Password"
        class="input-field"
      ></q-input>
      <div class="row">
        <div class="col-md-6 col-xs-6 col-sm-6">
          <!-- Keep me logged in checkbox -->
          <q-checkbox
            v-model="keepLoggedIn"
            label="Keep me logged in"
            class="keep-logged-in-checkbox q-mt-sm text-left"
          />
        </div>
        <div class="col-md-6 col-xs-6 col-sm-6">
          <!-- Forgot Password link -->
          <q-btn
            flat
            no-caps
            color="black"
            label="Forgot Password?"
            class="forgot-password q-mt-sm text-right"
          />
        </div>
      </div>
      <div class="checkbox-link-container"></div>
      <!-- Login Button -->

      <q-btn
        color="primary"
        no-caps
        rounded
        label="Login"
        @click="handleLogin"
        class="login-button q-px-lg q-py-sm q-mt-xl"
      />

      <!-- Sign Up Option -->
      <p class="signup-option q-mt-md">
        Don't have an account? <a href="#">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      driverName: "",
      password: "",
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

.forgot-password {
  font-size: 14px;
  color: #3498db; /* Adjust the color as needed */
}

.login-button {
  margin-top: 56px;
  width: 215px;
  height: auto;
}

.signup-option {
  font-size: 10px;
  color: #777777;
  margin-top: 16px;
}

.signup-option a {
  color: #3498db; /* Adjust the color as needed */
  text-decoration: underline;
}
.keep-logged-in-checkbox {
  color: #999;
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  width: 200px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 15%;
}
.forgot-password {
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  color: #3498db;
  font-style: normal;
  width: 212px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 12%;
}
.checkbox-link-container {
  display: flex;
  align-items: center;
}
.rounded-button {
  border-radius: 16px;
  width: 200px;
  height: 45px;
}
</style>
