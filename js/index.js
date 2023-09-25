import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js' 
import { getAuth, onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'


// Navbar 
let menu= document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// Navbar

const elem = document.querySelector("#img-exchange");
elem.addEventListener("click", (event) => {
    event.preventDefault();
    const x = document.querySelector("#from").value;
    const y = document.querySelector("#to").value;
    document.querySelector("#to").value = x;
    document.querySelector("#from").value = y;
});

const elem2 = document.querySelector(".search-btn");
elem2.addEventListener("click", (event) => {
    event.preventDefault();
    const x = document.querySelector("#from").value;
    const y = document.querySelector("#to").value;
    const d = document.querySelector("#date").value;
    if(x=="" || y=="" || d==""){
        alert("Please enter all the details.");
    }
    else{
        localStorage.setItem("From",x);
        localStorage.setItem("To",y);
        localStorage.setItem("Date",d);
        window.location.href = "Buses/buses.html";
    }
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
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const x = document.querySelector("#sign-in")
      x.style.display="none";
      const y = document.querySelector("#log-out")   
      y.style.display = "initial"    
    } else {
        const y = document.querySelector("#log-out")   
        y.style.display = "none" 
        const x = document.querySelector("#sign-in")
        x.style.display="intial";
    }
  });  

const btn = document.querySelector(".lgout");
btn.addEventListener("click", ()=> {
    console.log(btn);
    signOut(auth)
    .then(() => {
        location.reload();
    });
})