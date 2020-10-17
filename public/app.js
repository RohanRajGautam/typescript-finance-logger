import { Invoice } from './classes/Invoice.js';
const me = {
    name: 'Rohan',
    id: 1998,
    language(speak) {
        console.log(speak);
    }
};
console.log(me);
const invOne = new Invoice('rohit', 80, 'personal reason');
const invTwo = new Invoice('badal', 100, 'personal reason');
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
