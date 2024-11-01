// xmlhttp = new XMLHttpRequest();
//
// url = '127.0.0.1'
//
// xmlhttp.open("POST", url)
// xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*')
// xmlhttp.setRequestHeader('Access-Control-Allow-Headers', '')

// Copyright
$('#copyright').text(new Date().getFullYear()+'. Designed by Vitalii Mokiichuk')

$(document).ready(function() {
    $("#photo-button").mouseenter(function() {
      $("#hero-video-video, #hero-video-motiondesign").hide();
      $("#hero-video-photo").show();
    });
  
    $("#video-button").mouseenter(function() {
      $("#hero-video-photo, #hero-video-motiondesign").hide();
      $("#hero-video-video").show();
    });
  
    $("#motiondesign-button").mouseenter(function() {
      $("#hero-video-video, #hero-video-photo").hide();
      $("#hero-video-motiondesign").show();
    });
  });