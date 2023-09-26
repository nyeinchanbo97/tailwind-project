// nav dropdown 

const dropdownBtn = document.getElementsByClassName("naviDropdownBtn");
const dropdownBtnLogo = document.getElementsByClassName("naviDropdownBtnLogo");
const dropdown = document.getElementsByClassName("naviDropdown");

let navIsClose = true;
dropdownBtn[0].addEventListener("click", ()=>{
   
    if (navIsClose === true){
        dropdown[0].style.opacity = "1";
        dropdown[0].style.top = "40px";
        dropdownBtnLogo[0].style.transform = "rotate(180deg)";
        dropdown[0].style.pointerEvents = "all";
        navIsClose = false;
    }else{
        dropdown[0].style.opacity = "0";
        dropdown[0].style.top = "50px";
        dropdownBtnLogo[0].style.transform = "rotate(0deg)";
        dropdown[0].style.pointerEvents = "none";

        navIsClose = true;
    }

})


// menu big and small  dropdown (menu means hidden menu which appear when small screen)

dropdownBtn[1].addEventListener("click", ()=>{
   
        if(menu.offsetWidth > 640){
            if (navIsClose === true){
                dropdown[1].style.opacity = "1";
                dropdownBtnLogo[1].style.transform = "rotate(180deg)";
                dropdown[1].style.pointerEvents = "auto";
                navIsClose = false;
            }else{
                dropdown[1].style.opacity = "0";
                dropdownBtnLogo[1].style.transform = "rotate(0deg)";
                dropdown[1].style.pointerEvents = "none";
                navIsClose = true;
                return;
            }
        }else{
            if (navIsClose === true){
                dropdown[1].style.opacity = "1";
                dropdownBtn[1].style.marginBottom = "110px";
                dropdownBtnLogo[2].style.transform = "rotate(180deg)";
                dropdown[1].style.pointerEvents = "auto";
                // dropdown[1].style.left = "70px"

                navIsClose = false;
            }else{
                dropdown[1].style.opacity = "0";
                dropdownBtn[1].style.marginBottom = "0px";
                dropdownBtnLogo[2].style.transform = "rotate(0deg)";
                dropdown[1].style.pointerEvents = "none";

                navIsClose = true;
            }
        }
})


// menu turn on btn 

const menuBtn = document.getElementsByClassName("menuBtn")[0];
const menu = document.getElementsByClassName("menu")[0];
const menuBtnLogo = document.getElementsByClassName("menuBtnLogo");


let menuIsClose = true;
menuBtn.addEventListener("click",()=>{
    if(menuIsClose === true){
        menu.style.opacity = "1";
        menu.style.zIndex = "1000";
        menuBtnLogo[0].style.opacity = "0";
        menuBtnLogo[1].style.opacity = "1";
        menuIsClose = false;
    }else{
        menu.style.opacity = "0";
        menu.style.zIndex = "0";
        menuBtnLogo[0].style.opacity = "1";
        menuBtnLogo[1].style.opacity = "0";
        menuIsClose = true;
    }
})




// window load and scroll event 
 
const nav = document.getElementsByClassName("nav");
const home = document.getElementsByClassName("home");

const scrollFunction = ()=>{
    if (document.documentElement.scrollTop > 40){
        nav[0].style.opacity = "0";
    }else{
        nav[0].style.opacity = "1";
    }
}

window.onscroll = function() {scrollFunction()};

window.addEventListener("load",()=>{
    nav[1].style.left = "0";
    home[0].style.right = "0";

})


// ------------------------------ BMI SHARING --------------------------------


const bmiMedicalSharing = document.getElementsByClassName("bmi-medical-sharing");

window.addEventListener("load",()=>{

    setTimeout(() => {
        bmiMedicalSharing[0].style.opacity = "1";
        bmiMedicalSharing[0].style.transform = "translateY(0)"
    }, 1000);

    setTimeout(() => {
        bmiMedicalSharing[1].style.opacity = "1";
        bmiMedicalSharing[1].style.transform = "translateY(0)"
    }, 1100);
    
    setTimeout(() => {
        bmiMedicalSharing[2].style.opacity = "1";
        bmiMedicalSharing[2].style.transform = "translateY(0)"
    }, 1200);
})