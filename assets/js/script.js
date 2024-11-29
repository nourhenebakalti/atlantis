'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

function sendEmail() {
  const toEmail = document.getElementById('toEmail').value;

  Email.send({
    Host: "smtp.gmail.com",
    port: 465,
    Username: "hello.tunisiatrip@gmail.com", 
    Password: "qkzk azaf mkal stts", 
    To: "inbox.tunisiatrip@gmail.com",
    From: "hello.tunisiatrip@gmail.com", 
    Subject: "New Subscription from Atlantis Voyages",
    Body: `New subscriber: ${toEmail}`
  }).then(response => {
    if (response === "OK") {
      alert("Email sent successfully!");
    } else {
      console.error(response);
      alert("Failed to send email. Check console for errors.");
    }
  });
}