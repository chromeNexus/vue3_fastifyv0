<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div :style="{ color: store.state.colorCode }" class="counter">
      {{ store.state.counter }}
    </div>
    <div v-if="user">
          <h3>User Profile</h3>
        <UserProfile :user="user" />
    </div>
    <div class="counter-squared">
      {{ store.state.counter }}
      <sup>2</sup> =
      {{ store.getters.counterSquared() }}
    </div>
    <div class="buttons">
      <button @click="store.methods.decreaseCounter">-</button>
      <button @click="store.methods.increaseCounter">+</button>
    </div>
    <div>
      <input v-model="colorCode" placeholder="Enter color code" type="text" />
    </div>
  </div>
</template>

<script>
//import SignUp from "../components/SignUp.vue";
// import { Nav } from "../components/Nav.vue";
import { inject, computed } from "vue";
/* 
import { useAuth } from "@vueuse/firebase";
import * as firebase from "firebase/app"  // import firebase from "firebase/app";
import { useAuth } from "@vueuse/firebase";
 */
import Login from "../components/Login";
import User from "../components/User";
import UserProfile from "../components/UserProfile";
export default {
  name: "Home",
  components: {
    UserProfile, Login, User
  }
  setup() {
    const store = inject("store");
    //  using computed property protects state by only editing state within state file
    const colorCode = computed({
      get() {
        return store.state.colorCode;
      },
      set(val) {
        // console.log(val);
        store.methods.setColorCode(val);
      },
    });
    return {
      store,
      colorCode,
    };
  },
};
</script>

<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 50px;
  width: 100px;
  margin: 0 10px;
}
</style>
