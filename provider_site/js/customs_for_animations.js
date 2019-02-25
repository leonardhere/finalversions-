$(function(){
  $(".animated").waypoint(function(direction){
    $(this.element).addClass('scale-up-center')
  }, {
    offset: '95%'
  })

  $(".animatednew").waypoint(function(direction){
    $(this.element).addClass('scale-up-hor-left')
  }, {
    offset: '95%'
  })
});