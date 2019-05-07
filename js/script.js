$('#dropdown-menu').on('change', function () {
  const selected = $(this).val();

  if (selected !== '') {
    console.log('The value you picked is: ' + selected);
    $.ajax({
      method: 'get',
      url: "https://api.nytimes.com/svc/topstories/v2/" + selected + ".json?api-key=cdvAxEuArJf8OPJNnLPar0Wf2k6Vd8Nd",
    })
      .done(function (data) {
        console.log('Success');
        console.log(data.results);
        $('.storycontentarea').html(''); // clear the content
        // add .filter
        // const result = data.filter(multimedia[4].url != "" );
        // console.log(result);

        // const newsFiltered = results.filter(function(data){
        //   return object.multimedia.url !==  undefined;
        // });

        $.each(data.results, function (index, object) {

          console.log(object);
          $('.storycontentarea').append(`
              <div class="article">
              <figure>
              <img src="${object.multimedia[4].url}">
              <figcaption>${object.abstract}</figcaption>
              </figure>
              </div>
              `);
        });
      })
      .fail(function () {
        console.log("Oh No! There's something wrong");
      })
      .always(function () {
        $('.loading').hide()
      })


  }
});// end of change event