$(function () {

  var HIDDEN = "hidden";
  var FILTERED_OUT = "filtered-out"

  var SHOW_QTY = 9;

  //hide them all
  var $containerItems = $(".container__news .container__item").addClass(HIDDEN);

  //show first 9
  $containerItems.slice(0, SHOW_QTY).removeClass(HIDDEN);

  var showMore = function (n) {
    $(".container__news .container__item.hidden").slice(0, n).removeClass(HIDDEN)
  }

  $(".button__continue .button").click(function (e) {
    e.preventDefault();
    showMore(SHOW_QTY);
  })

  var $getAnnounce = function () {
    return $(".container__news .container__item.announce")
  }
  var $getNews = function () {
    return $(".container__news .container__item.news")
  }
  var $getAllItems = function () {
    return $(".container__news .container__item")
  }

  $(".filter").click(function (e) {
    e.preventDefault();
    //deselect all filters
    $(".filter").removeClass("container__button").addClass("container__links");
    //select "this" one
    var $this = $(this);
    $this.removeClass("container__links").addClass("container__button");

    switch ($this.data("filter")) {
      case "news":
        $getAnnounce().addClass(FILTERED_OUT)
        $getNews().removeClass(FILTERED_OUT)
        break;
      case "announce":
        $getNews().addClass(FILTERED_OUT)
        $getAnnounce().removeClass(FILTERED_OUT)
        break;
      default:
        $getAllItems().removeClass(FILTERED_OUT)
    }
  })

  // меню
  $(".hamburger").click(function () {
    $(".menu .links__tab").toggleClass("open");
  })
})