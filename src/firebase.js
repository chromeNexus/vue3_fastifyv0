import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { ref, onUnmounted, computed } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyA4L9_-VBgrZZmRi5f8gz02JUkAuQm47R8", //process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "pigeonpost-1551079261158.firebaseapp.com", //process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  //databaseURL: //process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: "pigeonpost-1551079261158", //process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: "pigeonpost-1551079261158.appspot.com", //process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "690692730948", //process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:690692730948:web:4c2a04c418c3d5e06c4c11", //process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: "G-9H9D418KQ0", //process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth0 = firebase.auth();
export const storage = firebase.storage();

export function useAuth() {
  const user = ref(null);
  const unsubscribe = auth0.onAuthStateChanged((_user) => (user.value = _user));
  onUnmounted(unsubscribe);
  const Login = computed(() => user.value !== null);

  const signIn = async () => {
    const googleProvider = new firebase.auth0.GoogleAuthProvider();
    const currentUser = await auth0.signInWithPopup(googleProvider);
    () => {
      console.log(currentUser);
    };
  };
  const signOut = () => auth0.signOut();
  return { user, Login, signIn, signOut };
}
