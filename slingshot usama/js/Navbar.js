window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var logoImage = document.querySelector("#logoImage");
  var navLinks = document.querySelector(".nav-links a");
  var span = document.getElementById("companyName");
  var contactNo = document.getElementById("contact");
  var call = document.getElementById("call");
  var helpListItems = document.querySelectorAll(".help-list");

  // Add "scrolled" class to the header when the user scrolls
  if (window.pageYOffset > 0) {
    header.classList.add("scrolled");
    logoImage.src = "./images/scroll-logo.svg";
    navLinks.style.color = "black";
    helpListItems.style.color = "black";
    dropDown.style.color = "black";

    // Change span text color
    span.style.color = "#AE5312";
    contactNo.style.color = "#00AFB5";
    call.style.color = "#000000";
  } else {
    header.classList.remove("scrolled");
    logoImage.src = "./images/logo.png";
    navLinks.style.color = "white";
    contactNo.style.color = "white";
    span.style.color = "white";
    call.style.color = "white";
    helpListItems.style.color = "white";
  }
});
