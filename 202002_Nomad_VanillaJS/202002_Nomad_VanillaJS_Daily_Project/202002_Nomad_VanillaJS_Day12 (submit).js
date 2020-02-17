
const cal = document.querySelector(".cal")
const nu1 = cal.querySelector(".nu1"),
      nu2 = cal.querySelector(".nu2"),
      nu3 = cal.querySelector(".nu3"),
      nu4 = cal.querySelector(".nu4"),
      nu5 = cal.querySelector(".nu5"),
      nu6 = cal.querySelector(".nu6"),
      nu7 = cal.querySelector(".nu7"),
      nu8 = cal.querySelector(".nu8"),
      nu9 = cal.querySelector(".nu9"),
      nu0 = cal.querySelector(".nu0"),
      opPlus = cal.querySelector(".op__plus"),
      opMinus = cal.querySelector(".op__minus"),
      opTime = cal.querySelector(".op__time"),
      opDivide = cal.querySelector(".op__divide"),
      opEnd = cal.querySelector(".op__end"),
      opClear = cal.querySelector(".op__clear"),
      NumberDis = cal.querySelector(".display__number"),
      ConcluDis = cal.querySelector(".display__conclution");

let NUMBERS = "numbers",
    CONCLUSIONS ="conclutions",
    OPERATIONS ="operations";

let numbers = [],
    conclutions =[],
    operations = [];

function number1(){
    const getNumber = nu1.innerHTML;
    NumberDis.value = NumberDis.value + getNumber
}

function number2(){
    const getNumber = nu2.innerHTML;
    NumberDis.value = NumberDis.value + getNumber
}

function number3(){
    const getNumber = nu3.innerHTML;
    NumberDis.value = NumberDis.value + getNumber
}

function number4(){
    const getNumber = nu4.innerHTML;
    NumberDis.value = NumberDis.value + getNumber
}

function number5(){
    const getNumber = nu5.innerHTML;
    NumberDis.value = NumberDis.value + getNumber
}

function number6(){
    const getNumber = nu6.innerHTML;
    NumberDis.value = NumberDis.value + getNumber
}

function number7(){
    const getNumber = nu7.innerHTML;
    NumberDis.value = NumberDis.value + getNumber
}

function number8(){
    const getNumber = nu8.innerHTML;
    NumberDis.value = NumberDis.value + getNumber
}

function number9(){
    const getNumber = nu9.innerHTML;
    NumberDis.value = NumberDis.value + getNumber
}

function number0(){
    const getNumber = nu0.innerHTML;
    NumberDis.value = NumberDis.value + getNumber
}


function operPlus(){
    let operator = opPlus.innerHTML;  
    operations.push(operator); // 연산자 등록
    let newNumber = NumberDis.value;  
    numbers.push(newNumber); // 숫자 등록
    NumberDis.value = "";
    
    if(numbers.length === 1){
    conclutions.push(newNumber);} // 숫자 없을 시에 결과값 등록
    else{
    checkingPreviousOp();}
}

function operMinus(){
    let operator = opMinus.innerHTML;  
    operations.push(operator); // 연산자 등록
    let newNumber = NumberDis.value;  
    numbers.push(newNumber); // 숫자 등록
    NumberDis.value = "";
    
    if(numbers.length === 1){
    conclutions.push(newNumber);} // 숫자 없을 시에 결과값 등록
    else{
    checkingPreviousOp();}
}


function operTime(){
    let operator = opTime.innerHTML;  
    operations.push(operator);
    let newNumber = NumberDis.value;  
    numbers.push(newNumber);
    NumberDis.value = "";

    if(numbers.length === 1){
    conclutions.push(newNumber);
    }
    else{
    checkingPreviousOp();}
}


function operDivide(){
    let operator = opDivide.innerHTML;  
    operations.push(operator); // 연산자 등록
    let newNumber = NumberDis.value;  
    numbers.push(newNumber); // 숫자 등록
    NumberDis.value = "";
    
    if(numbers.length === 1){
    conclutions.push(newNumber);} // 숫자 없을 시에 결과값 등록
    else{
    checkingPreviousOp();}
}


function checkingPreviousOp(){
    let previousCon = conclutions[conclutions.length-1] 
    let newNumberOp= numbers[numbers.length-1]
    let operation = operations[operations.length-2]   
    if(operation === "+"){
        const plusOperation=calc.plus(previousCon, newNumberOp);
        conclutions.push(plusOperation);
        ConcluDis.value =  conclutions[conclutions.length-1];
    }
    else if(operation === "-"){
        const minusOperation=calc.minus(previousCon, newNumberOp);
        conclutions.push(minusOperation);
        ConcluDis.value =  conclutions[conclutions.length-1];
    }
    else if(operation === "*"){
        const timeOperation=calc.time(previousCon, newNumberOp);
        conclutions.push(timeOperation);
        ConcluDis.value =  conclutions[conclutions.length-1];
    }
    else if(operation === "/"){
        const divideOperation=calc.divide(previousCon, newNumberOp);
        conclutions.push(divideOperation);
        ConcluDis.value =  conclutions[conclutions.length-1];
    }        
    else {console.log("I don't know what to do!")}
}

const calc = {
    plus: function Plus (a,b){
        return parseInt(a) + parseInt(b)},
    minus: function(a,b){
        return parseInt(a) - parseInt(b)},
    time: function(a,b){
        return parseInt(a) * parseInt(b)},
    divide: function(a,b){
        return parseInt(a) / parseInt(b)}
}

function operEnd(){
    let newNumber = NumberDis.value;  
    numbers.push(newNumber); // 숫자 등록
    NumberDis.value = "";
    let previousCon = conclutions[conclutions.length-1] 
    let newNumberOp= numbers[numbers.length-1]
    let operation = operations[operations.length-1]   
    if(operation === "+"){
        const plusOperation=calc.plus(previousCon, newNumberOp);
        conclutions.push(plusOperation);
        ConcluDis.value =  conclutions[conclutions.length-1];
    }
    else if(operation === "-"){
        const minusOperation=calc.minus(previousCon, newNumberOp);
        conclutions.push(minusOperation);
        ConcluDis.value =  conclutions[conclutions.length-1];
    }
    else if(operation === "*"){
        const timeOperation=calc.time(previousCon, newNumberOp);
        conclutions.push(timeOperation);
        ConcluDis.value =  conclutions[conclutions.length-1];
    }
    else if(operation === "/"){
        const divideOperation=calc.divide(previousCon, newNumberOp);
        conclutions.push(divideOperation);
        ConcluDis.value =  conclutions[conclutions.length-1];
    }        
    else {console.log("I don'tknow what to do!")}
}

function operClear(){
    numbers = [];
    conclutions =[];
    operations = [];
    NumberDis.value = "";
    ConcluDis.value = "";
}

function init(){
    nu1.addEventListener("click", number1);
    nu2.addEventListener("click", number2);    
    nu3.addEventListener("click", number3);    
    nu4.addEventListener("click", number4);
    nu5.addEventListener("click", number5);    
    nu6.addEventListener("click", number6);    
    nu7.addEventListener("click", number7);
    nu8.addEventListener("click", number8);    
    nu9.addEventListener("click", number9);    
    nu0.addEventListener("click", number0);    
    opPlus.addEventListener("click", operPlus);
    opMinus.addEventListener("click", operMinus);
    opTime.addEventListener("click", operTime);
    opDivide.addEventListener("click", operDivide);
    opEnd.addEventListener("click", operEnd);
    opClear.addEventListener("click", operClear);
}

init()

