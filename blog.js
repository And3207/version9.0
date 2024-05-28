// nav background

const modooscuro = document.querySelector(".lunain");
const blognoche = document.querySelector("body");
const barraxde = document.querySelector("header");
const iconocuando = document.querySelector(".logo");
const contenido = document.querySelector(".titleText");
const contenido2 = document.querySelector(".title-text");
const homenoche = document.querySelector(".home");
const itemnoche = document.querySelector(".post-filter");
const footeroscuro = document.querySelector(".xde");


let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
});

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});
modooscuro.addEventListener("click",()=>{
    blognoche.classList.toggle("bodyoscuroo");
    barraxde.classList.toggle("barraoscura");
    iconocuando.classList.toggle("logonoche");
    contenido.classList.toggle("aboutdark1");
    contenido2.classList.toggle("aboutdark2");
    homenoche.classList.toggle("homenoche");
    itemnoche.classList.toggle("itemoscuro");
    footeroscuro.classList.toggle("foop");

});