<template>
  <form @submit.prevent="signup">
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <a href="#" class="btn" @click="google"> Signup with Google </a>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { watch, ref } from "vue";
import { user, google, useSignup } from "../server/firebase";
import router from "../router";
export default {
  // name: SignUp,
  props: {
    loginReturnUrl: { type: String, default: "/" },
  },
  setup(props) {
    const email = ref("");
    const password = ref("");
    watch(
      () => user.value,
      (newUser) => {
        if (newUser) {
          router.push(props.loginReturnUrl);
        }
      }
    );
    return {
      ...useSignup(),
      google,
      email,
      password,
    };
  },
};
</script>

<!-- 
<template>
  <div class="login">
    <pre v-if="isAuthenticated">{{ user }}</pre>
    <div v-else>
      <button @click="signIn">Sign In with Google</button>
    </div>
  </div>
</template>
-->
