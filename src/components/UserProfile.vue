<!--
User Profile 
SignOut button
-->
<template>
  <div>
    Logged in as {{ user.uid }} <br />
    <button @click="auth.signOut()" class="button">Sign Out</button>
  </div>
</template>

<script>
import { auth0 } from "../firebase";
export default {
  data() {
    return {
      auth0,
    };
  },
  props: ["user"],
};
</script>
