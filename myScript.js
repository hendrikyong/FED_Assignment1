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
