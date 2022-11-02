
    // search in header hide-show
    function show() {
        const box = document.querySelector(".maincomp-se");
        if (box.style.display != "none") {
            document.querySelector(".maincomp-se").style.display = "none";
        }
        else {
            document.querySelector(".maincomp-se").style.display = "inline-block";
        }
    }


    // navigation hide-show

    var button = document.getElementById("nav_click"),
        count = 0;
    button.onclick = function () {
        count += 1;
        if (count % 2 != 0) {
            document.querySelector(".navigation").classList.add("d-none");
            document.querySelector(".maincontainer").classList.add("g-1");
            document.querySelector(".navigation").classList.remove("d-inline-b");
            document.querySelector(".maincontainer").classList.remove("g-100-14-1");

        }
        else {
            document.querySelector(".navigation").classList.remove("d-none");
            document.querySelector(".maincontainer").classList.remove("g-1");
            document.querySelector(".navigation").classList.add("d-inline-b");
            document.querySelector(".maincontainer").classList.add("g-100-14-1");
        }
    }


    // header-back hide-show
    var m1 = document.getElementById("mid"),
        c1 = 0;
    m1.onclick = function () {
        c1 += 1;
        if (c1 % 2 != 0) {
            document.querySelector(".mid1").classList.add("header-mid-active");
            document.querySelector(".mid1").classList.remove("header-mid-icon");
            document.querySelector(".header-back-plus").style.display = "inline-block";
            document.querySelector(".header-back-div").style.display = "inline-block";
            document.querySelector(".header-back-name").style.display = "inline-block";
            document.querySelector(".header-mid-icon-1").style.display = "none";
            document.querySelector(".header-back-hr").style.display = "inline-block";
            document.querySelector(".header-back-profile").style.display = "inline-block";
            document.querySelector(".header-back").style.flexDirection = "column";


        }
        else {
            document.querySelector(".mid1").classList.remove("header-mid-active");
            document.querySelector(".mid1").classList.add("header-mid-icon");
            document.querySelector(".header-back-plus").style.display = "none";
            document.querySelector(".header-back-div").style.display = "none";
            document.querySelector(".header-back-name").style.display = "none";
            document.querySelector(".header-back-hr").style.display = "none";
            document.querySelector(".header-mid-icon-1").style.display = "inline-block";
            document.querySelector(".header-back-profile").style.display = "none";
            document.querySelector(".header-back").style.flexDirection = "row";
        }
    }



    // chat bot hide-show
    var m2 = document.getElementById("chat_click");

    m2.onclick = function () {

        document.querySelector(".chat").style.display = "inline-block";
        document.querySelector(".chatblur").style.display = "inline-block";
        document.querySelector(".closebtn").style.display = "inline-block";
        document.querySelector(".chatblur").style.background = "rgba(0,0,0,0.5)";
        document.querySelector(".closebtn").style.display = "inline-block";
        document.querySelector(".chatSymbol").classList.add("d-none");
        // document.querySelector(".maincontainer").style.zIndex = "2";




    }

    // close btn hide-show
    var m3 = document.getElementById("close");
    m3.onclick = function () {
        document.querySelector(".chat").style.display = "none";
        document.querySelector(".chatblur").style.display = "none";
        document.querySelector(".chatSymbol").classList.remove("d-none");
    }



