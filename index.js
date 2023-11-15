document.title = "This BiTcH!";

let curentLocation = "hell";
function changeLocation(e) {
  const theHeading = document.getElementById("the-heading");
  if (theHeading.innerText === "Welcome to hell!") {
    theHeading.innerText = "you're in Heaven!  Boo for you."
  } else {
    theHeading.innerText = "Welcome to hell!"
  }
}

const heading = document.createElement('h1');
heading.id = "the-heading";
heading.innerHTML = "Welcome to hell!";
document.body.appendChild(heading);

const button = document.createElement('button');
button.addEventListener('click', changeLocation);
button.innerText = "Change Location";
document.body.appendChild(button);
