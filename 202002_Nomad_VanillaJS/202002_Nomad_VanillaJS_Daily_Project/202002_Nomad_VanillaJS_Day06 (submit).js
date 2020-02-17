

const selection = document.querySelector(".js-selection"),
      option = selection.querySelectorAll("option");
    const USER_COUNTRY = "Country";


// 1-2. 잡은 value를 저장시키기. 여기서 value값을 저장시켜야 함으로
//      다시 정의를 내려준 후에 localstorage에 저장

function savingSelection(){
    const selectedCountry = selection.value;
    localStorage.setItem(USER_COUNTRY, selectedCountry);
}

// 1-1. Country로 택해질 value를 addEventListener로 (Change)를 잡는다.

function checkingCountry(){
    selection.addEventListener("change", savingSelection);
}


//2-1. 일단 데이터를 가져와 여기서 가져올 수 있는 값은 value 값임

function holdingCountry(){
    const selectedValue = localStorage.getItem(USER_COUNTRY); 
    if(option[1].value === selectedValue)
    {option[1].setAttribute("selected", "")}
    else if(option[2].value === selectedValue)
    {option[2].setAttribute("selected", "")}
    else if(option[3].value === selectedValue)
    {option[3].setAttribute("selected", "")}
    else if(option[4].value === selectedValue)
    {option[4].setAttribute("selected", "")}
    else {
        console.log("I don't know")
    }
}

//2-1. value 값으로 HTML을 조정해야 함 거기에 Selected 문구를 넣어야 함
//아아이ㅏㅇㅁㄴ리ㅏㅇㅁ로ㅓㅣㅜ밍



/*


    const temp ="";
    $("selection").val();

$(function() {
    var temp="a"; 
    $("#MySelect").val(temp);
});

<select name="MySelect" id="MySelect">
    <option value="a">a</option>
    <option value="b">b</option>
    <option value="c">c</option>
</select>

*/
// 0. 나라가 기존에 저장된 게 없다.  true->1 / false->2

function loadCountry(){
    const Country = localStorage.getItem(USER_COUNTRY);
    if (Country === null){
        checkingCountry();
    }
    else {
        holdingCountry(Country);
    }
}


function init(){
    loadCountry();
}

init();
