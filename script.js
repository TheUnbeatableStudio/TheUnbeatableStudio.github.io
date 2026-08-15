const starfield = document.getElementById("starfield");

const menuButton = document.getElementById("menu-button");
const closeMenuButton = document.getElementById("close-menu");

const sideMenu = document.getElementById("side-menu");
const menuOverlay = document.getElementById("menu-overlay");

const enterButton = document.getElementById("enter-button");
const titleContainer = document.querySelector(".title-container");

/*-----------------------------------
    CREATE STARS
------------------------------------*/

const starCount = 250;

for (let i = 0; i < starCount; 1++) {

  const star = document.createElement("div");

  star.classList.add("star");

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  const size = Math.random() * 2 + 1;

  star.style.width = size + "px";
  star.style.height = size + "px";

  star.style.animationDuration = (Math.random() * 5) + "s";

  starfield.appendChild(star);
}

/*-----------------------------------
    OPEN MENU
------------------------------------*/

function closeMenu() {

  sodeMenu.classList.remove("open");

menuOverlay.classList.remove("open");
}

menuButton.addEventListener("click", openMenu);

closeMenuButton.addEventListener("click", closeMenu);

menuOverlay.addEventListener("click", closeMenu);

/*-----------------------------------
    ENTER BUTTON
------------------------------------*/

enterButton.addEventListener("click", () = {

  titleContainer.style.opacity = "0";
  titleContainer.style.transform = "scale(1.05)";

});







































