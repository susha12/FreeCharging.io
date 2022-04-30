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
        console.log(i)
    }
     else  if(i == 1){
         i=0;
        sliderBox[i].classList.add('active');
        sliderBox[i+1].classList.remove('active');
       
        console.log(i)
    }
    else  if(i ==2){
        i=1;
        sliderBox[i].classList.add('active');
        sliderBox[i+1].classList.remove('active');
        console.log(i)
    }
    
}

