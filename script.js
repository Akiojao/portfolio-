$(function() {

  // ハンバーガーメニュー
  $('.js-fa-bars').click(function() {
    $('#js-ul').slideToggle(500);
  });
  

  // メッセージ出現
  var message =$('#js-message');
  message.css('opacity', '0');

  $(window).scroll(function() {
    if ($(this).scrollTop() >
    300) {
      message.animate({'opacity': '1'}, 1000, 'swing');
    } 
  });
  
   // hover-mask
  var product = $('.product');

  product.hover(function() {
    $(this).children('.hover-mask').stop().fadeIn(500);
  },
    function() {
      $(this).children('.hover-mask').stop().fadeOut(500);
    });


  // スクロールトップ
  var pagetop =$('#page-top a');
  pagetop.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() >
    200) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function() {
    $('body, html').animate({
     scrollTop: 0 },500);
     return false;
  });
  


 $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });


  
//   // hover-mask
//   var product = $('.product');

//   product.hover(function() {
//     $(this).children('.hover-mask').stop().fadeIn(500);
//   },
//     function() {
//       $(this).children('.hover-mask').stop().fadeOut(500);
//     });
  
});
