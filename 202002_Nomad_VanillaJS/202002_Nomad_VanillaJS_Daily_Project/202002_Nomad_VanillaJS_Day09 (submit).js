
/* function을 A추가 A삭제 B추가 B삭제로 나눠서 조정 할 것
중복 반복문을 제거..... 해야하는...데... 아침의 나 힘내....
어제의 나는 널 믿고 잘거야... 미안... */

const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      pendingList = document.querySelector(".js-pendingList"),
      finishList = document.querySelector(".js-finishList");

const PENDING_LS = "pendingDos"
const FINISH_LS = "finishDos"

let pendingDos = [];
let finishDos = [];

// A section : 삭제용

function deletingToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
    const cleanPendinigList = pendingDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    pendingDos = cleanPendinigList;
    savePendingDos();
}

// B section : 삭제용

function deletingFinish(event){
    const btn = event.target;
    const li = btn.parentNode;
    finishList.removeChild(li);
    const cleanfinishList = finishDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    finishDos = cleanfinishList;
    saveFinishDos();
}

// B section : B section 에서 A secction으로 아이템 등록 -> A section

function backPending(event){
    const btn = event.target;
    const li = btn.parentNode;
    const newLi = li.querySelector("span");
    const revisedLi = newLi.innerText;
    const creatingLi = document.createElement("revisedLi");
    const delBtn = document.createElement("button");
    const addfinishBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = pendingDos.length + 1;
    span.innerText = revisedLi;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deletingToDo);
    addfinishBtn.innerText = "▶";
    addfinishBtn.addEventListener("click", deletingToDo); //문제없음
    addfinishBtn.addEventListener("click", toFinish);
    creatingLi.appendChild(span);
    creatingLi.appendChild(delBtn);
    creatingLi.appendChild(addfinishBtn);
    creatingLi.id = newID;
    const pendingDoObj = {
        text : revisedLi,
        id : pendingDos.length + 1}
    pendingList.appendChild(creatingLi);
    pendingDos.push(pendingDoObj);
    savePendingDos();
}


// A section : A section 에서 B section으로의 아이템 등록 -> B section

function toFinish(event){
    const btn = event.target;
    const li = btn.parentNode;
    const newLi = li.querySelector("span");
    const revisedLi = newLi.innerText;
    const creatingLi = document.createElement("revisedLi");
    const delBtn = document.createElement("button");
    const backPendingBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = finishDos.length + 1;
    span.innerText = revisedLi;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deletingFinish);
    backPendingBtn.innerText = "◀";
    backPendingBtn.addEventListener("click", deletingFinish);   // Finish를 지우는 방법
    backPendingBtn.addEventListener("click", backPending); // Pending으로 넘기는 방법 A에 재등록 시키는 방법
    creatingLi.appendChild(span);
    creatingLi.appendChild(delBtn);
    creatingLi.appendChild(backPendingBtn);
    creatingLi.id = newID;
    const finishDoObj = {
        text : revisedLi,
        id : finishDos.length + 1}
    finishList.appendChild(creatingLi);
    finishDos.push(finishDoObj);
    saveFinishDos();
}


// A section : localStorage 저장용

function savePendingDos(){ // 문제없음
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingDos));
}


// B section : localStorage 저장용

function saveFinishDos(){
    localStorage.setItem(FINISH_LS, JSON.stringify(finishDos));
}


// A section : 1. 기존정보 있던 걸 끌어와서 뿌려주기. Section A. 
// 2. inputing 되었을 때 . Section A에 기입되는 것 

function inputingToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const addfinishBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = pendingDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(addfinishBtn);
    li.id = newID;
    const pendingDoObj = {
        text : text,
        id : pendingDos.length + 1}
    pendingList.appendChild(li);
    pendingDos.push(pendingDoObj);
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deletingToDo); //문제없음
    addfinishBtn.innerText = "▶";
    addfinishBtn.addEventListener("click", deletingToDo); //문제없음
    addfinishBtn.addEventListener("click", toFinish);
    savePendingDos(); // 문제없음 
}

// 1. Section B. 기존정보 있던 걸 끌어와서 뿌려주기. 

function finishToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const backPendingBtn = document.createElement("button");
    const span = document.createElement("span");
    const newID = finishDos.length + 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(backPendingBtn);
    li.id = newID;
    const finishDoObj = {
        text : text,
        id : finishDos.length + 1}
    finishList.appendChild(li);
    finishDos.push(finishDoObj);
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deletingFinish);   // Finish를 지우는 방법
    backPendingBtn.innerText = "◀";
    backPendingBtn.addEventListener("click", deletingFinish);   // Finish를 지우는 방법
    backPendingBtn.addEventListener("click", backPending); // Pending으로 넘기는 방법 A에 재등록 시키는 방법

}


// 2-1. 입력 정보를 value 형태로 잡아두기 (문제 없음)
// 2-2. 입력창 초기화 시키기

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    inputingToDo(currentValue);
    toDoInput.value = "";
}

// 1. 기존정보 있던 걸 끌어와서 뿌려주기. Section A. 

function loadPending(){
    const loadedPendingDos = localStorage.getItem(PENDING_LS);
    if (loadedPendingDos !== null){    
        const parsedToDos= JSON.parse(loadedPendingDos);
        parsedToDos.forEach(function(toDo){
            inputingToDo(toDo.text);
        })   
    }
}


// 1. 기존정보 있던 걸 끌어와서 뿌려주기. Section B. 

function loadFinish(){
    const loadedFinishDos = localStorage.getItem(FINISH_LS);
    if (loadedFinishDos !== null){    
        const parsedToDos= JSON.parse(loadedFinishDos);
        parsedToDos.forEach(function(toDo){
            finishToDo(toDo.text);
        })  
    }
}


// 0. 입력이 되었음

function init(){
    loadPending();
    loadFinish();
    toDoForm.addEventListener("submit", handleSubmit)
}

init()