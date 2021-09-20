// Title: Assignment 6.2
// Author: Evan Durkin
// Date: September 19, 2021

// FloatField class for validating if input is a number
export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        let checkField = parseFloat(this.field);
        return !isNaN(checkField);
    }
    
    getMessage = () => `${this.name} must be a float value. You entered ${this.field}`;
    }
