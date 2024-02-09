<template>
  <div class="login-container">
    <q-card flat class="topCard">
      <q-card-section class="text-center q-mt-sm">
        <img src="~assets/logo.png" alt="Logo" class="logo-image" />
        <div class="loginTitleHead">
          <text-h1 class="login-title text-h5 text-bold titleHead">Log-in</text-h1>
          <p class="titleHeadCaption">Please Sign in to continue</p>
        </div>

        <q-input
          v-model="driverName"

          outlined
          placeholder="Driver Name"
          class="input-field q-pb-md"
        />

        <q-input
          v-model="password"
          outlined

          type="password"
          placeholder="Password"
          class="input-field"
        />
        <div class="row full-width">
          <div class="col-md-6 col-xs-6 col-sm-6">
            <q-checkbox
              v-model="keepLoggedIn"
              label="Keep me logged in"
              class="keep-logged-in-checkbox q-mt-sm text-left q-ml-sm q-mr-sm"
            />
          </div>
          <div class="col-md-6 col-xs-6 col-sm-6">
            <q-btn
              to="/ForgotPassword"
              flat
              no-caps
              color="black"
              label="Forgot Password?"
              class="forgot-password q-mt-sm"
            />
          </div>
        </div>
      </q-card-section>
      <q-card-actions class="btnDisc">
        <q-btn
          color="primary"
          no-caps
          rounded
          label="Login"
          @click="handleLogin"
          class="login-button q-mt-xl"
          to="/dashboard"
        />

        <p class="signup-option q-mt-md">
          Don't have an account? <a href="./SignupUser">Sign Up</a>
        </p>
      </q-card-actions>
    </q-card>
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
  padding: 16px 0;
}

.signup-option {
  font-size: 14px;
  color: #777777;
  margin-top: 16px;
}

.signup-option a {
  color: #3498db;
  text-decoration: underline;
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
  width: 180px;
  height: auto;
}
</style>
