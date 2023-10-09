import './checkout.css';
import { accessMapApi } from "./src/checkoutApi";
import { isFormEmpty } from './src/checkoutUtils';
import { fetchData } from './src/fetchData';
import { handleCheckboxChange } from './src/checkoutUtils';
import { displayTnxMessage } from './src/checkoutUtils';
import { resetAll } from './src/checkoutUtils';

accessMapApi();
setInterval(function () {
    isFormEmpty();
}, 1000);
document.getElementById('doneBtn').addEventListener('click', fetchData);
document.getElementById("flexCheckDefault").addEventListener('change', handleCheckboxChange);
document.getElementById('confirmButton').addEventListener('click', displayTnxMessage);
document.getElementById('okBtn').addEventListener('click', resetAll)