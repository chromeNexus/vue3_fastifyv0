import { createApp } from "vue";
import App from "./App.vue";
import { firestorePlugin } from "vuefire";
import router from "./router";
import { createPinia } from "pinia";
import "./index.css";
//import "./assets/tailwind.css";
//import './index.css'

import _ from 'lodash'

// vue.use(firestorePlugin)
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)
const app = createApp(App)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = _.upperFirst(
    _.camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  app.component(componentName, componentConfig.default || componentConfig)
})

app.use(firestorePlugin).use(createPinia()).use(router).mount('#app')


/* createApp(App)
  .use(firestorePlugin)
  .use(createPinia())
  .use(router)
  .mount("#app");
 */