// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button




$(document).on('ready', ()=>{

 axios({

      method: 'get',

      url: `https://rickandmortyapi.com/api/character/`,

 })


 .then((res) => {

    res.data.results.forEach((element,i) => {
        var name = element.name;
        var img = element.image;
         
        if(i < 5){
            $('.container').append(
      
                $(`<div class="profile"></div>`).append(
                    `<h1>${name}</h1> <img src="${img}" alt="">`
                )
            )
        }
    }) 
 })

 .catch((err) => {});

})


