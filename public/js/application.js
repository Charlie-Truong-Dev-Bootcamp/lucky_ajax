$(document).ready(function () {
  $( "#roll" ).submit(function( event ) {
    $.post("/",assign_picture);
    event.preventDefault();
  });
});

var assign_picture = function(data){
  $("#die_pic").attr("src",data.num + ".png");
  $("#die_pic").attr("title",data.num);
};
