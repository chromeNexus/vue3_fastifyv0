<template>
  <aside class="section">
    <!-- 
      anonymous acct 
     <h3>Sign in Anonymously</h3>
    <button class="button" @click="auth0.signInAnonymously()">Sign In</button>
    
    <h3>Sign in with Google</h3>
    -->
    <button class="button" @click="signUp()">Google Sign In</button>
    <div v-if="newUser">
      <h3>Sign Up for a New Account</h3>
      <a href="#" @click="newUser = false">Returning User?</a>
    </div>

    <div v-else>
      <h3>Sign In with Email</h3>
      <a href="#" @click="newUser = true">New user?</a>
    </div>

    <label for="email">Email</label>
    <br />
    <input v-model="email" placeholder="email" type="email" class="input" />

    <label for="password">Password</label>
    <br />
    <input v-model="password" type="password" class="input" />

    <br />

    <button
      class="button is-info"
      :class="{ 'is-loading': loading }"
      @click="signInOrCreateUser()"
    >
      {{ newUser ? "Sign Up" : "Login" }}
    </button>

    <p class="has-text-danger" v-if="errorMessage">{{ errorMessage }}</p>
  </aside>
</template>

<script>
// *********************************************use as template **********
import { auth0 } from "../firebase.js";
import firebase from "firebase/app";
import { useAuth } from "@vueuse/firebase";
const { auth } = firebase;
const { GoogleAuthProvider } = auth;
const { isAuthenticated, user } = useAuth();

export default {
  data() {
    return {
      auth0,
      newUser: false,
      email: "",
      password: "",
      errorMessage: "",
      loading: false,
      isAuthenticated,
      user,
      auth,
    };
  },
  methods: {
    async signInOrCreateUser() {
      this.loading = true;
      this.errorMessage = "";
      try {
        if (this.newUser) {
          await auth0.createUserWithEmailAndPassword(this.email, this.password);
        } else {
          await auth0.signInWithEmailAndPassword(this.email, this.password);
        }
      } catch (error) {
        this.errorMessage = error.message;
      }
      this.loading = false;
    },
    async signUp() {
      await auth().signInWithPopup(new GoogleAuthProvider());
      // console.log(res)
    },
  },
};
</script>
