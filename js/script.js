/*start loader*/
$(window).on("load", () => {
  $(".loader-container").fadeOut("slow");
});

/*end loader*/
/*add span tag to each heading letter*/
$("#my-hello-spans").each(function (index) {
  var characters = $(this).text().split("");

  $this = $(this);
  $this.empty();
  $.each(characters, function (i, el) {
    $this.append("<span>" + el + "</span");
  });
});
/*add span tag to each heading letter*/

/*lets*/
let ul = document.getElementById("just-for-button-onclick");
let navbarElements = document.querySelector(".just-for-button-onclick-class");
let navbarHere = document.getElementById("this-navbar");
let prevScrollpos = window.pageYOffset;
/*lets*/
/*navbar fadein and fade out*/
/*window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbarHere.style.top = "";
  } else {
    navbarHere.style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}; /*end match media*/
/*navbar for mobile*/
let button = document.getElementById("button-for-all-devices");

button.addEventListener("click", () => {
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
});
/*end navbar for mobile*/
/*progress bar*/
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};
/*end progress bar*/
