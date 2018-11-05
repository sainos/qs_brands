$(document).ready(function(){

  $('div.hidden-text').hide();
  $('div.r2-hide').show();


  $('#r2').bind('mouseenter', function() {
    $('div.hidden-text').hide();
    $('div.r2-hide').show();
  }).mouseleave(function(){
    //$('div.r2-hide').hide();
  });

  $('#aaa-cert').bind('mouseenter', function() {
    $('div.hidden-text').hide();
    $('div.aaa-hide').show();
  }).mouseleave(function(){
    //$('div.aaa-hide').hide();
  });

  $('#iso-cert').bind('mouseenter', function() {
    $('div.hidden-text').hide();
    $('div.iso-hide').show();
  }).mouseleave(function(){
    //$('div.iso-hide').hide();
  });

  $('#ohsas-cert').bind('mouseenter', function() {
    $('div.hidden-text').hide();
    $('div.ohsas-hide').show();
  }).mouseleave(function(){
    //$('div.ohsas-hide').hide();
  });

  $('#rla-cert').bind('mouseenter', function() {
    $('div.hidden-text').hide();
    $('div.rla-hide').show();
  }).mouseleave(function(){
    //$('div.rla-hide').hide();
  });

  $("#aaa-cert, #iso-cert, #ohsas-cert, #rla-cert").fadeTo(500, 0.4).hover(function () {
        $(this).fadeTo(500, 1);
        $("#r2").fadeTo(500,0.5);
    }, function () {
        $(this).fadeTo(500, 0.5);
    });

    $("#r2").hover(function () {
          $(this).fadeTo(500, 1);
      }, function () {
          $(this).fadeTo(500, 0.5);
      }, function() {
        $("#r2").fadeTo(500,0.5);
      });

});
