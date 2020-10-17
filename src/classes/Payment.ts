import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{
    constructor(
        readonly recipient: string,
        private amount: number,
        public details: string
    ){}

    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}
