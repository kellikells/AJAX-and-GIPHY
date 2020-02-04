

var topics = ['Naruto', 'The' + ' office', 'Rick' + ' and' + ' Morty', 'Friends'];

var imageContainer = $(".image-container");

var theRating;

// LOOP: through topics array & build buttons on DOM
// =====================================================
for (let i = 0; i < topics.length; i++) {

    var myButton = $("<button>")

    //----button attr------
    // myButton.addClass("button-container");
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

    // ----host + search + apiKey + other parameters ----
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvShow + "&api_key=d20zgadSnjTzFYdOaeNTybFyDwS0MmIS" + "&limit=10&lang=en";

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

            var gifInfo = resultsArray[x];
            var theRating = gifInfo.rating;
            var theStill = gifInfo.images.fixed_height_small_still.url;
            var theMp4 = gifInfo.images.fixed_height_small.mp4;

            console.log(resultsArray.length);      //logs the number of gifs returned from AJAX call
            console.log(theRating);     //checking variables are working

            //-------variables connected to DOM---------
            var theGifContainer = $("<div>");
            var theGifRating = $("<p>").text("Rating: " + theRating);
            var theGifImage = $("<img>").attr({
                "src": theStill,
                "data-still": theStill,
                "data-animate": theMp4,
                "rating": theRating
            });

            theGifContainer.append(theGifImage, theRating);
            $(".image-container").append(theGifImage);      // finally connecting it to DOM
        }
    });
});




// $(".topics").on('click', function() {
//     var x = $()}





