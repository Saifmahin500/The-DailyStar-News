
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCnvCizlbu9fsjkbRl3Wo50h9l6Ucc8MHU",
  authDomain: "the-dailystar-news.firebaseapp.com",
  projectId: "the-dailystar-news",
  storageBucket: "the-dailystar-news.appspot.com",
  messagingSenderId: "909058390359",
  appId: "1:909058390359:web:47e1ba4a1a7fabc1132612"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
