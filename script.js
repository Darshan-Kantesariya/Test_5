// menu hide-show

let button = document.getElementById("click_dot");
 var count = 0;
button.onclick = function () {
  count += 1;
  if (count % 2 != 0) {
    // document.querySelector(".side").style.display = "none";
    // button.style.display="inline-block";
   
  } else {
    document.querySelector(".side").style.display = "inline-block";
    button.style.display="none";
    console.log(count);
  }
};

// min 600px side sidebar


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.padding = "1rem";
  document.getElementById("mt2").style.marginTop = "2rem";
  
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.padding = "0";
}

// 

function cdot(){
  let button = document.getElementById("click_dot");
  if(button.style.display!="inline-block"){
    document.querySelector(".side").style.display = "none";
    button.style.display="inline-block";
    console.log(count);
    count++;
  }
}

// menu hide-show

function show(b) {
  var n = b;
  // var n = 4

  const box = document.querySelector(`.menu-list-drop5-ele${n}`);
  if (box.style.display == "inline-block") {
    box.style.display = "none";
    document.querySelector(`.menu-list-drop${n}`).style.height = "1.5rem";
    console.log(`.menu-list-drop${n}`);
    document.querySelector(`.menu-list-drop5-team-icon${n}`).style.transform =
      "rotate(90deg)";
  } else {
    box.style.display = "inline-block";
    if (window.innerWidth > 600) {
      document.querySelector(`.menu-list-drop${n}`).style.height = "6rem";
    }
    document.querySelector(`.menu-list-drop5-team-icon${n}`).style.transform =
      "rotate(0deg)";
  }
}

// function show1() {
//   const box = document.querySelector(".menu-list-drop5-ele1");
//   if (window.innerWidth < 600) {
//     if (box.style.display == "inline-block") {
//       box.style.display = "none";
//       document.querySelector(".menu-list-drop1").style.height = "1.5rem";
//       document.querySelector(".menu-list-drop5-team-icon1").style.transform =
//         "rotate(90deg)";
//     } else {
//       box.style.display = "inline-block";
//       if (window.innerWidth > 600) {
//         document.querySelector(".menu-list-drop1").style.height = "11.5rem";
//       }
//       document.querySelector(".menu-list-drop5-team-icon1").style.transform =
//         "rotate(0deg)";
//     }
//   } else {
//     if (box.style.display != "none") {
//       box.style.display = "none";
//       document.querySelector(".menu-list-drop1").style.height = "1.5rem";
//       document.querySelector(".menu-list-drop5-team-icon1").style.transform =
//         "rotate(90deg)";
//     } else {
//       box.style.display = "inline-block";
//       if (window.innerWidth > 600) {
//         document.querySelector(".menu-list-drop1").style.height = "11.5rem";
//       }
//       document.querySelector(".menu-list-drop5-team-icon1").style.transform =
//         "rotate(0deg)";
//     }
//   }
// }

function show2() {
  const box = document.querySelector(".menu-list-drop5-ele2");

  if (window.innerWidth < 600) {
    if (box.style.display == "inline-block") {
      box.style.display = "none";
      document.querySelector(".menu-list-drop2").style.height = "1.5rem";
      document.querySelector(".menu-list-drop5-team-icon2").style.transform =
        "rotate(90deg)";
    } else {
      box.style.display = "inline-block";
      if (window.innerWidth > 600) {
        document.querySelector(".menu-list-drop2").style.height = "9rem";
      }
      document.querySelector(".menu-list-drop5-team-icon2").style.transform =
        "rotate(0deg)";
    }
  } else {
    if (box.style.display != "none") {
      box.style.display = "none";
      document.querySelector(".menu-list-drop2").style.height = "1.5rem";
      document.querySelector(".menu-list-drop5-team-icon2").style.transform =
        "rotate(90deg)";
    } else {
      box.style.display = "inline-block";
      if (window.innerWidth > 600) {
        document.querySelector(".menu-list-drop2").style.height = "9rem";
      }
      document.querySelector(".menu-list-drop5-team-icon2").style.transform =
        "rotate(0deg)";
    }
  }
}

function show1() {
  const box = document.querySelector(".menu-list-drop5-ele1");
  if (window.innerWidth < 600) {
    if (box.style.display == "inline-block") {
      box.style.display = "none";
      document.querySelector(".menu-list-drop1").style.height = "1.5rem";
      document.querySelector(".menu-list-drop5-team-icon1").style.transform =
        "rotate(90deg)";
    } else {
      box.style.display = "inline-block";
      if (window.innerWidth > 600) {
        document.querySelector(".menu-list-drop1").style.height = "6rem";
      }
      document.querySelector(".menu-list-drop5-team-icon1").style.transform =
        "rotate(0deg)";
    }
  } else {
    if (box.style.display != "none") {
      box.style.display = "none";
      document.querySelector(".menu-list-drop1").style.height = "1.5rem";
      document.querySelector(".menu-list-drop5-team-icon1").style.transform =
        "rotate(90deg)";
    } else {
      box.style.display = "inline-block";
      if (window.innerWidth > 600) {
        document.querySelector(".menu-list-drop1").style.height = "11.5rem";
      }
      document.querySelector(".menu-list-drop5-team-icon1").style.transform =
        "rotate(0deg)";
    }
  }
}
// function show4() {
//   const box = document.querySelector(".menu-list-drop5-ele4");
//   if (box.style.display == "inline-block") {
//     box.style.display = "none";
//     document.querySelector(".menu-list-drop4").style.height = "1.5rem";
//     document.querySelector(".menu-list-drop5-team-icon4").style.transform =
//       "rotate(90deg)";
//   } else {
//     box.style.display = "inline-block";
//     if (window.innerWidth > 600) {
//       document.querySelector(".menu-list-drop4").style.height = "7rem";
//     }
//     // document.querySelector(".menu-list-drop4").style.height = "8rem";
//     document.querySelector(".menu-list-drop5-team-icon4").style.transform =
//       "rotate(0deg)";
//   }
// }

function btn1() {
  document.querySelector(".card-rim-box-button-1").style.backgroundColor =
    "var(--color-card-1)";
  document.querySelector(".card-rim-box-button-2").style.backgroundColor =
    "#fcbea358";
  document.querySelector(".card-rim-box-button-3").style.backgroundColor =
    "#fcbea358";
}
function btn2() {
  document.querySelector(".card-rim-box-button-1").style.backgroundColor =
    "#fcbea358";
  document.querySelector(".card-rim-box-button-2").style.backgroundColor =
    "var(--color-card-1)";
  document.querySelector(".card-rim-box-button-3").style.backgroundColor =
    "#fcbea358";
}
function btn3() {
  document.querySelector(".card-rim-box-button-1").style.backgroundColor =
    "#fcbea358";
  document.querySelector(".card-rim-box-button-2").style.backgroundColor =
    "#fcbea358";
  document.querySelector(".card-rim-box-button-3").style.backgroundColor =
    "var(--color-card-1)";
}

function myFunction() {
  var x = document.getElementById("myCheck").checked;
  if (x == false) {
    document.querySelector(".side-task-div-4").classList.remove("bg-color");
    document.getElementById("changeco4").style.stroke = "#f0884e";
    document.getElementById("changeco2").style.stroke = "#f0884e";
    document.getElementById("changeco3").style.stroke = "#f0884e";
    document
      .querySelector(".side-task-div-2-text")
      .classList.remove("text-white");
    document
      .querySelector(".side-task-div-2-title-2")
      .classList.remove("text-white");
  } else {
    document.getElementById("changeco4").style.stroke = "#fff";
    document.getElementById("changeco2").style.stroke = "#fff";
    document.getElementById("changeco3").style.stroke = "#fff";
    document.querySelector(".side-task-div-2-text").classList.add("text-white");
    document
      .querySelector(".side-task-div-2-title-2")
      .classList.add("text-white");
    document.querySelector(".side-task-div-4").classList.add("bg-color");
  }
}

function myFunction1() {
  var x = document.getElementById("myCheck1").checked;
  if (x == false) {
    document
      .querySelector(".side-task-div-2-text1")
      .classList.remove("text-white");
    document
      .querySelector(".side-task-div-2-title-21")
      .classList.remove("text-white");
    document.querySelector(".side-task-div-3").classList.remove("bg-color");
    document.getElementById("changeco5").style.border =
      "1px solid var(--color-side-card)";
    document.getElementById("changeco6").style.border =
      "1px solid var(--color-side-card)";
    document.getElementById("changeco7").style.border =
      "1px solid var(--color-side-card)";
  } else {
    document
      .querySelector(".side-task-div-2-text1")
      .classList.add("text-white");
    document
      .querySelector(".side-task-div-2-title-21")
      .classList.add("text-white");
    document.querySelector(".side-task-div-3").classList.add("bg-color");
    document.getElementById("changeco5").style.border = "1px solid white";
    document.getElementById("changeco6").style.border = "1px solid white";
    document.getElementById("changeco7").style.border = "1px solid white";
  }
}

function myFunction2() {
  var x = document.getElementById("myCheck2").checked;
  if (x == false) {
    document.querySelector(".side-task-div-2").classList.remove("bg-color");
    document.getElementById("changeco").style.stroke = "#f0884e";
    document.getElementById("changeco1").style.stroke = "#f0884e";
    document
      .querySelector(".side-task-div-2-text2")
      .classList.remove("text-white");
    document
      .querySelector(".side-task-div-2-title-22")
      .classList.remove("text-white");
  } else {
    document.querySelector(".side-task-div-2").classList.add("bg-color");
    document.getElementById("changeco").style.stroke = "white";
    document.getElementById("changeco1").style.stroke = "white";
    document
      .querySelector(".side-task-div-2-text2")
      .classList.add("text-white");
    document
      .querySelector(".side-task-div-2-title-22")
      .classList.add("text-white");
  }
}
