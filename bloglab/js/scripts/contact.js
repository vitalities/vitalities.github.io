var isPhone = function(yes, no) {
  if (document.documentElement.clientWidth <= 768) {
    return yes;
  } else {
    return no;
  }
}
$(document).ready(function() {
  // Start Feedback and Map animation
  var
    map = $('.contact-map');
    feedback = $('#contact-feedback');
    toMap = $('.contact-show-map');
    toFeedback = $('.contact-show-feedback');
  map.css('z-index','-1');
  map.fadeIn(1000);
  map.fadeOut(0);
  setTimeout(function(){map.css('z-index','11')}, 1000);
  var phoneToMapFun = function() {
    feedback.css({zIndex: '-1', opacity: 0 })
    toMap.css({zIndex: '-1', opacity: 0 })
    map.css({zIndex: '11', opacity: 1, display: 'block'})
    toFeedback.css({zIndex: '11', opacity: 1, display: 'block'})
  }
  var phoneToFeedbackFun = function() {
    map.css({zIndex: '-1', opacity: 0 })
    toFeedback.css({zIndex: '-1', opacity: 0 })
    feedback.css({zIndex: '11', opacity: 1, display: 'block'})
    toMap.css({zIndex: '11', opacity: 1, display: 'block'})
  }
  var toMapFun = function() {
    feedback.animate({opacity: 0}, 300);
    map.stop().fadeIn(300);
    setTimeout(function(){feedback.css('z-index','-1')}, 300);
    toMap.fadeOut();
    toFeedback.fadeIn();
  }
  var toFeedbackFun = function() {
    feedback.css('z-index','10');
    feedback.animate({opacity: 1}, 300);
    map.fadeOut(300);
    toFeedback.fadeOut();
    toMap.fadeIn();
  }
  toMap.click(isPhone(phoneToMapFun, toMapFun))
  toFeedback.click(isPhone(phoneToFeedbackFun, toFeedbackFun))
  // End Feedback and Map animation
})
