import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where,getDoc, doc } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const from = localStorage.getItem("From");
const to = localStorage.getItem("To");
const date = localStorage.getItem("Date");

const elem = document.querySelector("#main_body");
const x = document.createElement("div");
const y = document.createElement("p");
y.classList.add("p_bus");
const z = document.createTextNode("Select Your Bus !");
y.appendChild(z);
x.appendChild(y);

const a = document.createElement("div");
a.classList.add("a_class");
const b = document.createElement("h2");
const c = document.createTextNode(from);
b.appendChild(c);

const d = document.createElement("img");
d.classList.add("a_img");
d.src = "https://img.icons8.com/windows/60/data-in-both-directions.png"
// d.src = "https://img.icons8.com/external-justicon-flat-justicon/64/external-bus-transportation-justicon-flat-justicon.png";

const e = document.createElement("h2");
const f = document.createTextNode(to);
e.appendChild(f);

a.appendChild(b);
a.appendChild(d);
a.appendChild(e);

const g = document.createElement("h3");
g.classList.add("p_bus");
const h = document.createTextNode(date);
g.appendChild(h);

const i = document.createElement("div");
i.classList.add("a2_div");
const j = document.createElement("img");
j.classList.add("a2_img");
j.src = "https://img.icons8.com/external-justicon-flat-justicon/500/external-bus-transportation-justicon-flat-justicon.png"
i.appendChild(j);

x.appendChild(a);
x.appendChild(g);
x.appendChild(i);
elem.appendChild(x);

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

const buses = document.querySelector("#buses");

const querySnapshot = await getDocs(collection(db, "Bus"));
querySnapshot.forEach((doc) => {
    const st = doc.data().Stops;
    const name = doc.data().Bus_Name;
    const number = doc.data().Bus_No;
    const type = doc.data().Type;
    const start_time = doc.data().Start_Time;
    const end = doc.data().End_Time;
    const rate = doc.data().Rate;
    const seats = doc.data().Total_Seats;
    const left = doc.data().Left_Seats;
    const len = st.length;
    let count = 0;
    const start_pt = st[0].S_Name;
    const end_pt = st[len - 1].S_Name;
    for(let i = 0; i<len; i++){
        const l = st[i].S_Name;
        if (l == from) {
            for (let j = i+1; j < len; j++){
                const k = st[j].S_Name
                if (k == to) {
                    const p = document.createElement("div");
                    p.classList.add("bg-c");

                    const D1= document.createElement("div");
                    D1.classList.add("SmolD");
                    const d1 = document.createElement("h3");
                    const f1 = document.createTextNode(`Company Name :  ${name}`);
                    d1.appendChild(f1);
                    D1.appendChild(d1);
                    const d2 = document.createElement("h3");
                    const f2 = document.createTextNode(`Bus Number : ${number}`);
                    d2.appendChild(f2);
                    D1.appendChild(d2);
                    const d3 = document.createElement("h3");
                    const f3 = document.createTextNode(`Bus Type : ${type}`);
                    d3.appendChild(f3);
                    D1.appendChild(d3);
                    p.appendChild(D1);

                    const D2= document.createElement("div");
                    D2.classList.add("SmolD");
                    const d4 = document.createElement("h3");
                    const f4 = document.createTextNode(`Start Time : ${start_time} from ${start_pt}`);
                    d4.appendChild(f4);
                    D2.appendChild(d4);
                    const d5 = document.createElement("h3");
                    const f5 = document.createTextNode(`End Time : ${end} at ${end_pt}`);
                    d5.appendChild(f5);
                    D2.appendChild(d5);
                    const d6 = document.createElement("h3");
                    const f6 = document.createTextNode(`Rate : ${rate}`);
                    d6.appendChild(f6);
                    D2.appendChild(d6);
                    p.appendChild(D2);

                    const D3= document.createElement("div");
                    D3.classList.add("SmolD");
                    const d7 = document.createElement("h3");
                    const f7 = document.createTextNode(`Total Seats : ${seats}`);
                    d7.appendChild(f7);
                    D3.appendChild(d7);
                    const d8 = document.createElement("h3");
                    const f8 = document.createTextNode(`Available Seats : ${left}`);
                    d8.appendChild(f8);
                    D3.appendChild(d8);

                    const d9 = document.createElement("BUTTON");
                    d9.classList.add("btn");
                    const f9 = document.createTextNode("Book Now");
                    d9.appendChild(f9);

                    d9.setAttribute("id", "btn");
                    d9.addEventListener("click", ()=>{
                        window.location.href = "SV.html";
                    })

                    D3.appendChild(d9);
                    p.appendChild(D3);
                    p.setAttribute("id",number);
                    buses.appendChild(p);
                }
            }
        }
        
    }
    if(count == len){
        alert("No Route Found");
    }
    // console.log(doc.id, " => ", doc.data());
    // console.log(x)
});
