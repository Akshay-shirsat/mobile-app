<template>
  <div>

    <div class="signup-user-section q-mb-md">
      <text-h1 class="signup-user-title">Sign Up</text-h1>
      <p class="sub-title">Create your account</p>


      <q-input
        v-model="userName"
        dense
        outlined
        placeholder="Driver Name"
        class="input-field q-pb-md"
      ></q-input>


      <q-input
        v-model="email"
        dense
        outlined
        placeholder="Email"
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


      <q-btn
        color="primary"
        no-caps
        rounded
        label="Sign Up"
        @click="handleSignUp"
        class="signup-button q-px-lg q-py-sm q-mt-xl"
      />


      <router-link to="/login" class="back-to-login q-mt-md">
        Already have an account? Back to Login
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleSignUp() {

    },
  },
};
</script>

<style scoped>


.signup-user-section {
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

.signup-user-title {
  font-size: 24px;
  color: #333; 
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

.signup-button {
  margin-top: 56px;
  width: 215px;
  height: auto;
}

.back-to-login {
  font-size: 10px;
  color: #777777;
  margin-top: 16px;
  text-decoration: underline;
}
</style>
