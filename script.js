$( document ).ready(function() {
  $( ".portfolio-photo-item" ).each(function() {
    const thisBlock = $(this);
    const thisImg = $(this).find('img');
    var portfolioBlockWidth = $(this).width()
    var portfolioBlockHeight = $(this).height()
    var portfolioImgWidth = $(this).find('img').width()
    var portfolioImgHeight = $(this).find('img').height()
    var imgRes = portfolioImgWidth / portfolioImgHeight;
    var blockRes = portfolioBlockWidth / portfolioBlockHeight;

    if (imgRes >= blockRes) {
      var thisDiv = $(this);

      $(this).find('img').height(portfolioBlockHeight);
      $(this).find('img').width('auto')
      setTimeout(function () {
        var portfolioImgWidth = thisDiv.find('img').width();
        var imblockd = portfolioImgWidth - portfolioBlockWidth;
        imblockd /= 2;
        var imblockh = portfolioBlockHeight - portfolioImgHeight;
        imblockh /= 1.345;
        thisDiv.find('img').css('right', imblockd);
        thisDiv.find('img').css('bottom', imblockh);
      }, 900);
      setTimeout(function () {
        var portfolioImgWidth = thisDiv.find('img').width();
        var imblockd = portfolioImgWidth - portfolioBlockWidth;
        imblockd /= 2;
        var imblockh = portfolioBlockHeight - portfolioImgHeight;
        imblockh /= 1.345;
        thisDiv.find('img').css('right', imblockd);
        thisDiv.find('img').css('bottom', imblockh);
      }, 3000);
    }else {
      var thisDiv = $(this);
      $(this).find('img').width(portfolioBlockWidth);
      $(this).find('img').height('auto');
      setTimeout(function () {
        var portfolioImgWidth = thisDiv.find('img').width();
        var imblockh = portfolioBlockHeight - portfolioImgHeight;
        imblockh /= 1.05;
        thisDiv.find('img').css('bottom', imblockh);
      }, 900);
      setTimeout(function () {
        var portfolioImgWidth = thisDiv.find('img').width();
        var imblockh = portfolioBlockHeight - portfolioImgHeight;
        imblockh /= 1.05;
        thisDiv.find('img').css('bottom', imblockh);
      }, 3000);
    }

  });

  setTimeout(function () {
    $('.portfolio-item').fadeTo(100, 1);
  }, 900);


});
