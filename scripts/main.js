let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1.jpg') {
      myImage.setAttribute ('src','images/IMG_0973.jpg');
    } else {
      myImage.setAttribute ('src','images/image1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let mySubHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hi ' + myName + '! My name\'s David.';
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hi ' + storedName + '! My name\'s David.';
  }

myButton.onclick = function() {
    setUserName();
  }