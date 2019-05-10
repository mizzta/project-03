$('#dropdown-menu').on('change', function () {
  const selected = $(this).val();
// ('.nyt-logo').on('change', function(){
//   $('header').addclass('shrink');
//   $('main').addclass('grow');
// });

  if (selected !== '') {
    console.log('The value you picked is: ' + selected);
    $.ajax({
      method: 'get',
      url: "https://api.nytimes.com/svc/topstories/v2/" + selected + ".json?api-key=cdvAxEuArJf8OPJNnLPar0Wf2k6Vd8Nd",
    })
      .done(function (data) {
        const newsFiltered= data.results.filter(function(stories){
          return stories.multimedia[4] !==  undefined;
        }).slice(0,12);
        console.log('Success');
        console.log(data.results);
        $('.storycontentarea').html(''); // clear the content

        $.each(newsFiltered, function (index, object) {

          console.log(object);
          $('.storycontentarea').append(`
              <a href="${object.url}"><div class="article" "target="_blank" style="background-image:url(${object.multimedia[4].url}); background-size: cover;">
              <p class="description">${object.abstract}</p></div></a>
              </div>
              `);
        });
        //   $('storycontentarea').css('background-image', 'url('${object.multimedia[4].url}')');
      })
      .fail(function () {
        console.log("Oh No! There's something wrong");
      })
      .always(function () {
        $('.loading').hide()
      })


  }
});// end of change event