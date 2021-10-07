import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
//import "firebase/storage";
//import "firebase/functions";
//import { useAuth } from "@vueuse/firebase";
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
// const { auth } = firebase;
const auth = firebase.auth();
// export const { isAuthenticated, user } = useAuth();
export function useAuth() {
  const user = ref(null);
  const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user));
  onUnmounted(unsubscribe);
  const isLogin = computed(() => user.value !== null);

  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const currentUser = await auth.signInWithPopup(googleProvider);
    () => {
      console.log(currentUser);
    };
  };
  const signOut = () => auth.signOut();
  return { user, isLogin, signIn, signOut };
}
/*
const firestore = firebase.firestore()
const messagesCollection = firestore.collection('messages')
const messagesQuery = messagesCollection.orderBy('createdAt', 'desc').limit(100)
const filter = new Filter()

export function useChat() {
  const messages = ref([])
  const unsubscribe = messagesQuery.onSnapshot(snapshot => {
    messages.value = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .reverse()
  })
  onUnmounted(unsubscribe)

  const { user, isLogin } = useAuth()
  const sendMessage = text => {
    if (!isLogin.value) return
    const { photoURL, uid, displayName } = user.value
    messagesCollection.add({
      userName: displayName,
      userId: uid,
      userPhotoURL: photoURL,
      text: filter.clean(text),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  return { messages, sendMessage }
}
*/
