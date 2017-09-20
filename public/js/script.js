$(document).ready(function(){
  var burger = $('.burger i');
  var nav = $('.burger ul');
  burger.click(function(){
    var toggle = nav.css('display');
    if(toggle=='none'){
      nav.css('display', 'block');
    }else{
      nav.css('display', 'none');
    }
  });

});
