document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("#menu").addEventListener("click", () => {
        document.querySelectorAll("header div").forEach(div => {
            div.classList.add("hidden");
        })
        document.querySelector("header nav").classList.add("visible");
        document.querySelector("#exit").classList.remove("hidden");
    })

    document.querySelector("#exit").addEventListener("click", () => {
        document.querySelectorAll("header div").forEach(div => {
            div.classList.remove("hidden");
        })
        document.querySelector("header nav").classList.remove("visible");
        document.querySelector("#exit").classList.add("hidden");
    })

    document.querySelector("#next").addEventListener("click", () => {

        document.getElementById("front").classList.add("front-next");
        document.getElementById("left").classList.add("left-next");
        document.getElementById("middle").classList.add("middle-next");
        document.getElementById("right").classList.add("right-next");

        setTimeout(function() {
            var html = document.querySelector("#right").innerHTML;
            moveContent("#middle", "#right");
            moveContent("#left", "#middle");
            moveContent("#front", "#left");
            document.querySelector("#front").innerHTML = html;

            document.getElementById("front").classList.remove("front-next");
            document.getElementById("left").classList.remove("left-next");
            document.getElementById("middle").classList.remove("middle-next");
            document.getElementById("right").classList.remove("right-next");
    
        }, 1000)
    })

    document.querySelector("#prev-mobile").addEventListener("click", () => {
        var btn = document.querySelector("#mobile-wheel");
        var pres = btn.dataset.pres;
        var prev = btn.dataset.prev;

        document.getElementById(pres).classList.add("hide");
        document.getElementById(prev).classList.remove("hide");
        document.getElementById(prev).classList.add("fade");

        btn.dataset.pres = prev;
        btn.dataset.prev = document.getElementById(prev).dataset.prev;
        btn.dataset.next = pres;

    })

    document.querySelector("#next-mobile").addEventListener("click", () => {
        var btn = document.querySelector("#mobile-wheel");
        var pres = btn.dataset.pres;
        var next = btn.dataset.next;

        document.getElementById(pres).classList.add("hide");
        document.getElementById(next).classList.remove("hide");
        document.getElementById(next).classList.add("fade");

        btn.dataset.pres = next;
        btn.dataset.next = document.getElementById(next).dataset.next;
        btn.dataset.prev = pres;

    })

})

function moveContent(div1, div2) {
    document.querySelector(div2).innerHTML = document.querySelector(div1).innerHTML;
}