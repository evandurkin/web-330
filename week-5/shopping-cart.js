// Title: Assignment 5
// Author: Evan Durkin
// Date: September 11, 2021


// creates new class for displaying products
export class ShoppingCart {
    constructor() {
        this._products = []
    }

    // creates a count for the number of products selected
    count() {
        return this._products.length;
    }
    // adds products to the products array
    addProduct(product) {
        this._products.push(product);
    }
    // iterates over the product selections
    *[Symbol.iterator]() {
        for (let product of this._products) {
            yield product;
        }
    }
    
}