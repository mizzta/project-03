  $('#dropdown-menu').on('change', function(){
    const selected = $(this).val();

    if (selected !== '') {
        console.log('The value you picked is: ' + selected);
        // loadArticles(selected);
        // $(".storycontentarea").append();
        $.ajax({
            method: 'get',
            url: "https://api.nytimes.com/svc/topstories/v2/"+selected+".json?api-key=cdvAxEuArJf8OPJNnLPar0Wf2k6Vd8Nd&count=12",
          })
            .done(function(data){
            console.log('Success');
            console.log(data.results);
            $.each(data.results, function(index, object){
              console.log(object);
              $('.storycontentarea').append(`
              <p>${object.title}</p>
              <p>${object.abstract}</p>
              <img src= "${object.multimedia[4].url}">
              `);
            });
          })
            .fail(function(){
            console.log("Oh No! There's something wrong");
          })
            .always(function(){
            $('.loading').hide()
            })
  

      }
    });// end of change event