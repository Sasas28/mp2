import"./modulepreload-polyfill-3cfb730f.js";const s=[{id:1,name:"Choco Fudge",price:"89.00",img:"/mp2/img/choco-fudge.jpg"},{id:2,name:"Crinkles",price:"39.00",img:"/mp2/img/crinkles.jpg"},{id:3,name:"Hopia baboy",price:"65.00",img:"/mp2/img/hopia-baboy.jpg"},{id:4,name:"Hopia de leche",price:"89.00",img:"/mp2/img/hopia-de-leche.jpg"},{id:5,name:"Cheese bulilit",price:"61.00",img:"/mp2/img/cheese-bulilit.jpg"},{id:6,name:"Cheese cake",price:"104.00",img:"/mp2/img/cheesecake.jpg"},{id:7,name:"Ube de leche",price:"117.00",img:"/mp2/img/ube-de-leche.jpg"},{id:8,name:"Egg pie",price:"470.00",img:"/mp2/img/eggpie.jpg"},{id:9,name:"Hopia monggo",price:"75.00",img:"/mp2/img/mongox10pcs.jpg"},{id:10,name:"Peanut cookies & cream",price:"138.00",img:"/mp2/img/peanuts-cookies-cream.jpg"}];function r(){const t=document.getElementById("table-body"),e=document.getElementById("cart-total");t.innerHTML="",i.forEach(a=>{const c=y(a);t.appendChild(c)});const n=b(i);e.textContent=m(n.toFixed(2))}const y=t=>{const e=document.createElement("tr");return e.innerHTML=`
      <th scope="row">
        <img class="rounded" src=${t.img} alt="" width="60px">
        <p>${t.name}</p>
      </th>
      <td>${t.price}</td>
      <td>
        <i class="bi bi-dash-circle-fill decreaseCartItem" style="font-size: 1rem; color: red;"></i>
        <span>${t.quantity}</span>
        <i class="bi bi-plus-circle-fill increaseCartItem" style="font-size: 1rem; color: green;"></i>
      </td>
      <td id="amount">${m(t.amount.toFixed(2))}</td>
      <td class="p-0">
        <i class="bi bi-trash-fill removeCartItem" style="color: red;"></i>
      </td>
    `,e.querySelector(".decreaseCartItem").addEventListener("click",()=>{h(t.id)}),e.querySelector(".increaseCartItem").addEventListener("click",()=>{f(t.id)}),e.querySelector(".removeCartItem").addEventListener("click",()=>{I(t.id)}),e};function l(){const t=document.getElementById("cart-counter");let e=i.reduce((n,a)=>n+a.quantity,0);t.textContent=e}function b(t){return t.reduce((e,n)=>e+n.price*n.quantity,0)}function m(t){let e=t.toString(),n=e.split(".")[1];e=e.split(".")[0];let a=e.split("");if(a.length>3)for(let c=a.length-3;c>0;c-=3)a.splice(c,0,",");return n&&(a.push("."),a.push(n)),a.join("")}function f(t){const e=i.find(n=>n.id===t);e&&(e.quantity++,e.amount+=parseInt(e.price),l(),r())}function h(t){const e=i.find(n=>n.id===t);e&&e.quantity>1&&(e.quantity--,e.amount-=parseInt(e.price),l(),r())}function I(t){const e=i.findIndex(n=>n.id===t);e!==-1&&(i.splice(e,1),l(),r(),u())}function u(){i.length===0?(document.getElementById("message").classList.remove("d-none"),document.getElementById("table").style.display="none"):(document.getElementById("message").classList.add("d-none"),document.getElementById("table").style.display="block")}const i=[];function C(){const t=document.getElementById("quantity"),e=document.getElementById("modal-price"),n=parseInt(e.textContent.slice(1)),a=parseInt(t.textContent),c=n*a,d=s.find(o=>o.name===document.getElementById("exampleModalLabel").textContent);if(!isNaN(a)&&a>0){const o=i.findIndex(g=>g.name===d.name);o!==-1?(i[o].quantity+=a,i[o].amount+=c):(d.quantity=a,d.amount=c,i.push(d))}l(),r()}const v=s;function p(t){const e=v[t],n=document.getElementById("modal-content");n.innerHTML=`
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${e.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="modal-img-container mb-1">
          <img id="modal-img" class="img-fluid" src=${e.img} alt="">
        </div>
        <div class="modal-qty-container">
          <i class="bi bi-dash-circle-fill decreaseQuantity" style="font-size: 1rem; color: red;"></i>
          <span id="quantity" class="quantity">1</span>
          <i class="bi bi-plus-circle-fill increaseQuantity" style="font-size: 1rem; color: green;"></i>
        </div>
        <p id="modal-price" class="modal-price mb-0">&#8369;${e.price}</p>
      </div>
      <div class="modal-footer">
        <button id="update-cart" class="btn btn-primary" data-bs-dismiss="modal">Proceed</button>
      </div>
    `;const a=n.querySelector("#quantity");n.querySelector(".decreaseQuantity").addEventListener("click",()=>{x(a)}),n.querySelector(".increaseQuantity").addEventListener("click",()=>{E(a)}),n.querySelector("#update-cart").addEventListener("click",C)}const E=t=>{let e=parseInt(t.textContent);e=isNaN(e)?1:e+1,t.textContent=e},x=t=>{let e=parseInt(t.textContent);e=isNaN(e)?1:Math.max(1,e-1),t.textContent=e};function L(){const t=document.getElementById("shop");t.innerHTML="",s.forEach(e=>{const n=q(e);t.appendChild(n)})}const q=t=>{const e=document.createElement("div");return e.className="col card-container",e.innerHTML=`
      <div class="card">
        <img src=${t.img} class="img-fluid" width="300px">
        <div class="card-body">
          <h5 class="card-title mb-0">${t.name}</h5>
          <p class="card-text">&#8369;<span>${t.price}</span></p>
          <button data-product-index=${s.indexOf(t)} class="btn btn-success fs-6 addToCart" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart</button>
        </div>
      </div>
    `,e.querySelector(".addToCart").addEventListener("click",n=>{p(n.target.dataset.productIndex)}),e},$=document.getElementById("product-search");function k(){const t=$.value;B(t)}function B(t=""){const e=document.getElementById("shop");e.innerHTML="",s.filter(a=>a.name.toLowerCase().includes(t.toLowerCase())).forEach(a=>{const c=document.createElement("div");c.className="col card-container",c.innerHTML=`
        <div class="card">
        <img src=${a.img} class="img-fluid" width="300px">
        <div class="card-body">
            <h5 class="card-title mb-0">${a.name}</h5>
            <p class="card-text">&#8369;<span>${a.price}</span></p>
            <button data-product-index=${s.indexOf(a)} class="btn btn-success fs-6 addToCart" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart</button>
        </div>
        </div>
      `,c.querySelector(".addToCart").addEventListener("click",d=>{p(d.target.dataset.productIndex)}),e.appendChild(c)})}const T=document.getElementById("cart-icon"),M=document.getElementById("product-search");L();T.addEventListener("click",u);M.addEventListener("input",k);
