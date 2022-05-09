// index page active slider
let btnBack = document.querySelector(".slider_childen__backImg");
let btnNext = document.querySelector(".slider_childen__nextImg");
let sliderBox =  document.querySelectorAll(".slider__childen__container");
let i = 0;
sliderBox[i].classList.add('active');
btnNext.onclick = ()=>{
    if(i == 0){
        sliderBox[i+1].classList.add('active');
        sliderBox[i].classList.remove('active');
        i++;
    }
     else  if(i == 1){
        sliderBox[i+1].classList.add('active');
        sliderBox[i].classList.remove('active');
        i++;
    }
    else  if(i ==2){
        i=0;
        sliderBox[i].classList.add('active');
        sliderBox[i+2].classList.remove('active');
    }
}
btnBack.onclick = ()=>{
    if(i == 0){
        sliderBox[i+2].classList.add('active');
        sliderBox[i].classList.remove('active');
        i+=2;
    }
     else  if(i == 1){
         i=0;
        sliderBox[i].classList.add('active');
        sliderBox[i+1].classList.remove('active');
    }
    else  if(i ==2){
        i=1;
        sliderBox[i].classList.add('active');
        sliderBox[i+1].classList.remove('active');
    }
}
// bueger menu
let btnClose = document.querySelector(".bueger_menu_close");
let btnBueger = document.querySelector(".header_center__navBar");
let body =  document.querySelector("body");
let main =  document.querySelector("main");
let footer =  document.querySelector("footer");
let navBar =  document.querySelector(".box_bueger__menu");

btnClose.onclick = ()=>{
    navBar.style.display = "none";
    main.style.display = "flex";
    footer.style.display = "flex";
    body.style.background = "white";
}
btnBueger.onclick = ()=>{
    navBar.style.display = "flex";
    body.style.background = "#D0D0D0";
    main.style.display = "none";
    footer.style.display = "none";

}
