const newLocal = "hello world";
console.log(newLocal);

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".nav-links");
function animateScroll(idToScrollTo) {
    console.log("idToScrollTo>>", idToScrollTo);
    if (window.outerWidth <= 425)
        linksContainer.style.height = 0;
    $("html, body").animate({ scrollTop: $('#' + idToScrollTo).offset().top - 50 }, 100);
}


navToggle.addEventListener("click", function () {
    // linksContainer.classList.toggle("show-links");

    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    console.log("linksHeight>>>", linksHeight, "containerHeight>>>", containerHeight);
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight + 5}px`;
    } else {
        linksContainer.style.height = 0;
    }
    // console.log(linksContainer.getBoundingClientRect());
});