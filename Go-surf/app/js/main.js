
/* WOW JS */
wow = new WOW(
{
boxClass:     'wow',      // default
animateClass: 'animated', // default
offset:       200,          // not default
mobile:       true,       // default
live:         true        // default
});

if (document.body.clientWidth < 400) wow.config.offset = 100;

wow.init();

/* REDER FIRST SECTION */
// First I get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = document.getElementById('header').innerHeight * 0.01;
// Then I set the value in the --vh custom property to the root of the document
document.getElementById('header').style.setProperty('--vh', `${vh}px`);


/* SMOOTH SCROLL */
$("[data-scroll]").on("click", function(event) {

  event.preventDefault();

  let $this = $(this);
  let blockId = $this.data("scroll");
  let blockOffset = $(blockId).offset().top + parseInt($(blockId).css("padding-top"));


  $("html, body").animate({
      scrollTop: blockOffset
  }, 500);
});


/* DATE */
let date = new Date();
document.querySelector('.date__day').textContent = date.getDate();
document.querySelector('.date__month').textContent = date.getMonth() + 1;
document.querySelector('.date__year').textContent = date.getFullYear();


/* HEADER */
let header = document.getElementById('header');

$(function(){

  $('.header__slider').slick({
    asNavFor: '.slider-dots',
    infinite: true,
    fade: true,
    rows: 0,
    swipe: false,  
    prevArrow: '<img class="slider-arrow slider-arrow-left arrow-upper" src="img/header/arrow-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrow slider-arrow-right arrow-upper" src="img/header/arrow-right.svg" alt=""></img>',
  });

  $('.slider-dots').slick({
    rows: 0,
    swipe: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    focusOnSelect: true,
  });

  $('.slider-arrow-bottom').on('click', function() {
    $('.header__slider').slick('slickNext');
  });

  let northLine = document.getElementById('north-line');
  let westLine = document.getElementById('west-line');
  let eastLine = document.getElementById('east-line');
  let southLine = document.getElementById('south-line');

  let linesArr = [northLine, westLine, eastLine, southLine];

  let animateClass = 'map__line--animation';


  $('.header__slider').on('beforeChange', function(currentSlide, nextSlide){
    let beforeLine = linesArr[currentSlide];
    let currentLine = linesArr[nextSlide];

    currentLine.classList.add(animateClass);
    beforeLine.classList.remove(animateClass);
  });
});


let mapSvg = document.querySelector('.map-svg');
let northText = document.querySelector('.north-shore__text');

function changeMap() {
  if (document.body.clientWidth < 800) {
    mapSvg.setAttribute("viewBox", "0 40 860 500");
  }

  if (document.body.clientWidth < 400) {
    mapSvg.setAttribute("viewBox", "0 40 770 500");
  }

  if (document.body.clientWidth < 640) {
    northText.setAttribute("x", "382")
    northText.setAttribute("y", "260")
  }  
}

changeMap(mapSvg, northText);

window.addEventListener('resize', event => {
  setTimeout(changeMap, 1000);
  setTimeout(calcPoints, 1000);
});

/* MENU TOGGLE */

let aside      = document.querySelector('.aside');
let menuToggle = document.getElementById('menuToggle');
let menuLinks  = document.querySelectorAll('.menu__link');


menuToggle.onclick = () => switchMenu();

for (link of menuLinks) {
  link.onclick = function () {
    if (!aside.classList.contains("aside-active")) return;

    switchMenu();
    menuCheckbox.checked = false;
  }
}

function switchMenu() {
  aside.classList.toggle('aside-active');
  menuToggle.classList.toggle('menuToggle-active');
}

/* SURF */

let surfMapList = document.getElementById('surf-map-list');
let pointsList = document.querySelectorAll('.surf-map__item');

function calcPoints() {
  surfMapList.style.height = surfMapList.offsetWidth / 1.8897 + 'px';

  for (point of pointsList) {
    point.style.top = surfMapList.offsetHeight / point.dataset.top + 'px';
    point.style.left = surfMapList.offsetWidth / point.dataset.left + 'px';
  }
}
calcPoints();


/* SURF / SURF-SLIDER */

$('.surf-list').slick({

  touchThreshold: 20,
  rows: 0,
  touchThreshold: 10,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 3,
  prevArrow: '<img class="slider-arrow slider-arrow-left surf-arrow" src="img/header/arrow-left.svg" alt=""></img>',
  nextArrow: '<img class="slider-arrow slider-arrow-right surf-arrow" src="img/header/arrow-right.svg" alt=""></img>',
  responsive: [
    {
      breakpoint: 1760,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1410,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1079,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1.25
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 723,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 0.9
      }
    },
    {
      breakpoint: 638,
      settings: {
        touchThreshold: 30,
        slidesToShow: 1.4,
        slidesToScroll: 0.9
      }
    },
    {
      breakpoint: 500,
      settings: {
        touchThreshold: 30,
        slidesToShow: 1.05,
        slidesToScroll: 0.92,
      }
    },
    {
      breakpoint: 400,
      settings: {
        touchThreshold: 30,
        slidesToShow: 1.05,
        slidesToScroll: 0.98,
      }
    }
  ]
});


/* Sleep  */

$(document).ready(function() {
  let sleepPrice = 0;
  let sleepRate = 17.45;

  function setPrice() {
    sleepPrice = +$('.sleep-info__nights').val() * +$('.sleep-info__guests').val() * sleepRate;
    $('.sleep-info__price').html(sleepPrice.toFixed(2) + ' USD');
    return;
  }
  setPrice()

	$('.minus').click( function () {
		let $input = $(this).parent().siblings('input');
		let count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();

    setPrice()
		return false;
	});
	$('.plus').click( function () {
		let $input = $(this).parent().siblings('input');
    if ($input.val() >= 9) return false; 
		$input.val(parseInt($input.val()) + 1);
		$input.change();

    setPrice()
		return false;
	});

});

/* Shop  */

let surfboardPoints = document.querySelectorAll('.surfboard__circle');

for (point of surfboardPoints) {
  let surfboardStrip = point.querySelector('.surfboard__strip:last-child');
  let surfboardContent = point.nextElementSibling;

  point.addEventListener("click", function() {
      surfboardStrip.classList.toggle('active');
      surfboardContent.classList.toggle('active');
  });
}





