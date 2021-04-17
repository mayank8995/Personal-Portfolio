const newLocal = "hello world";
console.log(newLocal);

function animateScroll(idToScrollTo) {
    console.log("idToScrollTo>>", idToScrollTo);
    $("html, body").animate({ scrollTop: $('#' + idToScrollTo).offset().top - 50 }, 100);
}