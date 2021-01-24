$(function() {

  $('.js-fa-bars').click(function() {
    $('#js-ul').slideToggle(500);
  });
  

  var message =$('#js-message');
  message.css('opacity', '0');

  $(window).scroll(function() {
    if ($(this).scrollTop() >
    300) {
      message.animate({'opacity': '1'}, 2000, 'swing');
    } 
  });



  var pagetop =$('#page-top');
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

});
