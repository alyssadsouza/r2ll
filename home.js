document.addEventListener("DOMContentLoaded", () => {

    var controller = new ScrollMagic.Controller();

    var statistic = new ScrollMagic.Scene({
        triggerElement: "#statistic",
        reverse:false
    })
    .setClassToggle("#statistic", "slide-up")
    .addTo(controller);

    var theTruth = new ScrollMagic.Scene({
        triggerElement: "#the-truth",
        reverse:false
    })
    .setClassToggle(".stat", "slide-up")
    .addTo(controller)

    var whyCare = new ScrollMagic.Scene({
        triggerElement: "#why-care",
        reverse:false
    })
    .setClassToggle("#why-care", "slide-up")
    .addTo(controller)

    var whatCanYouDo = new ScrollMagic.Scene({
        triggerElement: "#what-can-you-do",
        reverse:false
    })
    .setClassToggle("#what-can-you-do", "slide-up")
    .addTo(controller)

    var getInvolved = new ScrollMagic.Scene({
        triggerElement: "#get-involved-now",
        reverse:false
    })
    .setClassToggle("#get-involved-now", "fade")
    .addTo(controller)

})