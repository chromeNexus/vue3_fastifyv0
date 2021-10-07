<template>
  <div>
    <slot name="user" :user="user"></slot>
  </div>
</template>

<script>
import { auth0 } from "../firebase";
import { ref } from "vue";
export default {
  setup() {
    const user = ref(null);
    const unsubscribe = auth0.onAuthStateChanged(
      (firebaseUser) => (user.value = firebaseUser)
    );

    return {
      user,
      unsubscribe,
    };
  },
  Unmounted() {
    this.unsubscribe();
  },
};
</script>
