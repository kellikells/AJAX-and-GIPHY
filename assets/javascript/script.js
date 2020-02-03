

var topics = ['Naruto', 'Marvel', 'Looney' + ' Tunes', 'Friends'];

var imageContainer = $(".image-container");

// LOOP: through topics array & build buttons on DOM
// =====================================================
for (let i = 0; i < topics.length; i++) {

    var myButton = $("<button>")

    //----button attr------
    myButton.addClass("established-buttons");
    myButton.text(topics[i]);
    myButton.attr("data-topic", topics[i]);

    //------putting buttons on DOM-----
    $(".button-container").append(myButton);

}

//============= FUNCTION: BUTTON ON CLICK ===============
//--------------------------------------------------------
$("button").on("click", function () {

    //---use the "data-topic" to get the button text
    var tvShow = $(this).attr("data-topic");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvShow + "&limit=10&lang=en&api_key=d20zgadSnjTzFYdOaeNTybFyDwS0MmIS";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);    // logging the resulting object

        var resultsArray = response.data;

        //==============LOOP through GIFs==================
        //---------GIF info: title, rating, small-still, small-mp4
        //------------------------------------------------
        for (let x = 0; x < resultsArray.length; x++) {

            console.log(resultsArray.length);      //logs the number of gifs returned from AJAX call
            var theTitle = resultsArray[x].title;
            console.log(theTitle);      //checking to see it logs all 10 titles, it works
            var theRating = resultsArray[x].rating;
            var theStill = resultsArray[x].images.fixed_height_small_still.url;
            var theMp4 = resultsArray[x].images.fixed_height_small.mp4;

            //=========== <img> and <p: rating>  to DOM ================
            var gifContainer = $("<img>").attr({
                "src": theStill,
                "data-still": theStill,
                "data-animate": theMp4
            });
            var imageRating = $("<p>" + theRating + "</p>");
            //-----attach the rating to the img-----
            gifContainer.append(imageRating);
            //------
            $(".image-container").append(gifContainer);
        }
    });


})


// $(".topics").on('click', function() {
//     var x = $()}


// THIS IS FOR THE INPUT FIELD FOR USER



