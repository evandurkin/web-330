// Title: Assignment 6.2
// Author: Evan Durkin
// Date: September 19, 2021

// import statements
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";


// Validator class for form fields
export class Validator {
    validators = [];
    messages = [];

    constructor(name, field) 
    {
        this.name = name;
        this.field = field;
    }
    
    // new instances of field inputs pushed to the validators and messages arrays
    addRequiredField() 
    {
        this.validators.push(new RequiredField(this.name, this.field));
    }
    
    addRequiredFloatField()
    {
        this.validators.push(new FloatField(this.name, this.field));
    }
    
    addFloatMinField(min)
    {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    
    addFloatMaxField(max)
    {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    
    // function to validate input and push error messages
    validate()
    {
        for (let validator of this.validators) {
            if (!validator.validate()) {
                this.messages.push(validator.getMessage());
                return false;
            }
        }
        return true;
    }
}

