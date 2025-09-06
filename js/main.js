const modalTrigger = document.getElementsByClassName("trigger")[0];

const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modal-background")[0];
const modalClose = document.getElementsByClassName("modal__close")[0];
const modalActive = document.getElementsByClassName("modal-active")[0];


modalTrigger.addEventListener("click", function () {
    modalBackground.style.display = "block";
});
modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
});

modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
    }
});

const headerBurger = document.querySelector(".header__burger");
const headerMenuClose = document.querySelector(".header-menu__close");
const headerMenu = document.querySelector(".header-menu");

headerBurger.addEventListener("click", () => {
    headerMenu.classList.add("active");
})
headerMenuClose.addEventListener("click", () => {
    headerMenu.classList.remove("active");

})