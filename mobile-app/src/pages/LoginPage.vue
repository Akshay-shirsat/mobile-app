<template>
  <div class="login-container ">
    <q-card flat class="topCard">
      <q-card-section class="text-center q-mt-sm">
        <img src="~assets/logo.png" alt="Logo" class="logo-image" />
        <div class="loginTitleHead">
          <text-h1 class="login-title text-h5 text-bold titleHead">Log-in</text-h1>
          <p class="titleHeadCaption">Please Sign in to continue</p>
        </div>
<div class="inputbox">
        <q-input
        fullwidth
          v-model="driverName"
          outlined
          placeholder="Driver Name"
          class="input-field q-pb-md"
        />
</div>
<div class="inputbox">
        <q-input
          v-model="password"
          outlined
          fullwidth
          type="password"
          placeholder="Password"
class="input-field "
        />
</div>
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


.sub-title {
  font-size: 12px;
  color: #919191;
  margin-top: 8px;
}

.input-field {
  width: 100%;

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
.logo-image {
  width: 180px;
  height: auto;
}
</style>
