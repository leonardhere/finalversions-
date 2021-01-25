$(function(){

$('.compare__slider').slick({
    // infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<img class="slider-arrow slider-arrow-left arrow-upper" src="img/arrow-left.png" alt=""></img>',
    nextArrow: '<img class="slider-arrow slider-arrow-right arrow-upper" src="img/arrow-right.png" alt=""></img>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
});

$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  $("body").toggleClass("locked");
});
$('.overlay').click(function() {
  $(this).removeClass('open');
  $('.navBurger').removeClass('active');
});

$('#clearslider').on('click', function() {
  $('.slick-list').html('');
})




  
});


function removeElem(delElem, attribute, attributeName) {
    if (!(delElem && attribute && attributeName)) return;
    return function(e) {
      let target = e.target;
      if (!(target.hasAttribute(attribute) ?
          (target.getAttribute(attribute) === attributeName ? true : false) : false)) return;
      let elem = target;
      while (target != this) {
        if (target.classList.contains(delElem)) {
          target.remove();
          return;
        }
        target = target.parentNode;
      }
      return;
    };
  }
  
  
  document.addEventListener("click", removeElem("compare__slider-item", "data-del", "delete"));
