import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/functions";
import { ref } from "vue";
import { useAuth } from "@vueuse/firebase";

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

//const user = ref(null);

firebase.initializeApp(firebaseConfig);

// ***** TESTING VARS reADD******const auth = firebase.auth();
// export const auth = firebase.auth();
const { auth } = firebase; // exchange with readd
const { GoogleAuthProvider } = auth; // exchange with readd
export const { isAuthenticated, user } = useAuth(); // remove when removing readd
export async function signIn() {
  await auth().signInWithPopup(new GoogleAuthProvider()); //remove when removing readd
}
//testing ******** auth.onAuthStateChanged((u) => { user.value = u; });
firebase.auth().onAuthStateChanged((u) => {
  user.value = u;
});

export async function logout() {
  await auth().signOut();
}

export async function google() {
  await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()); //auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
export const db = firebase.firestore();
export const storage = firebase.storage();
export const wf = firebase.functions();
// added to test alt auth
export const fb = firebase;
/* ************
Part 2
***************** */
export function useSignup() {
  const email = ref("");
  const password = ref("");

  async function signup() {
    if (email.value == "" || password.value == "") return;
    //auth.createUserWithEmailAndPassword(
    const creds = await firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value);

    if (!creds.user) throw Error("Signup failed");

    user.value = creds.user;
  }

  return {
    email,
    password,
    signup,
  };
}
/* ************
Part 3
***************** */

export async function useLogin() {
  const email = ref("");
  const password = ref("");

  async function login() {
    const resp = await firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value);

    if (!resp.user) throw Error("No user");

    user.value = resp.user;
  }

  return {
    email,
    password,
    login,
  };
}
