// Import stylesheets
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/style.css';

// Write Javascript code!

/*** TYPEWRITER ***/
var wrapp = document.querySelector('.wrapp');
var content = document.querySelector('.content');
var text = 'Hello from Javascript! :)';

function typing() {
  //var textArrayTogether = text.split(); /// All together in array
  //console.log(textArrayTogether);

  var textArrayAlone = text.split(''); // Split alone in array
  //console.log(textArrayAlone);

  var loop = setInterval(function () {
    if (textArrayAlone.length !== 0) {
      //content.innerHTML = textArrayAlone.shift(); // One by one letter
      content.innerHTML += textArrayAlone.shift(); // All word
    } else {
      clearInterval(loop);
    }
  }, 250);
}
typing();
