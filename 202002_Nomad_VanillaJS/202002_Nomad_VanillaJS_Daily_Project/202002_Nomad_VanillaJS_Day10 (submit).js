const ramdom = document.querySelector(".js-ramdom"),
      rangeYourResult = ramdom.querySelector(".js-rangeYourResult"),
      slideContainer = ramdom.querySelector(".slideContainer"),
      numberSlider=slideContainer.querySelector(".numberSlider"),
      maxNumber=slideContainer.querySelector(".maxNumber");

const submitForm = document.querySelector(".js-submitForm"),
      submit= submitForm.querySelector(".submit"),
      go = submitForm.querySelector(".go"),
      result = submitForm.querySelector(".js-result"),
      humanResult = submitForm.querySelector(".js-humanResult");
      vs = submitForm.querySelector(".js-vs");


let WhatNumbers =[];
let WhatMachineNumbers =[];
let WhatMyNumbers =[];

function pleaseMove(){
    var whatNumber = numberSlider.value;
    maxNumber.innerText =  `Generate a number between 1 and ${whatNumber}`;
    WhatNumbers.push(whatNumber);
}

function generateMachineNumber(){
    let arrangeNumber = WhatNumbers[WhatNumbers.length-1];
    console.log(arrangeNumber);
    let ranNumber = Math.floor(Math.random()*(arrangeNumber)) + 1;
    result.innerText =  `Machine: ${ranNumber}`;
    WhatMachineNumbers.push(ranNumber);
    console.log(ranNumber);
    comparingMyvsMachine();
}

function usingNumber(number){
    number.preventDefault();
    let myNumber = submit.value 
    humanResult.innerText = `My Number: ${myNumber}`;
    WhatMyNumbers.push(myNumber);
    generateMachineNumber();
    console.log(myNumber);
}

function comparingMyvsMachine(){
    let ma = WhatMachineNumbers[WhatMachineNumbers.length-1];
    let my = WhatMyNumbers[WhatMyNumbers.length-1];
    if(parseInt(ma) === parseInt(my)){vs.innerText = "you win!"}
    else {vs.innerText = "you lose!"}
}

function init(){
    numberSlider.addEventListener("change", pleaseMove);
    go.addEventListener("click", usingNumber);
}

init()
