import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice('rohit', 200, 'web dev');
docTwo = new Payment('rohan', 150, 'mobile app');
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const me = {
    name: 'Rohan',
    id: 1998,
    language(speak) {
        console.log(speak);
    }
};
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, amount.valueAsNumber, details.value);
    }
    else {
        doc = new Payment(toFrom.value, amount.valueAsNumber, details.value);
    }
    console.log(doc);
});
