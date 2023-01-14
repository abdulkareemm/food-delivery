import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD7oGb-X8nqCqF6lDlHt_KSRo1xc1ikOEk",
  authDomain: "restaurant-delivery-f62f3.firebaseapp.com",
  databaseURL: "https://restaurant-delivery-f62f3-default-rtdb.firebaseio.com",
  projectId: "restaurant-delivery-f62f3",
  storageBucket: "restaurant-delivery-f62f3.appspot.com",
  messagingSenderId: "74167762255",
  appId: "1:74167762255:web:cee9f9ea3dd08c9b96593a",
};

const app = getApps.length>0?getApp:initializeApp(firebaseConfig)
const fireStore = getFirestore(app)
const storge = getStorage(app)
export {app,fireStore,storge]
    ['POIUYRE       QWESDRFTYU
}