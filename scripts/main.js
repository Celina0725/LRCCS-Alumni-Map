let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/map2.png') {
      myImage.setAttribute('src', 'images/map02.png');
    } else {
      myImage.setAttribute('src', 'images/map02.png');
    }
}
