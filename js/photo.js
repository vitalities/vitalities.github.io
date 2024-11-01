// Replace ./data.json with your JSON feed
fetch('../photo.json').then(response => {
  return response.json();
}).then(portfolio => {

  let postOpened = false;

  // Categories

  $('.portfolio-category').append('<div class="category-block"><p class="section-title">Photo</p><div class="portfolio-grid-photo"></div></div>')

  for (let x in portfolio.posts) {
    let post = '<img src="'+portfolio.posts[x].src+'" class="photo-portfolio-block" id="photo'+x+'">';
    let nameId = '#photo'+x;
    $('.portfolio-grid-photo').append(post);    

    $(nameId).click(function() {
      openPost(portfolio.posts[x]);
    })

  }

  function openPost(post) {
    // Post content

    let postContent = '<div class="post-content"><img id="post-image" src="'+post.src+'"></div>'

    $('.cover').append(postContent);
    $('.cover').fadeIn(300);
    postOpened = true;
  }

  $(document).on('click', '.post-close', function() {
    $('.cover').fadeOut(100, function() {
      $('.cover').empty()
    });
    postOpened = false;
  });

  $('html').click(function (e) {
    if (e.target.className == "post-content") {
      if (postOpened) {
        $('.cover').fadeOut(100, function() {
          $('.cover').empty()
        });
        postOpened = false;
      }
    } else {
      return
    }
  });

  $(document).keyup(function(e) {
    if (e.key === "Escape") {
      if (postOpened) {
        $('.cover').fadeOut(100, function() {
          $('.cover').empty()
        });
        postOpened = false;
      }
    }
  });

}).catch(err => {
  console.log('It is error, while importing data', err);
});
