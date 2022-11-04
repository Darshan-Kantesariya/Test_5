  // menu hide-show

//   let button = document.querySelector(".menu-list-drop-team"),
//   count = 0;
// button.onclick = function () {
//   count += 1;
//   if (count % 2 != 0) {
//     document.querySelector(".menu-list-drop-ele").style.display = "none";
    
//   }
//   else {
//     document.querySelector(".menu-list-drop-ele").style.display = "inline-block";
//   }
// }

  // menu hide-show

  function show() {
    const box = document.querySelector(".menu-list-drop-ele");
    if (box.style.display == "inline-block") {
        box.style.display = "none";
        document.querySelector(".menu-list-drop").style.height = "1.5rem";
        document.querySelector(".menu-list-drop-team-icon").style.transform = "rotate(90deg)";
    }
    else {
        box.style.display = "inline-block";
        document.querySelector(".menu-list-drop").style.height = "6rem";
        document.querySelector(".menu-list-drop-team-icon").style.transform = "rotate(0deg)";
    }
}

function show1() {
    const box = document.querySelector(".menu-list-drop-ele1");
    if (box.style.display != "none") {
        box.style.display = "none";
        document.querySelector(".menu-list-drop1").style.height = "1.5rem";
        document.querySelector(".menu-list-drop-team-icon1").style.transform = "rotate(90deg)";
    }
    else {
        box.style.display = "inline-block";
        document.querySelector(".menu-list-drop1").style.height = "11.5rem";
        document.querySelector(".menu-list-drop-team-icon1").style.transform = "rotate(0deg)";
    }
}

function show2() {
    const box = document.querySelector(".menu-list-drop-ele2");
    if (box.style.display != "none") {
        box.style.display = "none";
        document.querySelector(".menu-list-drop2").style.height = "1.5rem";
        document.querySelector(".menu-list-drop-team-icon2").style.transform = "rotate(90deg)";
    }
    else {
        box.style.display = "inline-block";
        document.querySelector(".menu-list-drop2").style.height = "9rem";
        document.querySelector(".menu-list-drop-team-icon2").style.transform = "rotate(0deg)";
    }
}

function show3() {
    const box = document.querySelector(".menu-list-drop-ele3");
    if (box.style.display == "inline-block") {
        box.style.display = "none";
        document.querySelector(".menu-list-drop3").style.height = "1.5rem";
        document.querySelector(".menu-list-drop-team-icon3").style.transform = "rotate(90deg)";
    }
    else {
        box.style.display = "inline-block";
        document.querySelector(".menu-list-drop3").style.height = "6rem";
        document.querySelector(".menu-list-drop-team-icon3").style.transform = "rotate(0deg)";
    }
}

function show4() {
    const box = document.querySelector(".menu-list-drop-ele4");
    if (box.style.display == "inline-block") {
        box.style.display = "none";
        document.querySelector(".menu-list-drop4").style.height = "1.5rem";
        document.querySelector(".menu-list-drop-team-icon4").style.transform = "rotate(90deg)";
    }
    else {
        box.style.display = "inline-block";
        document.querySelector(".menu-list-drop4").style.height = "6rem";
        document.querySelector(".menu-list-drop-team-icon4").style.transform = "rotate(0deg)";
    }
}

function btn1(){
    document.querySelector(".card-rim-box-button-1").style.backgroundColor="var(--color-card-1)";
    document.querySelector(".card-rim-box-button-2").style.backgroundColor="#fcbea358";
    document.querySelector(".card-rim-box-button-3").style.backgroundColor="#fcbea358";
}
function btn2(){
    document.querySelector(".card-rim-box-button-1").style.backgroundColor="#fcbea358";
    document.querySelector(".card-rim-box-button-2").style.backgroundColor="var(--color-card-1)";
    document.querySelector(".card-rim-box-button-3").style.backgroundColor="#fcbea358";
}
function btn3(){
    document.querySelector(".card-rim-box-button-1").style.backgroundColor="#fcbea358";
    document.querySelector(".card-rim-box-button-2").style.backgroundColor="#fcbea358";
    document.querySelector(".card-rim-box-button-3").style.backgroundColor="var(--color-card-1)";

}