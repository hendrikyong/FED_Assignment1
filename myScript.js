var i = 0;
var images = [];
var time = 3500;

images[0] = "Images/Supreme Court.png";
images[1] = "Images/Blank Blue Person.png";
images[2] = "Images/Art On Wall2.png";
images[3] = "Images/Chess Floor.png";
images[4] = "Images/Art On Wall.png";

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

function submitForm() {
  var fullName = document.getElementById("fullName").value;
  var nationality = document.getElementById("nationality").value;
  var email = document.getElementById("email").value;
  var numTickets = document.getElementById("numTickets").value;
  var preferredDate = document.getElementById("preferredDate").value;

  var ticketPrice = 0;
  if (nationality === "Singaporean/PR") {
    ticketPrice = 0;
  } else if (nationality === "Non-Singaporean") {
    ticketPrice = 13;
  }

  var totalPrice = ticketPrice * numTickets;

  var checkoutURL =
    "checkout.html" +
    "?fullName=" +
    encodeURIComponent(fullName) +
    "&nationality=" +
    encodeURIComponent(nationality) +
    "&email=" +
    encodeURIComponent(email) +
    "&numTickets=" +
    encodeURIComponent(numTickets) +
    "&preferredDate=" +
    encodeURIComponent(preferredDate) +
    "&totalPrice=" +
    encodeURIComponent(totalPrice);

  window.location.href = checkoutURL;
}

document.addEventListener("DOMContentLoaded", function () {
  var urlParams = new URLSearchParams(window.location.search);

  var fullName = urlParams.get("fullName");
  var nationality = urlParams.get("nationality");
  var email = urlParams.get("email");
  var numTickets = urlParams.get("numTickets");
  var preferredDate = urlParams.get("preferredDate");
  var totalPrice = urlParams.get("totalPrice");

  document.getElementById("fullNameOutput").textContent = fullName;
  document.getElementById("nationalityOutput").textContent = nationality;
  document.getElementById("emailOutput").textContent = email;
  document.getElementById("numTicketsOutput").textContent = numTickets;
  document.getElementById("preferredDateOutput").textContent = preferredDate;
  document.getElementById("totalPriceOutput").textContent = "$" + totalPrice;
});

function myFunction() {
  var navbar = document.getElementById("menu");
  navbar.classList.toggle("show");
}
