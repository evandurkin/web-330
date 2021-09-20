// Title: Assignment 6.2
// Author: Evan Durkin
// Date: September 19, 2021

// FloatMaxField class for validating maximum input
export class FloatMaxField {
    constructor(name, field, max){
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
        let maxField = parseFloat(this.field);
        return (maxField < this.max);
    }
    
    // error message if input is > maximum
    getMessage = () => `${this.name} must be less than ${this.max}. You entered ${this.field}`;
}