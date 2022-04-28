// Import stylesheets
import './style.css';

// Write Javascript code!

/*** TYPEWRITER ***/
var wrapp = document.querySelector('.wrapp');
var text = 'Hello from Javascript! :)';

function typing() {
  //var textArrayTogether = text.split(); /// All together in array
  //console.log(textArrayTogether);

  var textArrayAlone = text.split(''); // Split alone in array
  //console.log(textArrayAlone);

  var loop = setInterval(function () {
    if (textArrayAlone.length !== 0) {
      //wrapp.innerHTML = textArrayAlone.shift(); // One by one letter
      wrapp.innerHTML += textArrayAlone.shift(); // All word
    } else {
      clearInterval(loop);
    }
  }, 250);
}
typing();
