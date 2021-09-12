// Title: Assignment 5
// Author: Evan Durkin
// Date: September 11, 2021

// creates a new class for displaying shopping cart and cart message
export class CartComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
            `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
}

customElements.define("cart-component", CartComponent);
