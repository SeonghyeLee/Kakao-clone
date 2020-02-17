// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.getElementsByTagName("h2")[0];

const superEventHandler = {
  enter : function handleEnter() {
    title.innerHTML="The mouse is here!";
    title.style.color= colors[0];
  },
  leave : function handleLeave() {
    title.innerHTML="The mouse is gone!";
    title.style.color= colors[1];
  },
  resize : function handleResize() {
    title.innerHTML="You just resiezed!";
    title.style.color=colors[2];
  },
  rClick: function handleRClick() {
    title.innerHTML="That was a right click!"
    title.style.color=colors[4];
  }
}

title.addEventListener("mouseenter", superEventHandler.enter); 
title.addEventListener("mouseleave", superEventHandler.leave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rClick);
