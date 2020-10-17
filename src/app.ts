import { Invoice } from './classes/Invoice.js'

//interface

interface IsPerson {
    name: string;
    id: number;
    language(a: string):void;
}

const me: IsPerson = {
    name: 'Rohan',
    id: 1998,
    language(speak: string){
        console.log(speak);
    }
}

console.log(me);


const invOne = new Invoice('rohit', 80, 'personal reason');
const invTwo = new Invoice('badal', 100, 'personal reason');

const invoices: Invoice[] = [];

invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.format());
    
})


const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


form.addEventListener('submit', (e: Event)=> {
    e.preventDefault()

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
    
})