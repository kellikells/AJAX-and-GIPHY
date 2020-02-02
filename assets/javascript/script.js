

var establishedArr = ['Naruto', 'Marvel', 'Looney' + ' Tunes', 'Friends'];
// example with search: naruto, limit 10, rating G, language en + api_key
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&rating=G&lang=en&api_key=d20zgadSnjTzFYdOaeNTybFyDwS0MmIS"


// loop through preset array & build buttons on DOM
// =====================================================
for (let i = 0; i < establishedArr.length; i++) {
    var myButton = $("<button>");
    var thisShowIs = establishedArr[i];
    myButton.addClass("established-buttons");
    //   myButton.attr({
    //       "rating": 
    //   })
    myButton.text(establishedArr[i]);


    var GIPHYSresponse = $(this).response;

    // "host + endpoint: search + paramenters: q, limit, rating G + apiKey"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thisShowIs + "&limit=10&rating=G&lang=en&api_key=d20zgadSnjTzFYdOaeNTybFyDwS0MmIS";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });



    $(".buttonWrapper").append(myButton);
}


// $(".establishedArr").on('click', function() {
//     var x = $()}


// THIS IS FOR THE INPUT FIELD FOR USER



