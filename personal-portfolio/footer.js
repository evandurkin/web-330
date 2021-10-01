// Title: Personal Portfolio
// Author: Evan Durkin

class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
            `<ul>
                <li><p style="font-weight:bold; margin-bottom:10px;">Links</p></li>
                <li><a href="">GitHub</a></li>
                <li><a href="">BU Web Dev Degree</a></li>
                <li><a href="">BU YouTube</a></li>
                <li><a href="">BU GitHub</a></li>
            </ul>`
    }
}

customElements.define("footer-component", Footer);