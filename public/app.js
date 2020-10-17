"use strict";
var Invoice = /** @class */ (function () {
    // client: string;
    // amount: number;
    // details: string;
    function Invoice(client, amount, details) {
        this.client = client;
        this.amount = amount;
        this.details = details;
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
invoices.forEach(function (inv) {
    console.log(inv.format());
});
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
