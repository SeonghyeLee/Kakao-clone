
const COLORS = ["#3498db", "#9b59b6", "#f1c40f"]
const title = document.querySelector("h1");
const width_size = window.outerWidth;

title.innerHTML = "Hello!";
title.style.color = "red";

if(width_size < 700) {
    document.body.style.backgroundColor = COLORS[0];
}
else if (width_size >= 700 && width_size <= 900 ) {
    document.body.style.backgroundColor = COLORS[1];
}
else {
    document.body.style.backgroundColor = COLORS[2];
}

function widthChecker()
{
    const width_size = window.outerWidth;
    if(width_size < 700) {
        document.body.style.backgroundColor = COLORS[0];
    }
    else if (width_size >= 700 && width_size <= 900 ) {
        document.body.style.backgroundColor = COLORS[1];
    }
    else {
        document.body.style.backgroundColor = COLORS[2];
    }
}


window.addEventListener("resize", widthChecker);