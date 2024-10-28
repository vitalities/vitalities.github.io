// Replace ./data.json with your JSON feed
fetch('../video.json').then(response => {
  return response.json();
}).then(portfolio => {

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
    $('.portfolio-category').append('<div class="category-block" id="'+category+'"><p class="section-title">'+category+'</p><div class="portfolio-grid"></div></div>')

    for (let x in portfolio.posts) {
      console.log(x);
      if (portfolio.posts[x].category == category) {
        let id = portfolio.posts[x].category+portfolio.posts[x].id;


        let post = '<iframe id="'+id+'" class="video-portfolio-block" src="'+portfolio.posts[x].url+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        $('#'+category+' .portfolio-grid').append(post);

      }
    }

  });

}).catch(err => {
  console.log('It is error, while importing data', err);
});
