// Title: Personal Portfolio
// Author: Evan Durkin

class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
        // <a href="./index.html"><img src="./logo/durkin-logo-index.png" alt="" class="logo" style="margin-top: 16px;"></a>
            `<ul>
                <li><p style="font-weight:bold; margin-bottom:10px;">Links</p></li>
                <li><a href="https://github.com/evandurkin">GitHub</a></li>
                <li><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">BU Web Dev Degree</a></li>
                <li><a href="https://www.youtube.com/user/bellevueuniversity">BU YouTube</a></li>
                <li><a href="https://github.com/buwebdev">BU GitHub</a></li>
            </ul>`
            // <h2><a href="#top" id="back-to-top">Top</a></h2>
     
    }
}

customElements.define("footer-component", Footer);