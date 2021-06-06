var i = 0;
var txt = '/* University of St Andrews graduate in Computer Science and freelance graphic designer */';
var speed = 45;

typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("tw").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = setTimeout(typeWriter, 800);

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
// We execute the same script as before
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const btnScroll = document.getElementById("scroll");
btnScroll.addEventListener("click", function () {
  document.getElementById('home').scrollIntoView();
})

const logo = document.getElementById("logo");
const scrollContainer = document.getElementById("scroll-container");
scrollContainer.addEventListener("scroll", function() {

  if (scrollContainer.scrollTop >= window.innerHeight/2) {
    btnScroll.className = "showScroll"
    logo.className = "showLogo"
  } else {
    btnScroll.className = "hideScroll"
    logo.className = "hideLogo"
  }
});
