// storyAboutIrina page slider active

let btnBack = document.querySelector(".slider_childen__backImg");
let btnNext = document.querySelector(".slider_childen__nextImg");
let sliderBox =  document.querySelectorAll(".childen_container__img");
let a = (sliderBox.length) * 310;
let pluse = 0;
console.log(pluse);
console.log(a);
btnNext.onclick =()=>{
    if (pluse == 0){
        pluse = -310; 
    }
    pluse += 310;
    for(let i=0; i < sliderBox.length; i++){
        sliderBox[i].style.left = pluse + "px";
        console.log(pluse)
    };
}
btnBack.onclick =()=>{
    pluse -= 310;
    if (pluse == -a){
        pluse = -a + 310; 
    }
    for(let i=0; i < sliderBox.length; i++){
        sliderBox[i].style.left = pluse + "px";
        console.log(pluse)
}
}
