import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, onSnapshot, doc } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'


const firebaseConfig = {
    apiKey: "AIzaSyCBbEQmBqvjnsgupnbR-q3mKiZs-nUB6rg",
    authDomain: "busly-8343a.firebaseapp.com",
    projectId: "busly-8343a",
    storageBucket: "busly-8343a.appspot.com",
    messagingSenderId: "213277079185",
    appId: "1:213277079185:web:b6cd7898ac28bf64d0f130"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const data = document.querySelector('.box-text');
const element = document.querySelector('.proceed');

element.addEventListener("click",() => {
  if (data.value != "") {
    localStorage.setItem("Bus_No",data.value);
    window.location.href = "Map/map.html"
  }
  else{
    alert("Please Enter Bus Number");
  }
});