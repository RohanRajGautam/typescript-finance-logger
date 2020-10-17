"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(c, a, d) {
        this.client = c;
        this.amount = a;
        this.details = d;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('rohit', 80, 'personal reason');
var invTwo = new Invoice('badal', 100, 'personal reason');
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
