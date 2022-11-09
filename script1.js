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

function shows(c) {
  var n = c;
  const box = document.querySelector(`menu-list-drop5-ele${n}`);
  if (window.innerWidth < 600) {
    if (box.style.display == "inline-block") {
      box.style.display = "none";
      document.querySelector(`menu-list-drop${n}`).style.height = "1.5rem";
      document.querySelector(`menu-list-drop5-team-icon${n}`).style.transform =
        "rotate(90deg)";
    } else {
      box.style.display = "inline-block";
      if (window.innerWidth > 600) {
        document.querySelector(`menu-list-drop${n}`).style.height = "11.5rem";
      }
      document.querySelector(`menu-list-drop5-team-icon${n}`).style.transform =
        "rotate(0deg)";
    }
  } else {
    if (box.style.display != "none") {
      box.style.display = "none";
      document.querySelector(`menu-list-drop${n}`).style.height = "1.5rem";
      document.querySelector(`menu-list-drop5-team-icon${n}`).style.transform =
        "rotate(90deg)";
    } else {
      box.style.display = "inline-block";
      if (window.innerWidth > 600) {
        document.querySelector(`menu-list-drop${n}`).style.height = "11.5rem";
      }
      document.querySelector(`menu-list-drop5-team-icon${n}`).style.transform =
        "rotate(0deg)";
    }
  }
}
