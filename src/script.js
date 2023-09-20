
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
                dropdownBtn[1].style.marginBottom = "100px";
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


// BMI RELATED ANIMATION AND BUTTON 

// Standard Method

const heightFeet = document.getElementById("height-feet");
const heightInches = document.getElementById("height-inches");
const weight = document.getElementById("weight");
const bmiBtn = document.getElementById("bmi-btn");
const bmiResult = document.getElementsByClassName("bmi-result")[0];

bmiBtn.addEventListener("click", () => {
  const inches = (
    parseInt(heightFeet.value) * 12 +
    parseInt(heightInches.value)
  ).toFixed(2);
  const pounds = parseInt(weight.value).toFixed(2);
  console.log(inches, pounds);
  const values = (703 * (pounds / inches ** 2)).toFixed(2);
  if (values === "NaN") {
    // bmiResult.innerHTML = "Your BMI";
    alert("Fill your weight and height in the given input!");
    return;
  }
  bmiResult.innerHTML = "Your BMI: " + values;
  bmiBtn.style.top = "-5px";
  bmiResult.style.opacity = "1";
  bmiResult.style.top = "45px";
});


//  Metric Method
const heightCentimeter = document.getElementById("height-centimeter");
const weightKg = document.getElementById("weight-kg");
const bmiBtnKg = document.getElementById("bmi-btn-kg");
const bmiResultKg = document.getElementsByClassName("bmi-result-kg")[0];

bmiBtnKg.addEventListener("click", () => {
  const meter = (parseInt(heightCentimeter.value) / 100).toFixed(2);
  const kilogram = parseInt(weightKg.value).toFixed(2);
  const metricValue = (kilogram / meter ** 2).toFixed(2);
  if (metricValue === "NaN") {
    // bmiResult.innerHTML = "Your BMI";
    alert("Fill your weight and height in the given input!");
    return;
  }
  bmiResultKg.innerHTML = "Your BMI: " + metricValue;
  bmiBtnKg.style.top = "-5px";
  bmiResultKg.style.opacity = "1";
  bmiResultKg.style.top = "45px";
});


// Standard and metric Changing

const calculationStandard = document.getElementsByClassName(
    "calculation-standard"
  )[0];
  const calculationMetric =
    document.getElementsByClassName("calculation-metric")[0];
  const standard_btn = document.getElementsByClassName("standard")[0];
  const metric_btn = document.getElementsByClassName("metric")[0];
  
  standard_btn.addEventListener("click", () => { 
    calculationMetric.style.opacity = "0";
    calculationMetric.style.pointerEvents = "none";
    calculationStandard.style.opacity = "1";
    calculationStandard.style.pointerEvents = "all";
  });
  metric_btn.addEventListener("click", () => {
      calculationStandard.style.opacity = "0";
      calculationStandard.style.pointerEvents = "none";
      calculationMetric.style.opacity = "1";
      calculationMetric.style.pointerEvents = "all";

  });


// bmi window events 

  const bmiLoadAnimation = document.getElementsByClassName("bmiLoadAnimation");

  window.addEventListener("load",()=>{
    
    setTimeout(() => {
            bmiLoadAnimation[0].style.opacity = "1";
            bmiLoadAnimation[0].style.top = "10%";       
    }, 800);
    
    setTimeout(() => {
        bmiLoadAnimation[1].style.opacity = "1";
        bmiLoadAnimation[1].style.top = "10%";       
    }, 900);

    setTimeout(() => {
        bmiLoadAnimation[2].style.opacity = "1";
        bmiLoadAnimation[2].style.top = "10%";       
    }, 1000);

    setTimeout(() => {
        calculationStandard.style.opacity = "1";
        calculationStandard.style.top = "5%";
    }, 1100);

    setTimeout(() => {
        standard_btn.style.opacity = "1";
        standard_btn.style.bottom = "20px";
        metric_btn.style.opacity = "1";
        metric_btn.style.bottom = "0px";
    }, 1200);

    setTimeout(() => {
        standard_btn.style.bottom = "0px";
        metric_btn.style.bottom = "20px";
    }, 1700);

    setTimeout(() => {
        standard_btn.style.bottom = "10px";
        metric_btn.style.bottom = "10px";
    }, 2200);
})

