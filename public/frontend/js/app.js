window.onscroll = function() {myFunction()};
// window.onscroll = function() {myMobileFuntion()}

var navbar = document.getElementById("myNav");
var mobileMenu = document.getElementById("mobileMenuContainer");
var sticky = navbar.offsetTop;
var stickymobile = mobileMenu.offsetTop;
const cardTextToggle = document.getElementById('card__text-toggle');
const cardButtonToggle = document.getElementById('btn__toggle-text');
const cardButtonHide = document.getElementById('btn__text-hide');

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// function myMobileFuntion(){
//   if(window.pageYOffset > stickymobile){
//     mobileMenu.classList.add("sticky");
//   } else{
//     mobileMenu.classList.remove("sticky");
//   }
// }
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("mobile__menu").style.marginLeft = "250px";
  document.getElementById("mobile__menu").style.display = "none"
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mobile__menu").style.marginLeft = "0";
  document.getElementById("mobile__menu").style.display = "flex"

}
function addText(e){
  e = e || window.event;
  let btnClicked = e.target || e.srcElement;
  let textElement = btnClicked.parentNode;
  let textMore = textElement.querySelector(".card__text-toggle");
  let dots = textElement.querySelector(".dots");

  textMore.style.display="flex";
  dots.style.display="none";
  btnClicked.style.display = "none"
  console.log(textMore);
  console.log(dots)
}

function hideCards() {
  let hiddenCards = document.querySelectorAll('.card__row-extra');
  let hideBtn = document.querySelector('#hideBtn');
  hideBtn.classList.add('hide');
  hiddenCards.forEach(function(hiddenCard) {
    hiddenCard.classList.add('show');
  });
}

// Js carousel
$(".testimonial-reel").slick({
  centerMode: true,
  centerPadding: "40px",
  dots: true,
  slidesToShow: 3,
  infinite: true,
  arrows: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
});
$(".section__hero-container").slick({
  slidesToShow: 1,
  infinite: true,
  arrows: false,
  dots: true,
  touchMove: true,
  infinite: false,
  adaptiveHeight: false,
  autoplay: true,
  autoplaySpeed: 4000

})


// console.log("object")
