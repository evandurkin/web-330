// Title: Assignment 6.2
// Author: Evan Durkin
// Date: September 19, 2021

// FloatMinField class for validating minimum input
export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    validate() {
        let minField = parseFloat(this.field);
        return minField > this.min;
    }
    
    // error message if input is < minimum
    getMessage = () => `${this.name} must be more than ${this.min}. You entered ${this.field}`;
}