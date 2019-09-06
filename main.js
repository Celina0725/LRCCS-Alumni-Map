let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'map2.png') {
      myImage.setAttribute('src', 'map02.png');
    } else {
      myImage.setAttribute('src', 'map02.png');
    }
}
