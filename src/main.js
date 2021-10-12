import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";

Vue.config.productionTip = false;

//
// Firebase
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
