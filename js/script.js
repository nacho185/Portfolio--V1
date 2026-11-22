const button = document.getElementById("button-for-all-devices");
const menu = document.getElementById("just-for-button-onclick");

button.addEventListener("click", function () {
  menu.classList.toggle("showMenu");
});


const menuLinks = menu.getElementsByTagName("a");

for (let i = 0; i < menuLinks.length; i++) {

  menuLinks[i].addEventListener("click", function () {
    menu.classList.remove("showMenu");
  });

}