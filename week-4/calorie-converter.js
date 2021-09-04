// Title: Assignment 4.2
// Author: Evan Durkin
// Date: September 4, 2021


// imports FoodModel class
import { FoodModel } from "./food-model.js";

export class CalorieConverter 
{
    // food object arrays
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150)
    ]
        
   // uses find() to filter through the arrays that match the FoodModel from user input
   // also converters user input string to lowercase letters
    static find(x) {
        return this.data.filter(foodModel => foodModel.name.toLowerCase().includes(x.toLowerCase()));
    }
}

