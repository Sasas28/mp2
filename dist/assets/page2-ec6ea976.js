import"./modulepreload-polyfill-3cfb730f.js";let v="";function k(){mapboxgl.accessToken="pk.eyJ1IjoiamFzdGVyMjgiLCJhIjoiY2xpczEzbm9tMTFzMTNlcW9sbXNpenJvcCJ9.jxS_s16zSL_DFQoBUBn-bA";const o=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v12",center:[121.0873,14.5389],zoom:12}),r=[[116.4668,4.5864],[126.5374,21.1619]];o.setMaxBounds(r);const a=[121.0873,14.5389];async function u(t){const c=(await(await fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/${a[0]},${a[1]};${t[0]},${t[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,{method:"GET"})).json()).routes[0],h=c.geometry.coordinates,m={type:"Feature",properties:{},geometry:{type:"LineString",coordinates:h}};o.getSource("route")?o.getSource("route").setData(m):o.addLayer({id:"route",type:"line",source:{type:"geojson",data:m},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#3887be","line-width":5,"line-opacity":.75}});const p=document.getElementById("instructions"),f=c.legs[0].steps;let b="";for(const n of f)b+=`<li class="list-group-item">${n.maneuver.instruction}</li>`;p.innerHTML=`
    <p class="p-2"><strong id="delivery-time">Delivery time: ${Math.floor(c.duration/60)} min 🚴 </strong></p>
    <p class="p-2"><strong>Directions:</strong></p>
    <ol class="list-group list-group-flush">${b}</ol>`,v=`${Math.floor(c.duration/60)}`}o.on("load",()=>{u(a),o.addLayer({id:"point",type:"circle",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:a}}]}},paint:{"circle-radius":10,"circle-color":"#3887be"}}),o.on("click",t=>{const e=Object.keys(t.lngLat).map(c=>t.lngLat[c]),s={type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:e}}]};o.getLayer("end")?o.getSource("end").setData(s):o.addLayer({id:"end",type:"circle",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:e}}]}},paint:{"circle-radius":10,"circle-color":"#f30"}}),u(e)})});const i=document.getElementById("destination"),d=document.getElementById("suggestions");i.addEventListener("keyup",g);function g(){const t=i.value;fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${t}.json?access_token=${mapboxgl.accessToken}&autocomplete=true`).then(e=>e.json()).then(e=>{const s=e.features.map(c=>c.place_name);l(s)}).catch(e=>{console.error("Autocomplete error:",e)})}function l(t){d.innerHTML="";for(let e=0;e<Math.min(t.length,5);e++){const s=document.createElement("div");s.className="suggestion p-1",s.textContent=t[e],s.addEventListener("click",()=>{i.value=t[e],d.innerHTML="",B()}),d.appendChild(s)}}function B(){const t=i.value;fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${t}.json?access_token=${mapboxgl.accessToken}`).then(e=>e.json()).then(e=>{const s=e.features[0].geometry.coordinates;y(s)}).catch(e=>{console.error("Geocoding error:",e)})}function y(t){o.getLayer("end")?o.getSource("end").setData({type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}}]}):o.addLayer({id:"end",type:"circle",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}}]}},paint:{"circle-radius":10,"circle-color":"#f30"}}),u(t)}}const $=document.getElementById("fname"),x=document.getElementById("lname"),D=document.getElementById("mobile"),L=document.getElementById("email"),M=document.getElementById("destination");function j(){const o=document.getElementById("flexCheckDefault"),r=document.getElementById("confirmButton"),a=document.getElementById("backButton");o.checked?(r.disabled=!1,a.disabled=!0):(r.disabled=!0,a.disabled=!1)}function F(){$.value==""||x.value==""||D.value==""||L.value==""||M.value==""||v==0?document.getElementById("doneBtn").disabled=!0:document.getElementById("doneBtn").disabled=!1}function T(){document.getElementById("receiptCanvas").click(),document.getElementById("tnxMessage").innerHTML=`
  <div class="alert alert-secondary" role="alert">
    Thank you so much <strong>${$.value.charAt(0).toUpperCase()+$.value.slice(1)}</strong>! Hope to talk with you soon.
  </div>
  `}function C(){localStorage.clear(),window.location.href="/mp2/"}const E=JSON.parse(localStorage.getItem("data"));function S(o){const r=document.getElementById("fname"),a=document.getElementById("lname"),u=document.getElementById("mobile"),i=document.getElementById("email"),d=document.getElementsByName("payment"),g=document.getElementById("destination"),l=new Date,B=["January","February","March","April","May","June","July","August","September","October","November","December"],y=l.getDate(),t=l.getMonth(),e=B[t],s=l.getFullYear(),c=l.getHours(),h=l.getMinutes(),m=l.getSeconds();console.log("Date: "+e+"-"+y+"-"+s),console.log("Time: "+c+":"+h+":"+m),console.log(r.value),console.log(a.value),console.log(u.value),console.log(i.value),console.log(g.value);let p="";for(let n=0;n<d.length;n++)if(d[n].checked){p=d[n].value;break}console.log("Selected Payment:",p),E.forEach(n=>{console.log(n.name)}),console.log(v);let f="";for(const n of E)f+=`
        <tr>
            <td>${n.name}</td>
            <td>${n.quantity}</td>
            <td>${n.price}</td>
            <td>${n.amount.toFixed(2)}</td>
        </tr>
    `;let b=E.reduce((n,I)=>n+I.price*I.quantity,0);document.getElementById("card-body").innerHTML=`

                <p><strong>Order Date:</strong>  ${e} ${y}, ${s}</p>
                <p><strong>Time:</strong>  ${c}:${h}:${m}</p>
                <p><strong>Customer Name:</strong>  ${r.value.charAt(0).toUpperCase()+r.value.slice(1)} ${a.value.charAt(0).toUpperCase()+a.value.slice(1)}</p>
                <p><strong>Mobile #:</strong>  ${u.value}</p>
                <p><strong>Email:</strong>  ${i.value}</p>
                <p><strong>Delivery address:</strong>  ${g.value}</p>
                <p><strong>Delivery time:</strong>  ${v}mins</p>
                <p><strong>Mode of payment:</strong>  ${p}</p>
                <hr>
                <table class="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    ${f}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3">Total</th>
                        <td>$${b.toFixed(2)}</td>
                    </tr>
                </tfoot>
                </table>
            `}k();setInterval(function(){F()},1e3);document.getElementById("doneBtn").addEventListener("click",S);document.getElementById("flexCheckDefault").addEventListener("change",j);document.getElementById("confirmButton").addEventListener("click",T);document.getElementById("okBtn").addEventListener("click",C);
