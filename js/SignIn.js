import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js' 
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js'

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const firebaseConfig = {
  apiKey: "AIzaSyC148Bp1eyf60ewdt22NoGysywPmBQOuoM",
  authDomain: "passenger-pal.firebaseapp.com",
  projectId: "passenger-pal",
  storageBucket: "passenger-pal.appspot.com",
  messagingSenderId: "252203613949",
  appId: "1:252203613949:web:38e2fe4a66d5a88d558894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

//Email Sign In and Sign Up
const signin = document.querySelector(".sign-in-form");
signin.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = signin.email.value;
  const password = signin.password.value;
  signInWithEmailAndPassword(auth, email , password)
  .then((cred) => {
    window.location.href = "index.html";
  })
  .catch((err) => {
    console.log("Login Unsuccessful ", err.message);
  })
})

const signup = document.querySelector(".sign-up-form");
signup.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = signup.name.value;
  const phone = signup.phone.value;
  const email = signup.email.value;
  const password = signup.password.value;
  createUserWithEmailAndPassword(auth, email , password)
  .then((cred) => {
    console.log("Signup Successful ", cred.user);
  })
  .catch((err) => {
    console.log("Signup Unsuccessful ", err.message);
  })
})