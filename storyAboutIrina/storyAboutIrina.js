// storyAboutIrina page slider active


let certificatesBack = document.querySelector(".slider_container__nextImg");
let certificatesNext = document.querySelector(".slider_container__backImg");
let sliderRotate = document.querySelectorAll(".container_images__one");
let sliderLeft = 0;
console.log("yes")
certificatesBack.onclick = ()=>{
   
    sliderLeft+=100;
    for(let i = 0; i< sliderRotate.length; i++){
console.log(sliderLeft)
    sliderRotate[i].style.left = sliderLeft + "px";
    if(sliderLeft > 800){
        sliderLeft = -800;
    }

}
}

certificatesNext.onclick = ()=>{
    sliderLeft-=100;
    for(let i = 0; i< sliderRotate.length; i++){
console.log(sliderLeft)
    sliderRotate[i].style.left = sliderLeft + "px";
    if(sliderLeft < -800){
        sliderLeft = 800;
    }
}
}