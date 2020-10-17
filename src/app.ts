import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('rohit', 200, 'web dev')
docTwo = new Payment('rohan', 150, 'mobile app')

let docs: HasFormatter[] = []

docs.push(docOne)
docs.push(docTwo)

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

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// List template instance

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event)=> {
    e.preventDefault()

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(toFrom.value, amount.valueAsNumber, details.value)
        
    }else {
        doc = new Payment(toFrom.value, amount.valueAsNumber, details.value)
    }
    list.render(doc, type.value, 'end')
})