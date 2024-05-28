const book = document.getElementById("book");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const wrapper = document.querySelector(".wrapper");
const btnPopup = document.querySelector(".boton2");
const iconClose = document.querySelector(".icon-close");
const checkbox = document.getElementById("mostrarcon");
const contraInput = document.getElementById("contraseña");
const formulario = document.querySelector(".wrapper");
const iconOs = document.querySelector(".icon-close");
const btndark =  document.querySelector(".btn");
const darkini = document.querySelector("h2");
const darkico = document.querySelector(".icon");
const darkico2 = document.querySelector(".icon2");
const cajasdark1 = document.querySelector(".cajas1");
const cajasdark2 = document.querySelector(".cajas2");
const olvidaste =  document.querySelector(".Olvidaste");
const mostrar = document.querySelector(".remember-forgot");
const darkletras1 = document.querySelector(".letras1");
const darkletras2 = document.querySelector(".letras2");
const darkfondo = document.querySelector(".parte2");
/*const botoncito = document.getElementById("book");
const barra = document.querySelector(".barra-lateral");*/

/*const barralateral2 = document.querySelector();*/

checkbox.addEventListener("change", function(){
    if(checkbox.checked){
        contraInput.type = "text";
    }else{
        contraInput.type = "password";
    }
});

btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup");
});
iconClose.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup");
});
menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=350){
        barraLateral.classList.add("mini-barra-lateral");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});
palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
    formulario.classList.toggle("dark-mode2f");
    iconOs.classList.toggle("dark-modeiconoclose");
    btndark.classList.toggle("darkbtn");
    darkini.classList.toggle("darkinicio");
    darkico.classList.toggle("darkiconos");
    darkico2.classList.toggle("darkiconos2");
    cajasdark1.classList.toggle("darkcajas1");
    cajasdark2.classList.toggle("darkcajas2");
    olvidaste.classList.toggle("darkOlvidaste");
    mostrar.classList.toggle("darkmostrar");
    darkletras1.classList.toggle("darkletras1");
    darkletras2.classList.toggle("darkletras2");
    darkfondo.classList.toggle("darkparte2");
   
});
    book.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    spans.forEach((span)=>{
       span.classList.toggle("oculto");
    });
});

/*botoncito.onclick = function() {
    barra.classList.toggle("active");
}*/
