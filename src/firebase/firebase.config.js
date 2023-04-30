// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLc9LRVAjdWCIVUrrzPbjCIUONJRFDjvI",
  authDomain: "the-dragon-news-8e889.firebaseapp.com",
  projectId: "the-dragon-news-8e889",
  storageBucket: "the-dragon-news-8e889.appspot.com",
  messagingSenderId: "828553545111",
  appId: "1:828553545111:web:f7f326851d2d675292b0d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;