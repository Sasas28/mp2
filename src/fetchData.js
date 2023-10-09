import { deliveryTime } from "./checkoutApi";

const cartData = JSON.parse(localStorage.getItem("data"));

export function fetchData(x) {
    
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const mobile = document.getElementById('mobile');
    const email = document.getElementById('email');
    const radioButtons = document.getElementsByName("payment");
    const address = document.getElementById('destination');

    // Create a new Date object
    const currentDate = new Date();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

    // Get the current date
    const date = currentDate.getDate(); // Day of the month (1-31)
    const month = currentDate.getMonth(); // Month (0-11, add 1 to get 1-12)
    const monthName = months[month];
    const year = currentDate.getFullYear(); // Full year (e.g., 2023)

    // Get the current time
    const hours = currentDate.getHours(); // Hour (0-23)
    const minutes = currentDate.getMinutes(); // Minutes (0-59)
    const seconds = currentDate.getSeconds(); // Seconds (0-59)

    // Display the current date and time
    console.log("Date: " + monthName + "-" + date + "-" + year);
    console.log("Time: " + hours + ":" + minutes + ":" + seconds);

    console.log(fname.value)
    console.log(lname.value)
    console.log(mobile.value)
    console.log(email.value)
    console.log(address.value)

    let selectedPayment = "";
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        selectedPayment = radioButtons[i].value;
        break;
      }
    }
   
    console.log("Selected Payment:", selectedPayment);
   
    cartData.forEach(element => {
       console.log(element.name)
    });
   
    console.log(deliveryTime)

    let items = '';
    for (const item of cartData) {
    items += `
        <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.amount.toFixed(2)}</td>
        </tr>
    `;
    }

    let total = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

    document.getElementById('card-body').innerHTML = `

                <p><strong>Order Date:</strong>  ${monthName} ${date}, ${year}</p>
                <p><strong>Time:</strong>  ${hours}:${minutes}:${seconds}</p>
                <p><strong>Customer Name:</strong>  ${fname.value.charAt(0).toUpperCase() +
                    fname.value.slice(1)} ${lname.value.charAt(0).toUpperCase() +
                        lname.value.slice(1)}</p>
                <p><strong>Mobile #:</strong>  ${mobile.value}</p>
                <p><strong>Email:</strong>  ${email.value}</p>
                <p><strong>Delivery address:</strong>  ${address.value}</p>
                <p><strong>Delivery time:</strong>  ${deliveryTime}mins</p>
                <p><strong>Mode of payment:</strong>  ${selectedPayment}</p>
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
                    ${items}
                </tbody>
                <tfoot>
                    <tr>
                        <th colspan="3">Total</th>
                        <td>$${total.toFixed(2)}</td>
                    </tr>
                </tfoot>
                </table>
            `
}