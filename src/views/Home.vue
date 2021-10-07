<template>
  <div id="nav">
    <NavBar />
  </div>
  <div class="section">
    <h1><strong>Composition API </strong>Demo</h1>
    <div v-if="isAuthenticated">
      <p>Current User: {{ user.uid }}</p>
      <User>
        <!-- slot user =  user object -->
        <template v-slot:user="{ user }">
          <div v-if="user">
            <h3>User Profile</h3>
            <UserProfile :user="user" />
          </div>
          <Login v-else />
        </template>
      </User>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import User from "../components/User.vue";
import UserProfile from "../components/UserProfile.vue";
// import ChatList from "../ChatList";
import { inject, computed } from "vue";
// const { auth } = firebase;
import { useAuth } from "@vueuse/firebase";
import NavBar from "../components/NavBar.vue";
// const { GoogleAuthProvider } = auth;
const { isAuthenticated, user } = useAuth();

export default {
  components: {
    NavBar,
    Login,
    User,
    UserProfile,
    user,
    //4 ChatList
  },
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
      isAuthenticated,
      user,
    };
  },
};
</script>
