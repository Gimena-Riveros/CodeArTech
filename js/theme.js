/* ******************** 
    MODE  DARK / LIGHT 
***********************/
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//console.log(preferedColorScheme);
const slider = document.getElementById('deslizar');  // slider
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}
slider.addEventListener('click', () =>{
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});
setTheme(localStorage.getItem('theme') || preferedColorScheme);
/*
    preferedColorScheme 
        se ocupa de saber si el dispositivo se encuentra configurado
        en modo oscuro o claro, dark / light, y en consecuencia usa una 
        u otra paleta de colores. 
    
    slider 
        conserva el ultimo valor que adopto el label de conmutacion de
        modo dark / light. 
        
    switchToTheme   
        partiendo de la configuracion del dispositivo, se ocupa de 
        conmutar entre un modo al otro modo, si esta 
        en dark pasa a light, y viceversa.
*/ 

/* **************** 
    BUTTON  UP
*******************/
// Get the button:
let mybutton = document.querySelector("#myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}