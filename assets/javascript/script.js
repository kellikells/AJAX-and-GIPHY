

var topics = ['Naruto', 'Marvel', 'Looney' + ' Tunes', 'Friends'];

var imageContainer = $(".image-container");

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

            var singleGif = resultsArray[x];

            console.log(resultsArray.length);      //logs the number of gifs returned from AJAX call
                        console.log(theRating);     //checking variables are working

            var theRating = singleGif.rating;
            var theStill = singleGif.images.fixed_height_small_still.url;
            var theMp4 = singleGif.images.fixed_height_small.mp4;

            //=========== <img> and <p: rating>  to DOM ================
            var gifContainer = $("<img>").attr({
                "src": theStill,
                "data-still": theStill,
                "data-animate": theMp4
            });



            var imageRating = $("<p>").text(theRating);

            console.log(imageRating);
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



