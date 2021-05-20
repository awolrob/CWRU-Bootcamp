document.getElementById("button1").onclick = myFunctionGrow;
document.getElementById("button2").onclick = myFunctionBlue;
document.getElementById("button3").onclick = myFunctionFade;
document.getElementById("button4").onclick = myFunctionReset;

const buttons = document.querySelectorAll("button");

for(let i=0; i< buttons.length; i++) {
  buttons[i].style.backgroundColor = "red";
}

function myFunctionGrow() {
    const objDocument = document.getElementById("box");
  
    let boxHeight = objDocument.clientHeight;
    // let boxHeight = objDocument.style.height;
    // boxHeight = boxHeight * 1.05;
    boxHeight *=1.05;

  
    let boxWidth = objDocument.clientWidth;
    // boxWidth = boxWidth * 1.05;
    boxWidth *=1.05;
    document.getElementById("box").style.height = boxHeight.toString() + "px";
    document.getElementById("box").style.width = boxWidth + "px";
  }
  
  function myFunctionBlue() {
    const objDocument = document.getElementById("box");
    objDocument.style.background = "blue";
  }

  function myFunctionFade() {
    let objDocument = document.getElementById("box");
  
    let boxOpacity = objDocument.style.opacity;
    // if (boxOpacity == "") {
    //     boxOpacity = 0.95;
    // }
    // else {
    //     boxOpacity = boxOpacity * 0.95;
    // }

    boxOpacity = boxOpacity * 0.95;



    document.getElementById("box").style.opacity = boxOpacity;
  }

function myFunctionReset() {

    const objDefaultStyleHeight = "150px";
    const objDefaultStyleWidth =  "150px"; 
    const objDefaultStyleBackgroundcolor = "orange"; 
    const objDefaultStyleMargin = "25px";
  
    document.getElementById("box").style.height = objDefaultStyleHeight;
    document.getElementById("box").style.width = objDefaultStyleWidth;
    document.getElementById("box").style.background = objDefaultStyleBackgroundcolor;
    document.getElementById("box").style.margin = objDefaultStyleMargin;
    document.getElementById("box").style.opacity = 1;
  }
