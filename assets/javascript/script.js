

var alreadyExistingButtons = ['Naruto', 'Stranger Things', 'Narcos', 'The Office'];
// example with search: naruto, limit 10, rating G, language en + api_key
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&rating=G&lang=en&api_key=d20zgadSnjTzFYdOaeNTybFyDwS0MmIS"


for (let i = 0; i < alreadyExistingButtons.length; i++) {

    var tvShow = alreadyExistingButtons[i];
    var myButton = $("<button>");

    var myKey = "d20zgadSnjTzFYdOaeNTybFyDwS0MmIS";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvShow + "&limit=10&rating=G&lang=en&api_key=" + myKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });


    myButton.addClass('alreadyExistingButtons');
    myButton.attr('id', alreadyExistingButtons[i]);
    myButton.text(tvShow);
    $(".buttonDiv").append(myButton);
}




// $(".alreadyExistingButtons").on('click', function() {
//     var x = $()}


// THIS IS FOR THE INPUT FIELD FOR USER



