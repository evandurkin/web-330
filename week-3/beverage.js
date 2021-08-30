//Author: Evan Durkin
//Title: Assignment 3.4
//Date: August 29, 2021

//imports Product class to create Beverage JS class
import { Product } from "./product.js";

export class Beverage extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}