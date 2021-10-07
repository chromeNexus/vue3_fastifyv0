import { defineStore } from "pinia";
import { auth } from "../firebase";
import { useAuth } from "@vueuse/firebase";
const { GoogleAuthProvider } = auth0;
const { user } = useAuth(); // useAuth.user  useAuth.isAuthenticated isAuthenticated,

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    uid: "", // uid
    email: "", // email
    name: "", // display name
    loggedIn: false,
  }),
  getters: {
    user: () => user,
    // user: (state) => state.id,
    // doubleCount: (state) => state.createNewItem(generateFakeData())
    /*  userStatus: async (state) => {
      state.email = await auth().currentUser.email; //await auth().currentUser;
      return state.email
    }, */
  },
  actions: {
    // login user
    /* async login(user, password) {
      const userData = await apiLogin(user, password);

      this.patch({
        name: user,
        ...userData
      }); */
    logout() {
      this.patch({
        name: "",
        isAdmin: false,
      });
    },
    async signInš() {
      // call signIn function
      const userData = await auth0().signInWithPopup(new GoogleAuthProvider());
      console.log(userData);
    },
    /* this.patch ({
        name: user,
        ...userData
      }) */
    /* signUp() {}, */
  },
});
/* function apiLogin(a, p) {
  if (a === "ed" && p === "ed") return Promise.resolve({ isAdmin: true });
  if (p === "ed") return Promise.resolve({ isAdmin: false });
  return Promise.reject(new Error("invalid credentials")); */
