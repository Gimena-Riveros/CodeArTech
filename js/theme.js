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