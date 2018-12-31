if (document.referrer=='') {
  $('.loader-item, .black-rolling-cover, .white-rolling-cover').css({
    'opacity':'0',
    'z-index':'-1000'
  })
} else {
  var halfwidth = $(window).width() / 2 - 150;
  $('.loader-item').css('left',halfwidth);
  $('.loader-item').css({'opacity':'1'});
  $(document).ready(function functionName() {
    setTimeout(function () {
      $('.loader-item').animate({'opacity':'0'},500)
      setTimeout(function () {
        $('.white-rolling-cover').animate({'top':'-100%'},1000)
        $('.black-rolling-cover').animate({'top':'100%'},1000)
      }, 400);
    }, 100);
    setTimeout(function () {
      $('.loader-item, .black-rolling-cover, .white-rolling-cover').css({
        'opacity':'0',
        'z-index':'-1000'
      })
    }, 2000);
  })
}
