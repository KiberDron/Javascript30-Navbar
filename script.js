let menuIcon = document.getElementById("menu-icon");
let expandedMenu = document.getElementById("expanded-menu");
let closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
  expandedMenu.style["display"] = "block";
});

closeIcon.addEventListener("click", () => {
  expandedMenu.style["display"] = "none";
});
