<template>
  <nav>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/faker">Faker</router-link> |
      <router-link to="/Orders">Orders</router-link>
      <div>
        <User>
          <!-- slot user =  user object -->
          <template v-slot:user="{ user }">
            <div v-if="isAuthenticated">
              <h3>User Profile Authenticated</h3>
              <UserProfile :user="user" />
            </div>
            <button v-else @click="signIn">Google Sign In</button>
            <!-- <Login v-else /> -->
          </template>
        </User>
        <!-- <div v-if="isAuthenticated" class="login">
          <User>
            <p>Current User: {{ user.uid }}</p>
            <UserProfile :user="user" />
            <button @click="signOut">Sign Out</button>
          </User>
        </div> -->
      </div>
    </div>
  </nav>
  <!-- <div>
    <div v-if="isAuthenticated">
      <User>
        <p>Current User: {{ user.uid }}</p>
        <UserProfile :user="user" />
      </User>
    </div> 
  </div> -->
</template>

<script>
import { useAuth } from "@vueuse/firebase";
import User from "../components/User.vue";
// import Login from "../components/Login";
import UserProfile from "../components/UserProfile.vue";
const { isAuthenticated, user } = useAuth();
// const { GoogleAuthProvider } = auth;
// const { auth } = firebase;

export default {
  components: { User, UserProfile },
  setup() {
    return { user, isAuthenticated, User, UserProfile };
  },
};
</script>
