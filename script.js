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
  


  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
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
