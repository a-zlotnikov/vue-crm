import Vue from "vue";
import Vuelidate from "vuelidate/src";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filter/date.filter";
import messagePlugin from '@/utils/message.plugin';
import "materialize-css/dist/js/materialize.min";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin)
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyAFyPHIBPTzdlNUyGuSiGOAPzuU3MbjgaA",
  authDomain: "vue-ohmy-crm.firebaseapp.com",
  databaseURL: "https://vue-ohmy-crm.firebaseio.com",
  projectId: "vue-ohmy-crm",
  storageBucket: "vue-ohmy-crm.appspot.com",
  messagingSenderId: "742987364006",
  appId: "1:742987364006:web:dfc82437d3ab0b29232667",
  measurementId: "G-REB13F64ME"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({ 
      router,
      store,
      render: h => h(App)
    }).$mount("#app");  
  }
})

