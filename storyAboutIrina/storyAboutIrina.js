// storyAboutIrina page slider active

let btnBackBack = document.querySelector(".slider_childen__backImg");
let btnNextNext = document.querySelector(".slider_childen__nextImg");
let sliderBox =  document.querySelectorAll(".childen_container__img");
let a = (sliderBox.length) * 310;
let pluse = 0;
console.log(pluse);
console.log(a);
btnNextNext.onclick =()=>{
    if (pluse == 0){
        pluse = -310; 
    }
    pluse += 310;
    for(let i=0; i < sliderBox.length; i++){
        sliderBox[i].style.left = pluse + "px";
        console.log(pluse)
    };
}
btnBackBack.onclick =()=>{
    pluse -= 310;
    if (pluse == -a){
        pluse = -a + 310; 
    }
    for(let i=0; i < sliderBox.length; i++){
        sliderBox[i].style.left = pluse + "px";
        console.log(pluse)
}
}
