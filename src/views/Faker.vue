<template>
  <h1>Grocery List App</h1>
  <br />
  <h3>({{ mainStore.count ? mainStore.count : 0 }})</h3>
  <button @click="createItem">New Item</button> |
  <button @click="clear()">Clear</button> |
  <button @click="deleteAll()">Reset</button>
  <div>
    <div
      v-for="(item, index) in items"
      :key="index"
      style="
        background-color: #f5f5f5;
        padding: 10px;
        margin-bottom: 10px;
        margin-top: 10px;
      "
    >
      <code>{{ item }}</code>
      <button @click="deleteItem(item.id)">Delete</button>
      <button @click="updateItem(item.id)">Update</button>
    </div>
    <!-- <div>
      <code>{{ mainStore.doubleCount }}</code>
    </div> -->
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import { generateFakeData } from "../utils/item.js";
import { useMainStore } from "../stores/main.js";

export default defineComponent({
  name: "App",
  setup() {
    const items = ref([]);
    // const itemList = ref(items)
    const mainStore = useMainStore();
    onMounted(() => {
      items.value = mainStore.items;
    });

    function createItem() {
      mainStore.createNewItem(generateFakeData());
      //  console.log(items.value.length)
    }
    function deleteItem(id) {
      mainStore.deleteItem(id);
    }
    function updateItem(id) {
      mainStore.updateItem(id, generateFakeData());
    }
    async function clear() {
      await mainStore.clear();
      console.log(items.value.length);
    }
    function deleteAll() {
      computed(() => {
        return mainStore.items.$reset();
      });
      //computed(() => mainStore.$patch({name: "Will", items: [] }))
      //console.log(mainStore.items.length);
      //await mainStore.$patch({ name: "Will", items: [] });
      //console.log(mainStore.$state)
      //computed(() => mainStore.$reset())//.$patch({ name: "Will", items: [] }));
      //console.log(mainStore.$state);
      //console.log("patched state: " + mainStore.$id + " " + mainStore.value.$name + " " + mainStore.$quantity);
      //computed(() => mainStore.$state({ items: [] }));
      //mainStore.$state = {name: "Jay", items: [] };
      //console.log(mainStore.$state);
      //console.log(
      //"username:" + mainStore.name + " " + "items: " + mainStore.items.length
      //);
      //await mainStore.$reset();
      //console.log("current user name: " + mainStore.name);
      // console.log(mainStore);
      //console.log(items.value.length);
      //  return mainStore
    }
    /*  async function get() {
      await mainStore.doubleCount();
    } */
    return {
      items,
      createItem,
      deleteItem,
      updateItem,
      mainStore,
      clear,
      deleteAll,
      // state: computed(() => mainStore.$reset()),
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
