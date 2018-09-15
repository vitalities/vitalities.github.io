$(".portfolio-title").width($(this).parent().parent().width());
var isPhone = function(yes, no) {
  if (document.documentElement.clientWidth <= 768) {
    return yes;
  } else {
    return no;
  }
}
$( document ).ready(function() {
  // Start Portfolio Animation
  var block = $('.portfolio-block');
  var mouseEnter = function() {
      var titleHeight = $(this).find('.portfolio-title').height() + 10;
      $(this).find('.portfolio-title').css('bottom', titleHeight)
      $(this).find('.portfolio-image').css('bottom', titleHeight)
  }
  var mouseLeave = function() {
      $(this).find('.portfolio-title').css('bottom', '0')
      $(this).find('.portfolio-image').css('bottom', '0')
  }
  block.hover(isPhone(false ,mouseEnter), isPhone(false ,mouseLeave))
  // End Portfolio Animation
})
