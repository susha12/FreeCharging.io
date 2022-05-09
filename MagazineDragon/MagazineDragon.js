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