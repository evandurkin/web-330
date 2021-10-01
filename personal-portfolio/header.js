// Title: Personal Portfolio
// Author: Evan Durkin

class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
            `<span class="menu" style="font-size:30px;cursor:pointer;color:white;" onclick="openNav()">menu &nbsp; &#9776;</span>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="/personal-portfolio/index.html">Home</a>
                <a href="/personal-portfolio/projects.html">Projects</a>
                <a href="/personal-portfolio/database.html">Database Diagrams</a>
                <a href="/personal-portfolio/api-unit-tests.html">API Unit Tests</a>
                <a href="/personal-portfolio/resume.html">Resume</a>
                <a href="/personal-portfolio/about.html">About</a>
            </div>`
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

customElements.define("header-component", Header);