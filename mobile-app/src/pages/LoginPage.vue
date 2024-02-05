<template>
  <div class="login-container">
    <dark-mode-toggle />
    <div class="logo-section">

      <img src="/assets/Logo.png" alt="Logo" class="logo-image" />
    </div>

    <div class="login-section q-mb-md q-dark">
      <text-h1 class="login-title">Log-in</text-h1>
      <p class="sub-title">Please Sign in to continue</p>

      <q-input
        v-model="driverName"
        dense
        outlined
        placeholder="Driver Name"
        class="input-field q-pb-md"
      ></q-input>


      <q-input
        v-model="password"
        outlined
        dense
        type="password"
        placeholder="Password"
        class="input-field"
      ></q-input>


      <div class="row checkbox-link-container">
        <div class="col-md-6 col-xs-6 col-sm-6">

          <q-checkbox
            v-model="keepLoggedIn"
            label="Keep me logged in"
            class="keep-logged-in-checkbox q-mt-sm text-left q-ml-sm q-mr-sm"
          />
        </div>
        <div class="col-md-6 col-xs-6 col-sm-6">

          <router-link to="/ForgotPassword">
            <q-btn
              flat
              no-caps
              color="black"
              label="Forgot Password?"
              class="forgot-password q-mt-sm"
            />
          </router-link>
        </div>
      </div>

      <q-btn
        color="primary"
        no-caps
        rounded
        label="Login"
        @click="handleLogin"
        class="login-button q-px-lg q-py-sm q-mt-xl rounded-button"
        to="/dashboard"
      />


      <p class="signup-option q-mt-md">
        Don't have an account? <a href="./SignupUser">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script>
import DarkModeToggle from "./DarkModeToggle.vue";
export default {
  components: {
    DarkModeToggle,
  },
  data() {
    return {
      driverName: "",
      password: "",
      keepLoggedIn: false,
    };
  },
  methods: {
    handleLogin() {},
  },
};
</script>

<style scoped>
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
  max-width: 100%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
}

.sub-title {
  font-size: 12px;
  color: #919191;
  margin-top: 8px;
}

.input-field {
  width: 100%;
  max-width: 420px;
  margin-top: 16px;
}



.login-button {
  margin-top: 56px;
  width: 265px;
  height: auto;
}

.signup-option {
  font-size: 10px;
  color: #777777;
  margin-top: 16px;
}

.signup-option a {
  color: #3498db;
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
  margin-top: 12%;
  margin-left: -8px;

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
  margin-left: 10px;

}
.checkbox-link-container {
  display: flex;
  align-items: center;
}
.rounded-button {
  border-radius: 16px;
  width: 265px;
  height: 45px;
}
.logo-section {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

.logo-image {
  width: 100px;
  height: auto;
}
</style>
