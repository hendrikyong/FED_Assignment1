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
  var email = document.getElementById("email").value;
  var numTickets = document.getElementById("numTickets").value;
  var preferredDate = document.getElementById("preferredDate").value;

  // You can add additional validation logic here

  // Displaying the collected information (you can modify this part)
  alert(
    "Ticket Purchase Summary:\n\nFull Name: " +
      fullName +
      "\nEmail: " +
      email +
      "\nNumber of Tickets: " +
      numTickets +
      "\nPreferred Date: " +
      preferredDate
  );

  // You can also send this information to a server for processing

  // Optionally, you can reset the form after submission
  document.getElementById("ticketForm").reset();
}
