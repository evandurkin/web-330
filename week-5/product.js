// Title: Assignment 5
// Author: Evan Durkin
// Date: Sept 11, 2021

export class Product {
    constructor (name, price) {
        this.name = name,
        this.price = price
        this.id = Math.random().toString(16).slice(2);
    }
}