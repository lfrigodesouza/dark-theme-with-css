'use strict'
let browserTheme = (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
document.documentElement.setAttribute('data-theme', browserTheme)

let themeToggler = document.getElementById("theme-toggler");
themeToggler.addEventListener('click', ()=>{
    console.log("trocando o tema")
    let targetTheme;
    let currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "light") {
        targetTheme = "dark";
    } else {
        targetTheme = "light"
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
})

let count = 0;
function handleButton(){
    count += 1;
    document.getElementById("count-label").innerHTML = `Vezes clicadas: ${count}`
}

