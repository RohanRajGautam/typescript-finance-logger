export class Invoice{
    constructor(
        readonly client: string,
        private amount: number,
        public details: string
    ){}

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
