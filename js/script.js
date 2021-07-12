/*navbar scroll*/
/*change color on scroll*/
$(function () {
  $(document).scroll(function () {
    let $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
/*end change color on scroll*/

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            let $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

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
//keep alink active
$("#navContent a").click(function () {
  /* remove class from prior active link*/
  $(".activeLinkClass").removeClass("activeLinkClass");
  /* "this" is current link clicked*/
  $(this).addClass("activeLinkClass");
});
//end keep alink active
