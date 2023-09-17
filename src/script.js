
// navi dropdown 

const dropdownBtn = document.getElementsByClassName("naviDropdownBtn");
const dropdown = document.getElementsByClassName("naviDropdown");

let navIsClose = true;
dropdownBtn[0].addEventListener("click", ()=>{
   
    if (navIsClose === true){
        dropdown[0].style.opacity = "1";
        dropdown[0].style.top = "40px"
        dropdown[0].style.zIndex = "1000";
        navIsClose = false;
    }else{
        dropdown[0].style.opacity = "0";
        dropdown[0].style.top = "50px"
        dropdown[0].style.zIndex = "0";

        navIsClose = true;
    }

})


// menu big dropdown 

dropdownBtn[1].addEventListener("click", ()=>{
   
        if(menu.offsetWidth > 640){
            if (navIsClose === true){
                dropdown[1].style.opacity = "1";
                dropdown[1].style.pointerEvents = "auto";
                // dropdown[1].style.left = "240px"
                navIsClose = false;
            }else{
                dropdown[1].style.opacity = "0";
                dropdown[1].style.pointerEvents = "none";
                // dropdown[1].style.left = "245px"
                navIsClose = true;
            }
        }else{
            if (navIsClose === true){
                dropdown[1].style.opacity = "1";
                dropdownBtn[1].style.marginBottom = "100px";
                dropdown[1].style.pointerEvents = "auto";
                // dropdown[1].style.left = "70px"

                navIsClose = false;
            }else{
                dropdown[1].style.opacity = "0";
                dropdownBtn[1].style.marginBottom = "0px";
                dropdown[1].style.pointerEvents = "none";

                navIsClose = true;
            }
        }
})

// menu small dropdown 
// const apple = document.getElementsByClassName("apple")[0];

// apple.addEventListener("click",()=>{
//     console.log("sayar gyi");
// })

// menu turn on btn 

const menuBtn = document.getElementsByClassName("menuBtn")[0];
const menu = document.getElementsByClassName("menu")[0];

let menuIsClose = true;
menuBtn.addEventListener("click",()=>{
    if(menuIsClose === true){
        menu.style.opacity = "1";
        menuIsClose = false;
    }else{
        menu.style.opacity = "0";
        menuIsClose = true;
    }
})

// menu cancel btn 

const menuCancel = document.getElementsByClassName("menuCancel")[0];

menuCancel.addEventListener("click",()=>{
    menu.style.opacity = "0";
    menuIsClose = true;
})




// window scroll event 
 
const nav = document.getElementsByClassName("nav")[0];

const scrollFunction = ()=>{
    if (document.documentElement.scrollTop > 400){
        // nav.style.position = "fixed";
        // nav.style.top = "0";
        // nav.style.left = "0";
        // nav.style.right = "0";
        nav.style.opacity = "0";
    }else{
        nav.style.opacity = "1";
        // nav.style.position = "relative";
    }
    

}

window.onscroll = function() {scrollFunction()};
