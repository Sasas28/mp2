import"./modulepreload-polyfill-3cfb730f.js";const i=JSON.parse(localStorage.getItem("data"))||[],s=[{id:1,name:"Choco Fudge",price:"89.00",img:"/mp2/img/choco-fudge.jpg"},{id:2,name:"Crinkles",price:"39.00",img:"/mp2/img/crinkles.jpg"},{id:3,name:"Hopia baboy",price:"65.00",img:"/mp2/img/hopia-baboy.jpg"},{id:4,name:"Hopia de leche",price:"89.00",img:"/mp2/img/hopia-de-leche.jpg"},{id:5,name:"Cheese bulilit",price:"61.00",img:"/mp2/img/cheese-bulilit.jpg"},{id:6,name:"Cheese cake",price:"104.00",img:"/mp2/img/cheesecake.jpg"},{id:7,name:"Ube de leche",price:"117.00",img:"/mp2/img/ube-de-leche.jpg"},{id:8,name:"Egg pie",price:"470.00",img:"/mp2/img/eggpie.jpg"},{id:9,name:"Hopia monggo",price:"75.00",img:"/mp2/img/mongox10pcs.jpg"},{id:10,name:"Peanut cookies & cream",price:"138.00",img:"/mp2/img/peanuts-cookies-cream.jpg"}];function r(){const e=document.getElementById("table-body"),t=document.getElementById("cart-total");e.innerHTML="",i.forEach(n=>{const c=y(n);e.appendChild(c)});const a=I(i);t.textContent=m(a.toFixed(2))}const y=e=>{const t=document.createElement("tr");return t.innerHTML=`
      <th scope="row">
        <img class="rounded" src=${e.img} alt="" width="60px">
        <p>${e.name}</p>
      </th>
      <td>${e.price}</td>
      <td>
        <i class="bi bi-dash-circle-fill decreaseCartItem" style="font-size: 1rem; color: red;"></i>
        <span>${e.quantity}</span>
        <i class="bi bi-plus-circle-fill increaseCartItem" style="font-size: 1rem; color: green;"></i>
      </td>
      <td id="amount">${m(e.amount.toFixed(2))}</td>
      <td class="p-0">
        <i class="bi bi-trash-fill removeCartItem" style="color: red;"></i>
      </td>
    `,t.querySelector(".decreaseCartItem").addEventListener("click",()=>{b(e.id)}),t.querySelector(".increaseCartItem").addEventListener("click",()=>{f(e.id)}),t.querySelector(".removeCartItem").addEventListener("click",()=>{h(e.id)}),t};function l(){const e=document.getElementById("cart-counter");let t=i.reduce((a,n)=>a+n.quantity,0);e.textContent=t,localStorage.setItem("data",JSON.stringify(i))}function I(e){return e.reduce((t,a)=>t+a.price*a.quantity,0)}function m(e){let t=e.toString(),a=t.split(".")[1];t=t.split(".")[0];let n=t.split("");if(n.length>3)for(let c=n.length-3;c>0;c-=3)n.splice(c,0,",");return a&&(n.push("."),n.push(a)),n.join("")}function f(e){const t=i.find(a=>a.id===e);t&&(t.quantity++,t.amount+=parseInt(t.price),localStorage.setItem("data",JSON.stringify(i)),l(),r())}function b(e){const t=i.find(a=>a.id===e);t&&t.quantity>1&&(t.quantity--,t.amount-=parseInt(t.price),localStorage.setItem("data",JSON.stringify(i)),l(),r())}function h(e){const t=i.findIndex(a=>a.id===e);t!==-1&&(i.splice(t,1),localStorage.setItem("data",JSON.stringify(i)),l(),r(),u())}function u(){i.length===0?(document.getElementById("message").classList.remove("d-none"),document.getElementById("table").style.display="none"):(document.getElementById("message").classList.add("d-none"),document.getElementById("table").style.display="block")}function C(){const e=document.getElementById("quantity"),t=document.getElementById("modal-price"),a=parseInt(t.textContent.slice(1)),n=parseInt(e.textContent),c=a*n,d=s.find(o=>o.name===document.getElementById("exampleModalLabel").textContent);if(!isNaN(n)&&n>0){const o=i.findIndex(g=>g.name===d.name);o!==-1?(i[o].quantity+=n,i[o].amount+=c):(d.quantity=n,d.amount=c,i.push(d))}localStorage.setItem("data",JSON.stringify(i)),l(),r()}const v=s;function p(e){const t=v[e],a=document.getElementById("modal-content");a.innerHTML=`
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${t.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="modal-img-container mb-1">
          <img id="modal-img" class="img-fluid" src=${t.img} alt="">
        </div>
        <div class="modal-qty-container">
          <i class="bi bi-dash-circle-fill decreaseQuantity" style="font-size: 1rem; color: red;"></i>
          <span id="quantity" class="quantity">1</span>
          <i class="bi bi-plus-circle-fill increaseQuantity" style="font-size: 1rem; color: green;"></i>
        </div>
        <p id="modal-price" class="modal-price mb-0">&#8369;${t.price}</p>
      </div>
      <div class="modal-footer">
        <button id="update-cart" class="btn btn-primary" data-bs-dismiss="modal">Proceed</button>
      </div>
    `;const n=a.querySelector("#quantity");a.querySelector(".decreaseQuantity").addEventListener("click",()=>{x(n)}),a.querySelector(".increaseQuantity").addEventListener("click",()=>{E(n)}),a.querySelector("#update-cart").addEventListener("click",C)}const E=e=>{let t=parseInt(e.textContent);t=isNaN(t)?1:t+1,e.textContent=t},x=e=>{let t=parseInt(e.textContent);t=isNaN(t)?1:Math.max(1,t-1),e.textContent=t};function L(){const e=document.getElementById("shop");e.innerHTML="",s.forEach(t=>{const a=q(t);e.appendChild(a)})}const q=e=>{const t=document.createElement("div");return t.className="col card-container",t.innerHTML=`
      <div class="card">
        <img src=${e.img} class="img-fluid" width="300px">
        <div class="card-body">
          <h5 class="card-title mb-0">${e.name}</h5>
          <p class="card-text">&#8369;<span>${e.price}</span></p>
          <button data-product-index=${s.indexOf(e)} class="btn btn-success fs-6 addToCart" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart</button>
        </div>
      </div>
    `,t.querySelector(".addToCart").addEventListener("click",a=>{p(a.target.dataset.productIndex)}),t},S=document.getElementById("product-search");function $(){const e=S.value;k(e)}function k(e=""){const t=document.getElementById("shop");t.innerHTML="",s.filter(n=>n.name.toLowerCase().includes(e.toLowerCase())).forEach(n=>{const c=document.createElement("div");c.className="col card-container",c.innerHTML=`
        <div class="card">
        <img src=${n.img} class="img-fluid" width="300px">
        <div class="card-body">
            <h5 class="card-title mb-0">${n.name}</h5>
            <p class="card-text">&#8369;<span>${n.price}</span></p>
            <button data-product-index=${s.indexOf(n)} class="btn btn-success fs-6 addToCart" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to cart</button>
        </div>
        </div>
      `,c.querySelector(".addToCart").addEventListener("click",d=>{p(d.target.dataset.productIndex)}),t.appendChild(c)})}const B=document.getElementById("cart-icon"),N=document.getElementById("product-search");l();L();r();B.addEventListener("click",u);N.addEventListener("input",$);
