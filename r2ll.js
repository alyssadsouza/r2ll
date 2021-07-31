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

    //Get the button:
    btn = document.getElementById("back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    }

})

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}