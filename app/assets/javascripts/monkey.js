$(document).ready(function(){
  //$("[data-toggle=tooltip").tooltip();

  $('.see-photos').on('click',function(event){
    event.preventDefault();
    event.stopPropagation();
    $(this).closest('.tour').find('.photos').toggle('slow');
  });

  $('.glyphicon-tag').on('mouseenter',function(){
    $(this).animate({top: '-10px'},'slow');
    $(this).closest('.tour').find('.details').fadeIn('slow');
  });

  $('.glyphicon-tag').on('mouseleave',function(){
    $(this).animate({top: '0px'},'slow');
    $(this).closest('.tour').find('.details').fadeOut('slow')
  });
});