$('header-logo-bar img').ready(function() {
  logoWidth = $('.header-logo-bar img').width();
})
var
  sidebarBlock = $('.page-sidebar-block, .page-sidebar').width();
  blockWidth = $('.block, #block-cover, .blog-list, .page-sidebar, .blog-header, .blog-list-bar').width();
var doResponsive = function() {
  $('.header-logo-bar img').ready(function() {
    if (logoWidth >= document.documentElement.clientWidth) {
      $('.header-logo-bar img').css('width','100%');
    }
    if (document.documentElement.clientWidth >= logoWidth) {
      $('.header-logo-bar img').css('width','300px');
      $('.header-logo-bar img').width(logoWidth);
    }
  })
  if(document.documentElement.clientWidth <= 1280) {
    $('.about-bar, .contact-bar, .portfolio-bar, .portfolio-detail-bar').width(document.documentElement.clientWidth -40);
    $('.contact-map').css('left', document.documentElement.clientWidth * 0.186);
  }else {
    $('.about-bar, .contact-bar, .portfolio-bar, .portfolio-detail-bar').width(1280)
    $('.contact-show-feedback, .contact-show-map').css('left', '565px');
    $('.contact-map').css('left', '320px');
  }
  if(document.documentElement.clientWidth <= 1295) {
    $('.contact-show-feedback, .contact-show-map').css('left', document.documentElement.clientWidth * 0.4265);
  }
  if(document.documentElement.clientWidth <= 1150) {
    $('.contact-show-feedback, .contact-show-map').css('left', document.documentElement.clientWidth * 0.4165);
  }
  if(document.documentElement.clientWidth <= 1050) {
    $('.contact-show-feedback, .contact-show-map').css('left', document.documentElement.clientWidth * 0.4065);
    $('.contact-map').css('left', document.documentElement.clientWidth * 0.17);
  }
  if(document.documentElement.clientWidth <= 950) {
    $('.contact-map').css('left', document.documentElement.clientWidth * 0.15);
  }
  if(document.documentElement.clientWidth <= 900) {
    $('.contact-map').css('left', document.documentElement.clientWidth * 0.13);
  }
  if(document.documentElement.clientWidth <= 850) {
    $('.contact-map').css('left', document.documentElement.clientWidth * 0.12);
  }
  if (document.documentElement.clientWidth <= 800) {
    $('.blog-list').width(document.documentElement.clientWidth)
    $('.block, .blog-list-bar, #blog-cover, .comment-bar, .page-sidebar-block, .page-sidebar').width(document.documentElement.clientWidth -10)
    $('.blog-header').width(document.documentElement.clientWidth)
  } else {
    $('.block, #block-cover, .blog-list, .blog-header, .blog-list-bar, .comment-bar').width(780);
    if (document.documentElement.clientWidth <= 1285) {
      $('.page-sidebar-block, .page-sidebar').width(780)
    } else {
      $('.page-sidebar-block, .page-sidebar').width(405)
    }
  }
  if(document.documentElement.clientWidth <= 768) {
    $('.portfolio-bar, .portfolio-detail-bar').width(document.documentElement.clientWidth);
    $('.about-bar, .contact-bar, .contact-map, .contact-map iframe, .contact-feedback').width(document.documentElement.clientWidth);
    $('.contact-feedback').width(document.documentElement.clientWidth -40);
    $('.contact-show-feedback, .contact-show-map').css('left', document.documentElement.clientWidth * 0.39);
    $('.contact-map').css('left', 0);
    $('.blog-header').width(document.documentElement.clientWidth -25)
  }else {
    $('.contact-map, .contact-map iframe').width(640);
    $('#contact-feedback').width(600);
  }
  if(document.documentElement.clientWidth <= 480) {
    $('.contact-show-feedback, .contact-show-map').css('left', document.documentElement.clientWidth * 0.30);
  }
  if(document.documentElement.clientWidth <= 360) {
    $('.contact-show-feedback, .contact-show-map').css('left', document.documentElement.clientWidth * 0.28);
  }
  if(document.documentElement.clientWidth <= 320) {
    $('.contact-show-feedback, .contact-show-map').css('left', document.documentElement.clientWidth * 0.27);
  }
}
doResponsive();
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 200);
});
$(window).bind('resizeEnd', function() {doResponsive()});
