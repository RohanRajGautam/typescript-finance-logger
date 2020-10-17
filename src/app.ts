class Invoice{
    client: string;
    amount: number;
    details: string;

    constructor(c: string, a: number, d: string){
        this.client = c;
        this.amount = a;
        this.details = d;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('rohit', 80, 'personal reason');
const invTwo = new Invoice('badal', 100, 'personal reason');

const invoices: Invoice[] = [];

invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices);



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