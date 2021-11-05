// Created by 👑Dave

// Created by $oftware Geek

window.onload = function() {
    // Declaration
        var openNav = document.querySelectorAll("#ham-bar span");
        var closeNav = document.querySelectorAll("#close-bar span");
        var nav_tg = document.getElementById("nav-tg").classList;
        var cont = document.getElementById("cont").classList;
        var fadein = document.getElementById("ham-bar").classList;
         
        // Adding event listeners to all span elements available inside #hab-bar
        for (var i = 0; i < openNav.length; i++)
            openNav[i].addEventListener("click", tgl);

        // Adding event listeners to all span elements available inside #close-bar
        for (var i = 0; i < closeNav.length; i++)
            closeNav[i].addEventListener("click", tgl);

        // function to toggle the class and to change the visibility of the #ham-bar
        function tgl() {
            nav_tg.toggle("close");
            cont.toggle("fade");
            if (nav_tg.contains("close")) {
                fadein.remove("fadeout")
                fadein.add("show");

            } else {
                fadein.remove("show");
                fadein.add("fadeout")
            }

        }
}