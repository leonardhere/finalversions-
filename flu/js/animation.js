$("section h2").waypoint(function(direction){
  $(this.element).addClass('scale-in-left')
}, {
  offset: '95%'
})

$(".text").waypoint(function(direction){
  $(this.element).addClass('scale-in-right')
}, {
  offset: '95%'
})