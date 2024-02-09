//see if element is visible in view port.
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 *  element annimated when visible in view port.
   
 * 
 */
window.addEventListener("scrol", () => {

});




window.addEventListener("load", () => {

    let right_banner = document.getElementById("hero_right");
    right_banner.classList.add("annimate_banner");

    title_exp_phone.innerHTML = json_exp.exemple[0].titre;
    texte_exp_phone.innerHTML = json_exp.exemple[0].texte;
 });

 
/**** SECTION EXPERIENCE *******
 *  
 * 
**********************************/

let json_exp;
fetch('./json/exp.json')
.then( response =>{
    return response.json();
})
.then( (data) => {
    json_exp = data;
    console.log(data);
});

let case_exp = document.getElementsByClassName('case_exp');
let information_exp = document.getElementById('information_exp');
let hide_information = document.getElementById('hide_information');

let button_close = document.getElementById('close_exp_inf');
let title_exp = document.getElementById('title_exp');
let title_exp_phone = document.getElementById('title_exp_phone');
let texte_exp = document.getElementById('text_exp');
let texte_exp_phone = document.getElementById('text_exp_phone');

for(let i = 0; i < case_exp.length ; i++){
    case_exp[i].addEventListener('click', ()=>{
    
      information_exp.classList.add('show_information_exp');

      setTimeout( ()=>{
        hide_information.removeAttribute('hidden');
      }, 1000);

      title_exp.innerHTML  = json_exp.exemple[i].titre;
      texte_exp.innerHTML = json_exp.exemple[i].texte;
      title_exp_phone.innerHTML = json_exp.exemple[i].titre;
      texte_exp_phone.innerHTML = json_exp.exemple[i].texte;
    });
}

button_close.addEventListener('click', ()=>{

    information_exp.classList.remove('show_information_exp');
    hide_information.setAttribute('hidden', '');

});