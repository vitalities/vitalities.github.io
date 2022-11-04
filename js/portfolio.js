// Replace ./data.json with your JSON feed
fetch('../data.json').then(response => {
  return response.json();
}).then(portfolio => {

  let postOpened = false;

  // Portfolio preview
  function reloadPortfolio() {
    $(".portfolio-block").each(function() {
      var e = $(this);
      var el = $(this).children("video")[0];
      e.fadeOut(0)
      el.addEventListener('loadeddata', function() {
        el.currentTime = el.duration / 2;
        if (el.currentState != 4) {
          setTimeout(function () {
            el.currentTime = el.duration / 2;
            e.fadeIn();
          }, 5000);
        }
        e.fadeIn();
      }, false);

    })

    $(".portfolio-block").hover(function () {
      $(this).children("video")[0].currentTime = 0;
      $(this).children("video")[0].play();
    }, function () {
      var el = $(this).children("video")[0];
      el.pause();
      el.currentTime = el.duration / 2;
    });
  }

  function openPost(post) {
    // Post tags

    let tags = '<div class="post-tags">';
    post.tags.map(function(tagName) {
      tags += '<div class="tag">'+tagName+'</div>';
    })
    tags += '</div>'

    // Post content

    let postContent = '<div class="post-content"><div id="post"><div class="post-top"><div class="post-title">'+post.title+'</div><a class="post-close"><i class="fa-solid fa-xmark"></i></a></div><div class="post-center"><video src="'+post.video+'" loop controls autoplay playsinline></video></div><div class="post-bottom"><div class="post-date">'+post.date+'</div><div class="post-description">'+post.description+'</div>'+tags+'</div></div>'

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


  function showPosts(category) {
    let categoryId = '#' + category;
    $(categoryId).siblings().removeClass( "category-button-selected" ).addClass( "category-button" );
    $(categoryId).removeClass( "category-button" ).addClass( "category-button-selected" );
    $('.portfolio-grid').empty();

    for (let x in portfolio.posts) {
      if (portfolio.posts[x].category == category) {
        let id = portfolio.posts[x].category+portfolio.posts[x].id;
        let post = '<a class="portfolio-block '+portfolio.posts[x].size+'" id="'+id+'"><video src="'+portfolio.posts[x].video+'" loop muted playsinline></video></a>';
        let nameId = '#'+id;

        $('.portfolio-grid').append(post);

        $(nameId).click(function() {
          openPost(portfolio.posts[x]);
        })

      }
    }

    reloadPortfolio();
  }

  // Categories
  let allCategories = [];

  for (let x in portfolio.posts) {
    allCategories.push(portfolio.posts[x].category);
  }

  let categories = [];
  $.each(allCategories, function(i, el){
    if($.inArray(el, categories) === -1) categories.push(el);
  });

  categories.forEach((category) => {
    $('#category').append('<a id="'+category+'" class="category-button">'+category+'</a>')

    $(document).on('click', '#'+category, function() {
      showPosts(category);
    })

  });

  // First opening of portfolio
  showPosts(categories[categories.length - 1]);



}).catch(err => {
  console.log('It is error, while importing data', err);
});
