// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
    ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
    if (smallMenu.classList.contains("header__sm-menu--active")) {
        smallMenu.classList.remove("header__sm-menu--active");
    } else {
        smallMenu.classList.add("header__sm-menu--active");
    }
    if (headerHamMenuBtn.classList.contains("d-none")) {
        headerHamMenuBtn.classList.remove("d-none");
        headerHamMenuCloseBtn.classList.add("d-none");
    } else {
        headerHamMenuBtn.classList.add("d-none");
        headerHamMenuCloseBtn.classList.remove("d-none");
    }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener("click", () => {
        smallMenu.classList.remove("header__sm-menu--active");
        headerHamMenuBtn.classList.remove("d-none");
        headerHamMenuCloseBtn.classList.add("d-none");
    });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
    location.href = "index.html";
});

$(".skill-percent").each(function () {
    $(this).animate(
        {
            width: $(this).attr("data-percent"),
        },
        "fast"
    );
});

new TypeIt("#whoami", {
    speed: 125,
    startDelay: 1000,
    deleteSpeed: 100,
    loop: true,
})
    .type("Hey 👋")
    .break()
    .type("I'm Bastien GENOD !")
    .pause(2000)
    .delete(15)
    .pause(500)
    .type("a Developer !")
    .pause(500)
    .move(-11)
    .type("Full-Stack ")
    .go();


