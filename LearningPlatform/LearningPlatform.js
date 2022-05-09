// storyAboutIrina page slider active

let btnBack = document.querySelector(".slider_childen__backImg");
let btnNext = document.querySelector(".slider_childen__nextImg");
let sliderBox =  document.querySelectorAll(".about_irina__img.slider");
let i = 0;
sliderBox[0].classList.add('active');
console.log(sliderBox[0])
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

// block popular questions
let boxPlus = document.querySelectorAll(".left_one__pluse");
let boxHeight = document.querySelectorAll(".container_left__one");
let boxText =  document.querySelectorAll(".left_one__text");
console.log(boxPlus);
console.log(boxHeight);
console.log(boxText);
boxPlus[0].onclick = () =>{
    boxHeight[0].style.height = "250px";
    boxText[0].style.display = "flex";

    boxHeight[5].style.height = "100px";
    boxText[5].style.display = "none";
    boxHeight[1].style.height = "100px";
    boxText[1].style.display = "none";
    boxHeight[2].style.height = "100px";
    boxText[2].style.display = "none";
    boxHeight[3].style.height = "100px";
    boxText[3].style.display = "none";
    boxHeight[4].style.height = "100px";
    boxText[4].style.display = "none";
    
}
boxPlus[1].onclick = () =>{
    boxHeight[1].style.height = "250px";
    boxText[1].style.display = "flex";

    boxHeight[0].style.height = "100px";
    boxText[0].style.display = "none";
    boxHeight[5].style.height = "100px";
    boxText[5].style.display = "none";
    boxHeight[2].style.height = "100px";
    boxText[2].style.display = "none";
    boxHeight[3].style.height = "100px";
    boxText[3].style.display = "none";
    boxHeight[4].style.height = "100px";
    boxText[4].style.display = "none";
    
}
boxPlus[2].onclick = () =>{
    boxHeight[2].style.height = "250px";
    boxText[2].style.display = "flex";

    boxHeight[0].style.height = "100px";
    boxText[0].style.display = "none";
    boxHeight[1].style.height = "100px";
    boxText[1].style.display = "none";
    boxHeight[5].style.height = "100px";
    boxText[5].style.display = "none";
    boxHeight[3].style.height = "100px";
    boxText[3].style.display = "none";
    boxHeight[4].style.height = "100px";
    boxText[4].style.display = "none";
    
}
boxPlus[3].onclick = () =>{
    boxHeight[3].style.height = "250px";
    boxText[3].style.display = "flex";

    boxHeight[0].style.height = "100px";
    boxText[0].style.display = "none";
    boxHeight[1].style.height = "100px";
    boxText[1].style.display = "none";
    boxHeight[2].style.height = "100px";
    boxText[2].style.display = "none";
    boxHeight[5].style.height = "100px";
    boxText[5].style.display = "none";
    boxHeight[4].style.height = "100px";
    boxText[4].style.display = "none";
}
boxPlus[4].onclick = () =>{
    boxHeight[4].style.height = "250px";
    boxText[4].style.display = "flex";

    boxHeight[0].style.height = "100px";
    boxText[0].style.display = "none";
    boxHeight[1].style.height = "100px";
    boxText[1].style.display = "none";
    boxHeight[2].style.height = "100px";
    boxText[2].style.display = "none";
    boxHeight[3].style.height = "100px";
    boxText[3].style.display = "none";
    boxHeight[5].style.height = "100px";
    boxText[5].style.display = "none";
}
boxPlus[5].onclick = () =>{
    boxHeight[5].style.height = "250px";
    boxText[5].style.display = "flex";

    boxHeight[0].style.height = "100px";
    boxText[0].style.display = "none";
    boxHeight[1].style.height = "100px";
    boxText[1].style.display = "none";
    boxHeight[2].style.height = "100px";
    boxText[2].style.display = "none";
    boxHeight[3].style.height = "100px";
    boxText[3].style.display = "none";
    boxHeight[4].style.height = "100px";
    boxText[4].style.display = "none";

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