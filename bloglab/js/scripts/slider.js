$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    margin:0,
    loop:true,
    autoWidth:false,
    items:1,
    center: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 1500,
    autoplayHoverPause: false,
    smartSpeed: 500
  })
  $('.slider-nav-prev').click(function() {owl.trigger('prev.owl.carousel')})
  $('.slider-nav-next').click(function() {owl.trigger('next.owl.carousel')})
  $('.slider-nav-prev, .slider-nav-next').on('mouseover', function (){owl.trigger('stop.owl.autoplay')});
  $('.slider-nav-prev, .slider-nav-next').on('mouseleave', function (){owl.trigger('play.owl.autoplay')});
  $('.slider-bar').mouseenter(function() {$('.slider-nav-prev, .slider-nav-next').stop().animate({opacity: 1})})
  $('.slider-bar').mouseleave(function() {$('.slider-nav-prev, .slider-nav-next').stop().animate({opacity: 0})})
  $('.slider-bar').mouseenter(function() {$('.slider-nav-prev, .slider-nav-next').stop().animate({opacity: 1})})
  owl.on('drag.owl.carousel', function(){owl.trigger('stop.owl.autoplay')})
  owl.on('dragged.owl.carousel', function(){owl.trigger('play.owl.autoplay')})
});
