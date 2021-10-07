import { generateFakeData } from "../utils/item.js";
import { defineStore } from "pinia";
// import { readonly } from "vue";
export const useMainStore = defineStore({
  id: "mainStore",
  state: () => ({
    items: [],
    count: 0,
    name: "",
  }),
  getters: {
    count: (state) => state.items.length,
    // doubleCount: (state) => state.createNewItem(generateFakeData())

    doubleCount() {
      return this.items.length * 2;
    },
  },

  actions: {
    createNewItem(item) {
      if (!item) return;
      this.items.push(item);
    },

    updateItem(id, payload) {
      if (!id || !payload) return;
      const index = this.findIndexById(id);

      if (index !== -1) {
        this.items[index] = generateFakeData();
      }
    },

    deleteItem(id) {
      const index = this.findIndexById(id);
      if (index === -1) return;
      this.items.splice(index, 1);
    },

    clear() {
      return (this.items.length = 0);
    },
    erase() {
      return (this.items.length = 0);
    },
    findIndexById(id) {
      return this.items.findIndex((item) => item.id === id);
    },
  },
});
