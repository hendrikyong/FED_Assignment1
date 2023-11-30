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

  if (isNaN(totalPrice)) {
    totalPrice = 0;
  }

  sessionStorage.setItem("fullName", fullName);
  sessionStorage.setItem("nationality", nationality);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("numTickets", numTickets);
  sessionStorage.setItem("preferredDate", preferredDate);
  sessionStorage.setItem("totalPrice", totalPrice);

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
  var fullName = sessionStorage.getItem("fullName");
  var nationality = sessionStorage.getItem("nationality");
  var email = sessionStorage.getItem("email");
  var numTickets = sessionStorage.getItem("numTickets");
  var preferredDate = sessionStorage.getItem("preferredDate");
  var totalPrice = sessionStorage.getItem("totalPrice");

  console.log("fullName:", fullName);
  console.log("nationality:", nationality);
  console.log("email:", email);
  console.log("numTickets:", numTickets);
  console.log("preferredDate:", preferredDate);
  console.log("totalPrice:", totalPrice);

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
