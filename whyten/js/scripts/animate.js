var isPhone = function(yes, no) {
  if ($(window).width() <= 768) {
    return yes;
  } else {
    return no;
  }
}
if ($(window).width() <= 768) {$('.blog-share-menu').height(0)}
$(document).ready(function() {
  // Start Sidebar Menu Animation
  var showSidebarMenu = function() {
      $( ".menu-overlay" ).animate({width: '300px'}, 400);
      $(".header-menu-bar").css({transform: 'rotateZ(90deg)'});
      setTimeout(function() {$( ".menu-list-item, .menu-list-dropdown-bar" ).animate({opacity: '1'}, 400)},200);
  };
  var phoneShowSidebarMenu = function() {
      $( ".menu-overlay" ).css('width','100%');
      $( ".menu-list-item, .menu-list-dropdown-bar" ).css('opacity',1);
  };
  var hideSidebarMenu = function() {
    $( ".menu-overlay" ).animate({width: '0'}, 500);
    $( ".menu-list-item, .menu-list-dropdown-bar" ).animate({opacity: '0'}, 300);
    $(".header-menu-bar").css({transform: 'rotateZ(0deg)'});
    $(".menu-list-dropdown").slideUp();
    $('.menu-arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
  };
  var phoneHideSidebarMenu = function() {
    $( ".menu-overlay" ).css('width',0);
    $( ".menu-list-item, .menu-list-dropdown-bar" ).css('opacity',0);
    $(".menu-list-dropdown").slideUp();
    $('.menu-arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
  };
  $( ".header-menu-bar" ).click(isPhone(phoneShowSidebarMenu, showSidebarMenu));
  $( ".menu-close" ).click(isPhone(phoneHideSidebarMenu, hideSidebarMenu));
  $(window).click(hideSidebarMenu);
  $('.menu-overlay, .header-menu-bar').click(function(event){
    event.stopPropagation();
  });
  $(".menu-list-dropdown-title").click(function() {
    $(this).parent().find('.menu-list-dropdown').slideToggle(isPhone(0,300));
    if ($(this).find('.menu-arrow').hasClass('fa-angle-down')) {
      $(this).find('.menu-arrow').removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
      $(this).find('.menu-arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
    $(this).parent().siblings().find('.menu-list-dropdown').slideUp(isPhone(0,300));
    $(this).parent().siblings().find('.menu-arrow').removeClass('fa-angle-up').addClass('fa-angle-down');
  })
  // End Sidebar Menu Animation
  // Start Blog Share Menu Animation
  $('.blog-share').click(function() {
    var
      sibBlogShareMenu = $(this).parent().parent().parent().siblings().find('.blog-share-menu');
      sibTriangle = $(this).parent().parent().parent().siblings().find('.triangle');
      blogShareMenu = $(this).parent().parent().parent().find('.blog-share-menu');
      triangle = $(this).parent().parent().parent().find('.triangle');
      blogShareMenuBar = $(this).parent().parent().parent().find('.blog-share-menu-bar');
      blogShareHidden = $(this).parent().parent().parent().find('.blog-share-hidden');
      sibBlogShareShown = $(this).parent().parent().parent().siblings().find('.blog-share-shown');
    if ($(this).hasClass('blog-share-hidden')) {
      if ($(window).width() <= 768) {
        sibBlogShareMenu.stop().css('opacity',0)
        triangle.stop().css('opacity',0)
        sibBlogShareMenu.find('.blog-share-menu').css('z-index','-1000')
        sibTriangle.css('z-index','-1000')
        sibBlogShareShown.removeClass('blog-share-shown').addClass('blog-share-hidden')
        blogShareMenu.css('z-index','1000')
        blogShareMenu.stop().css('height','100%')
        blogShareMenuBar.css('height','auto')
        blogShareMenu.css('opacity','1')
        $('.blog-share-menu-item').css('opacity', '1')
        $(this).parent().parent().css('border-radius','10px 10px 0px 0px')
        blogShareHidden.removeClass('blog-share-hidden').addClass('blog-share-shown')
      } else {
        $(this).parent().parent().parent().siblings().find('.blog-share-menu-item').stop().animate({opacity: 0},300)
        sibBlogShareMenu.stop().animate({opacity: 0},300)
        sibTriangle.stop().animate({opacity: 0},300)
        setTimeout(function(){sibBlogShareMenu.css('z-index','-1000')},300)
        setTimeout(function(){sibTriangle.css('z-index','-1000')},300)
        sibBlogShareShown.removeClass('blog-share-shown').addClass('blog-share-hidden')
        blogShareMenu.css('z-index','1000')
        triangle.css('z-index','999')
        blogShareMenu.stop().animate({opacity: 1},200)
        blogShareMenu.css('height','auto')
        blogShareMenuBar.css('height','50px')
        triangle.stop().animate({opacity: 1},200)
        blogShareHidden.removeClass('blog-share-hidden').addClass('blog-share-shown')
        var itemsTimeout = 200;
        $(this).parent().parent().parent().find('.blog-share-menu-item').first().delay(100).animate({opacity: 1}, 200).next().delay(150).animate({opacity: 1}, 200).next().delay(200).animate({opacity: 1}, 200).next().delay(250).animate({opacity: 1}, 200).next().delay(300).animate({opacity: 1}, 200)
      }
    } else {
      if ($(window).width() <= 768) {
        blogShareMenu.stop().css('height',0)
        blogShareMenu.stop().css('opacity',0)
        $('.blog-share-menu-item').css('opacity', '0')
        triangle.stop().css('opacity',0)
        $('.blog-share-menu').css('z-index','-1000')
        $('.triangle').css('z-index','-1000')
        $(this).parent().parent().css('border-radius','10px 10px 15px 15px')
        $(this).parent().parent().parent().find('.blog-share-shown').removeClass('blog-share-shown').addClass('blog-share-hidden')
      } else {
        blogShareMenu.stop().animate({opacity: 0},300)
        triangle.stop().animate({opacity: 0},300)
        $(this).parent().parent().parent().find('.blog-share-menu-item').stop().animate({opacity: 0},300)
        setTimeout(function(){$('.blog-share-menu').css('z-index','-1000')},300)
        setTimeout(function(){$('.triangle').css('z-index','-1000')},300)
        $(this).parent().parent().parent().find('.blog-share-shown').removeClass('blog-share-shown').addClass('blog-share-hidden')
      }
    }
  })
  $(window).click(function() {
    if ($(window).width() <= 768) {
      $('.blog-block').css('border-radius','10px 10px 15px 15px')
      $('.blog-share-menu').css('height','0')
      $('.blog-share-menu').stop().css('opacity',0)
      $('.triangle').stop().css('opacity',0)
      $('.blog-share-menu, .triangle').css('z-index','-1000')
      $('.blog-share-shown').removeClass('blog-share-shown').addClass('blog-share-hidden')
    } else {
      $('.blog-share-menu').stop().animate({opacity: 0},300)
      $('.triangle').stop().animate({opacity: 0},50)
      setTimeout(function(){$('.blog-share-menu, .triangle').css('z-index','-1000')},300)
      $('.blog-share-shown').removeClass('blog-share-shown').addClass('blog-share-hidden')
      $('.blog-share-menu-item').stop().animate({opacity: 0},300)
    }
  });
  $('.blog-share-menu, .blog-share').click(function(event){
    event.stopPropagation();
  });
  // End Blog Share Menu Animation
  // Start Blog Tags Menu Animation
  $('.blog-block').mouseenter(function(){
    var thisBlock = $(this);
    $(this).find('.blog-tags-button').stop().animate({opacity: 1}, 200);
    $('.blog-tags-button h4').mouseenter(function(){
      var
        thisBlogTagsButtonH4 = $(this);
        thisBlogTagsButton = thisBlock.find('.blog-tags-button');
      if (thisBlogTagsButton.hasClass('blog-tags-hidden')) {
        thisBlogTagsButtonH4.css('background', '#1c1c1c');
      }
      if (!thisBlogTagsButton.hasClass('blog-tags-hidden')) {
        thisBlogTagsButtonH4.css('background', '#3c3c3c');
      }
    })
    $('.blog-tags-button h4').mouseleave(function(){
      var
        thisBlogTagsButtonH4 = $(this);
        thisBlogTagsButton = thisBlock.find('.blog-tags-button');
      if (thisBlogTagsButton.hasClass('blog-tags-hidden')) {
        thisBlogTagsButtonH4.css('background', 'rgba(10,10,10,0.5)');
      }
      if (!thisBlogTagsButton.hasClass('blog-tags-hidden')) {
        thisBlogTagsButtonH4.css('background', '#2c2c2c');
      }
    })
  })
  $('.blog-block').mouseleave(function(){
    if ($(this).find('.blog-tags-button').hasClass('blog-tags-hidden')) {
      $(this).find('.blog-tags-button').stop().animate({opacity: 0}, 300);
    }
  })
  $('.blog-tags-button h4').mouseenter(function(){$(this).css('background', '#1c1c1c')})
  $('.blog-tags-button h4').mouseleave(function(){$(this).css('background', 'rgba(10,10,10,0.5)')})
  $('.blog-tags-button').click(function() {
    var
    blogTags = $(this).parent().parent().find('.blog-tags');
    thisBlogTagsButton = $(this);
    $('.blog-tags-button h4').mouseenter(function(){
      var thisBlogTagsButtonH4 = $(this);
      if (thisBlogTagsButton.hasClass('blog-tags-hidden')) {thisBlogTagsButtonH4.css('background', '#1c1c1c')}
      if (!thisBlogTagsButton.hasClass('blog-tags-hidden')) {thisBlogTagsButtonH4.css('background', '#3c3c3c')}
    })
    $('.blog-tags-button h4').mouseleave(function(){
      var thisBlogTagsButtonH4 = $(this);
      if (thisBlogTagsButton.hasClass('blog-tags-hidden')) {thisBlogTagsButtonH4.css('background', 'rgba(10,10,10,0.5)')}
      if (!thisBlogTagsButton.hasClass('blog-tags-hidden')) {thisBlogTagsButtonH4.css('background', '#2c2c2c')}
    })
    if ($(this).hasClass('blog-tags-hidden')) {
      if ($(window).width() <= 768) {
        blogTags.stop().css('height','100%')
      } else {
        blogTags.stop().animate({height: '37px'}, 400)
      }
      $(this).find('h4').css('background','#2c2c2c');
      blogTags.css({borderTop: '2px solid #3c3c3c', background: '#2c2c2c'});
      $(this).removeClass('blog-tags-hidden');
      $('.blog-block').mouseenter(function(){$(this).find('.blog-tags-button').stop().animate({opacity: 1}, 200);})
      $('.blog-block').mouseleave(function(){
        if ($(this).find('.blog-tags-button').hasClass('blog-tags-hidden')) {$(this).find('.blog-tags-button').stop().animate({opacity: 0}, 300)}
      })
    } else {
      if ($(window).width() <= 768) {
        blogTags.stop().css('height','0');
        blogTags.css({border: 'none', background: "rgb(32,32,32)",background: "-moz-linear-gradient(left, rgba(32,32,32,1) 0%, rgba(48,48,48,1) 20%, rgba(48,48,48,1) 80%, rgba(32,32,32,1) 100%)",background: "-webkit-linear-gradient(left, rgba(32,32,32,1) 0%,rgba(48,48,48,1) 20%,rgba(48,48,48,1) 80%,rgba(32,32,32,1) 100%)",background: "linear-gradient(to right, rgba(32,32,32,1) 0%,rgba(48,48,48,1) 20%,rgba(48,48,48,1) 80%,rgba(32,32,32,1) 100%)",filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#202020', endColorstr='#202020',GradientType=1 )"});
      } else {
        blogTags.stop().animate({height: '0'}, 400);
        setTimeout(function() {blogTags.css({border: 'none', background: "rgb(32,32,32)",background: "-moz-linear-gradient(left, rgba(32,32,32,1) 0%, rgba(48,48,48,1) 20%, rgba(48,48,48,1) 80%, rgba(32,32,32,1) 100%)",background: "-webkit-linear-gradient(left, rgba(32,32,32,1) 0%,rgba(48,48,48,1) 20%,rgba(48,48,48,1) 80%,rgba(32,32,32,1) 100%)",background: "linear-gradient(to right, rgba(32,32,32,1) 0%,rgba(48,48,48,1) 20%,rgba(48,48,48,1) 80%,rgba(32,32,32,1) 100%)",filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#202020', endColorstr='#202020',GradientType=1 )"})},400);
      }
      $(this).find('h4').css('background','rgba(10,10,10,0.75)');
      $(this).addClass('blog-tags-hidden');
      $('.blog-tags-button h4').mouseenter(function(){$(this).css('background', '#1c1c1c')})
      $('.blog-tags-button h4').mouseleave(function(){$(this).css('background', 'rgba(10,10,10,0.5)')})
      $('.blog-block').mouseenter(function(){$(this).find('.blog-tags-button').stop().animate({opacity: 1}, 200);})
      $('.blog-block').mouseleave(function(){
        if ($(this).find('.blog-tags-button').hasClass('blog-tags-hidden')) {
          $(this).find('.blog-tags-button').stop().animate({opacity: 0}, 300);
        }
      })
    }
  })
  // End Blog Tags Menu Animation
  // Start Back To Top Animation
  var offset = 210;
  var duration = 1000;
  $(window).scroll(scrollCheck = function() {
  if ($(this).scrollTop() > offset) {
  $('#back-to-top').fadeIn(400,'linear');
  } else {
  $('#back-to-top').stop().fadeOut(400,'linear');
  }
  });
  $('#back-to-top').click(function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, duration);
  return false;
  })
  scrollCheck();
  // End Back To Top Animation
  $(window).scroll(isPhone(function() {
    if ($(this).scrollTop() > 600) {
      $('.owl-carousel').trigger('stop.owl.autoplay');
    } else {
      $('.owl-carousel').trigger('play.owl.autoplay');
    }
  }));
  // Start About Me Animation
  $('.about-me-content-black p').text($('.about-me-content p').text());
  $('.about-me-bar').hover(function() {
    if ($(window).width() <= 768) {
      return
    } else {
      var contentHeight = $('.about-me-content').height() * 0.6;
      $('.about-me-content-black-cover').css('height', contentHeight).css('border-radius', '0px').css('background-color', '#3c3c3c');
    }
  },function() {
    if ($(window).width() <= 768) {
      return
    } else {
      $('.about-me-content-black-cover').css('height', '0px').css('border-radius', '10px').css('background-color', '#4c4c4c');
    }
  })
  // End About Me Animation
})
