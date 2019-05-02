function loadArticles(category){
    console.log(category);
$.ajax({
    method: 'get',
    url: "https://api.nytimes.com/svc/topstories/v2/"+category+".json?api-key=cdvAxEuArJf8OPJNnLPar0Wf2k6Vd8Nd" 
  })
    .done(function(data){
    console.log('Success!!!');
    console.log(data);
  })
    .fail(function(){
    console.log('Oops!!!!! ');
  })
    .always(function(){
    $('.loading').hide()
    })

}

  $('#dropdown-menu').on('change', function(){
    const selected = $(this).val();

    if (selected !== '') {
        console.log('The value you picked is: ' + selected);
        loadArticles(selected);
        $(".storycontentarea").append("https://api.nytimes.com/svc/topstories/v2/{section}.json".context);
        $.ajax({
            method: 'post',
            url: "https://api.nytimes.com/svc/topstories/v2/"+ selected +".json?api-key=cdvAxEuArJf8OPJNnLPar0Wf2k6Vd8Nd" 

          })
            .done(function(data){
            console.log('Success');
            console.log(data);
          })
            .fail(function(){
            console.log("Oh No! There's something wrong");
          })
            .always(function(){
            $('.loading').hide()
            })
  

      }
    });