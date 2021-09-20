// Title: Assignment
// Author: Evan Durkin
// Date: September 17, 2021

// RequiredField class for validating field inputs
export class RequiredField {
    constructor(name, field){
        this.name = name;
        this.field = field;
    }

    validate = () => (Boolean(this.field));

    // error message if there is no input
    getMessage = () => `${this.name} is a required field`;

}