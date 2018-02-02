$( document ).ready(function() {



    fetch('/all').then(data=>{
        return data.json()
    }).then((articles)=>{
        // console.log(articles)
        // $('.container').append(JSON.stringify(articles))

        articles.forEach(element => {
                // console.log(element)

                if(element.title){
                    $('.container').append(`

                <div class="section">

                    <h5>${element.title}</h5>
                    <a href="${element.link}">${element.title}</a>
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <br>
                    <button  data-article="${element._id}" class=" note btn btn-outline-secondary orange darken-3" type="button">Save Article</button>
                    </div>
                    <br>
                    <input type="text" id="${element._id}" class="form-control" placeholder="comment here" aria-label="" aria-describedby="basic-addon1">
                    </div>
                </div>
                    `)
                }

        });
        
    })


    $(document).on("click",".note",function(e) {
       console.log(e)
        console.log($(this).data('article'))
        article_id = $(this).data('article')
        console.log($(`#${article_id}`).val())
    });

});