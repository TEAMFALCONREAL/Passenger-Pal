// let count = 2;
// const x=document.querySelector("#add-btn");
// x.addEventListener("click",(event)=>{
//     event.preventDefault();
//     const z5=document.createElement("br")
//     const w = document.createElement("div");
//     w.appendChild(z5);
//     const z = document.createElement("div");
//     const z1 = document.createElement("h2");
//     const z2 = document.createTextNode(`Passenger ${count}`);
//     count++;
//     z1.appendChild(z2);
//     z.appendChild(z1);
//     const a= document.createElement("form");
//     const b= document.createElement("div");
//     const c= document.createElement("label");
//     const d= document.createElement("input");
//     d.setAttribute("type","input");
//     d.setAttribute("placeholder","Enter Full Name");
//     const e= document.createTextNode("Full Name");

//     c.appendChild(e);
//     c.append(d);
//     b.appendChild(c);
//     a.appendChild(b);

//     const f= document.querySelector(".form");
//     f.append(a);





//     const g= document.createElement("div");
//     const h= document.createElement("label");
//     const i= document.createElement("input");
//     i.setAttribute("type","input");
//     i.setAttribute("placeholder","Enter Your Age");
//     const j= document.createTextNode("Age");

//     h.appendChild(j);
//     h.append(i);
//     g.appendChild(h);
//     a.appendChild(g);




//     const k= document.createElement("div");
//     const l= document.createElement("label");
//     const m= document.createElement("input");
//     m.setAttribute("type","input");
//     m.setAttribute("placeholder","Enter Phone Number");
//     const n= document.createTextNode("Phone Number");

//     l.appendChild(n);
//     l.append(m);
//     k.appendChild(l);
//     a.appendChild(k);



//     const o= document.createElement("div");
//     const p= document.createElement("label");
//     const q= document.createElement("input");
//     q.setAttribute("type","date");
//     q.setAttribute("placeholder","dd-mm-yyyy");
//     const r= document.createTextNode("Birth Date");

//     p.appendChild(r);
//     p.append(q);
//     o.appendChild(p);
//     a.appendChild(o);



//     const s= document.createElement("div");
//     const t= document.createElement("label");
//     const u= document.createElement("input");
//     u.setAttribute("type","text");
//     u.setAttribute("placeholder","Enter Your Gender");
//     const v= document.createTextNode("Gender");

//     t.appendChild(v);
//     t.append(u);
//     s.appendChild(t);
//     a.appendChild(s);
//     w.appendChild(z);
//     w.appendChild(a);
//     // f.appendChild(w);

//     const z0 = document.querySelector("#gen");
//     console.log(z0);
//     z0.appendChild(w)


//     // const s= document.createElement("div");
//     // const t= document.createElement("h3");
//     // const lab=document.createTextNode("Gender");
//     // const u= document.createElement("div");

//     // const mv= document.createElement("div");
//     // const mw= document.createElement("input");
//     // mw.setAttribute("type","radio");
//     // mw.setAttribute("id","check-male");
//     // mw.setAttribute("name","check-male");
//     // const mx= document.createElement("label");
//     // mx.setAttribute("for","check-male");
//     // const my= document.createTextNode("Male");
//     // mx.appendChild(my);
//     // mw.append(mx);
//     // mv.appendChild(mw);

    
//     // const fv= document.createElement("div");
//     // const fw= document.createElement("input");
//     // fw.setAttribute("type","radio");
//     // fw.setAttribute("id","check-female");
//     // fw.setAttribute("name","check-female");
//     // const fx= document.createElement("label");
//     // fx.setAttribute("for","check-female");
//     // const fy= document.createTextNode("Female");
//     // fx.appendChild(fy);
//     // fw.append(fx);
//     // fv.appendChild(fw);

//     // const ov= document.createElement("div");
//     // const ow= document.createElement("input");
//     // ow.setAttribute("type","radio");
//     // ow.setAttribute("id","check-other");
//     // ow.setAttribute("name","check-other");
//     // const ox= document.createElement("label");
//     // ox.setAttribute("for","check-other");
//     // const oy= document.createTextNode("Prefer Not To Say");
//     // ox.appendChild(oy);
//     // ow.append(ox);
//     // ov.appendChild(ow);

//     // fv.append(ov);
//     // mv.append(fv);
//     // u.appendChild(mv);
//     // t.appendChild(lab);
//     // t.append(u);
//     // s.appendChild(t);
//     // a.appendChild(s);



// })

const elem = document.querySelector("#submit");
elem.addEventListener("click" , () => {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    if (name == "" || email == "" || phone =="") {
        alert("Fill out the form");
    }
    window.location.href = "https://buy.stripe.com/test_9AQg2S01ifQkgGA3cd"
})