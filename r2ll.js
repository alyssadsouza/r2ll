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

})