import { deliveryTime } from "./checkoutApi";

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const address = document.getElementById('destination');

export function handleCheckboxChange() {
    const checkbox = document.getElementById("flexCheckDefault");
    const confirmButton = document.getElementById("confirmButton");
    const backButton = document.getElementById("backButton");

    if (checkbox.checked) {
      confirmButton.disabled = false;
      backButton.disabled = true;
    } else {
      confirmButton.disabled = true;
      backButton.disabled = false;
    }
  }

export function isFormEmpty() {
    if(fname.value == '' || lname.value == '' || mobile.value == '' || email.value == '' || address.value == '' || deliveryTime == 0) {
      document.getElementById('doneBtn').disabled = true;
    } else {
      document.getElementById('doneBtn').disabled = false;
    }
  }

export function displayTnxMessage() {
  document.getElementById('receiptCanvas').click();
  document.getElementById('tnxMessage').innerHTML = `
  <div class="alert alert-secondary" role="alert">
    Thank you so much <strong>${fname.value.charAt(0).toUpperCase() +
      fname.value.slice(1)}</strong>! Hope to talk with you soon.
  </div>
  `;
}

export function resetAll() {
  localStorage.clear();
  window.location.href = '/mp2/';
}