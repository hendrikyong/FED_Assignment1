var i = 0;
var images = [];
var time = 3500;
var timeoutId;

images[0] = "Images/Supreme Court.png";
images[1] = "Images/Blank Blue Person.png";
images[2] = "Images/Art On wall2.png";
images[3] = "Images/Chess Floor.png";
images[4] = "Images/Art On Wall.png";

document.addEventListener("DOMContentLoaded", function () {
  startSlideshow(); // Start the slideshow when the DOM is fully loaded
});

function startSlideshow() {
  changeImg(); // Initial call to changeImg
}

function changeImg() {
  var imgElement = document.getElementById("slide");

  if (imgElement) {
    imgElement.src = images[i];

    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }

    // Clear the existing timeout
    clearTimeout(timeoutId);

    // Set a new timeout for the next image
    timeoutId = setTimeout(changeImg, time);
  } else {
    console.error("Element with ID 'slide' not found.");
  }
}

// Call this function when the user leaves the page or resets the slideshow
function stopSlideshow() {
  clearTimeout(timeoutId);
}

// Example: Call stopSlideshow when navigating away from the page
window.addEventListener("unload", function () {
  stopSlideshow();
});

function submitForm() {
  var fullName = document.getElementById("fullName").value;
  var nationality = document.getElementById("nationality").value;
  var email = document.getElementById("email").value;
  var numTickets = document.getElementById("numTickets").value;
  var preferredDate = document.getElementById("preferredDate").value;

  // Validate if any of the required fields is blank
  if (
    fullName === "" ||
    nationality === "" ||
    email === "" ||
    numTickets === "" ||
    preferredDate === ""
  ) {
    alert("Please fill in all required fields.");
    return; // Prevent form submission
  }

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
    "checkOut.html" +
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
