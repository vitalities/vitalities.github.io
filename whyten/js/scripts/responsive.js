$('header-logo-bar img').ready(function() {
  logoWidth = $('.header-logo-bar img').width();
})
var
  sidebarBlock = $('.page-sidebar-block, .page-sidebar').width();
  blockWidth = $('.block, #block-cover, .blog-list, .page-sidebar, .blog-list-bar').width();
var doResponsive = function() {
  $('.header-logo-bar img').ready(function() {
    if (logoWidth >= $(window).width()) {
      $('.header-logo-bar img').css('width','100%');
    }
    if ($(window).width() >= logoWidth) {
      $('.header-logo-bar img').css('width','300px');
      $('.header-logo-bar img').width(logoWidth);
    }
  })
  if($(window).width() <= 1280) {
    $('.about-bar, .contact-bar, .portfolio-bar, .portfolio-detail-bar').width($(window).width() -40);
    $('.contact-map').css('left', $(window).width() * 0.186);
  }else {
    $('.about-bar, .contact-bar, .portfolio-bar, .portfolio-detail-bar').width(1280)
    $('.contact-show-feedback, .contact-show-map').css('left', '565px');
    $('.contact-map').css('left', '320px');
  }
  if($(window).width() <= 1295) {$('.contact-show-feedback, .contact-show-map').css('left', $(window).width() * 0.4265)}
  if($(window).width() <= 1150) {$('.contact-show-feedback, .contact-show-map').css('left', $(window).width() * 0.4165)}
  if($(window).width() <= 1050) {$('.contact-show-feedback, .contact-show-map').css('left', $(window).width() * 0.4065); $('.contact-map').css('left', $(window).width() * 0.17)}
  if($(window).width() <= 950) {$('.contact-map').css('left', $(window).width() * 0.15)}
  if($(window).width() <= 900) {$('.contact-map').css('left', $(window).width() * 0.13)}
  if($(window).width() <= 850) {$('.contact-map').css('left', $(window).width() * 0.12)}
  if ($(window).width() <= 800) {
    $('.blog-list').width($(window).width())
    $('.block, .blog-list-bar, #blog-cover, .comment-bar, .page-sidebar-block, .page-sidebar').width($(window).width() -10)
    $('.blog-header').width($(window).width() -20)
  } else {
    $('.blog-header').width(760)
    $('.block, #block-cover, .blog-list, .blog-header-detail, .blog-list-bar, .comment-bar').width(780);
    if ($(window).width() <= 1285) {$('.page-sidebar-block, .page-sidebar').width(780)} else {$('.page-sidebar-block, .page-sidebar').width(405)}
  }
  if($(window).width() <= 768) {
    $('.portfolio-bar, .portfolio-detail-bar').width($(window).width());
    $('.about-bar, .contact-bar, .contact-map, .contact-map iframe, .contact-feedback').width($(window).width());
    $('.contact-feedback').width($(window).width() -40);
    $('.contact-show-feedback, .contact-show-map').css('left', $(window).width() * 0.39);
    $('.contact-map').css('left', 0);
    $('.blog-header').width($(window).width() -25)
    $('.blog-header-detail').width($(window).width())
  }else {
    $('.contact-map, .contact-map iframe').width(640);
    $('#contact-feedback').width(600);
  }
  if($(window).width() <= 480) {$('.contact-show-feedback, .contact-show-map').css('left', $(window).width() * 0.30)}
  if($(window).width() <= 360) {$('.contact-show-feedback, .contact-show-map').css('left', $(window).width() * 0.28)}
  if($(window).width() <= 320) {$('.contact-show-feedback, .contact-show-map').css('left', $(window).width() * 0.27)}
}
doResponsive();
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 200);
});
$(window).bind('resizeEnd', function() {doResponsive()});
