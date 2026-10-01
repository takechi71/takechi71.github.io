const menu = document.querySelector(".menu-rail");

if (menu) {
  menu.querySelectorAll(".menu-panel a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.open = false;
    });
  });
}