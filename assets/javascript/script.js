
var topics = ['Naruto', 'The' + ' office', 'Rick' + ' and' + ' Morty', 'Friends'];

var imageContainer = $(".image-container");



// LOOP: through topics array & build buttons on DOM
// =====================================================
function createButtons() {
    
    $(".button-container").empty();

    for (let i = 0; i < topics.length; i++) {

        var myButton = $("<button>")

        //----button attr------
        // myButton.addClass("button-container");
        myButton.text(topics[i]);
        myButton.attr("data-topic", topics[i]);

        //------putting buttons on DOM-----
        $(".button-container").append(myButton);
    }
}


//=========== FUNCTION: USER INPUT SUBMITTED =========
//----------------------------------------------------

// getting the input from the form


$("#tv-search").on("click"), function (event) {
    event.preventDefault();
    var userTV = $("#userInput").val();
    topics.push(userTV);
    createButtons();
}

//============= FUNCTION: BUTTON ON CLICK ===============
//--------------------------------------------------------
$("button").on("click", function () {
    $(".image-container").empty();
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
            var theMp4 = gifInfo.images.fixed_height_small.url;

            console.log(resultsArray.length);      //logs the number of gifs returned from AJAX call
            console.log(theRating);     //checking variables are working

            //-------variables connected to DOM---------
            var theGifContainer = $("<figure>");
            var theGifRating = $("<figcaption>").text("Rating: " + theRating);
            var theGifImage = $("<img>").attr({
                "src": theStill,
                "data-still": theStill,
                "data-animate": theMp4,
                "rating": theRating,
                "data-state": "still"
            });
            theGifContainer.append(theGifImage, theGifRating);

            // finally connecting it to DOM
            $(".image-container").append(theGifContainer);
        }

        // ========= FUNCTION: IMAGE ON CLICK ===========
        // ----------------------------------------------
        $("img").on("click", function () {
            var state = $(this).attr("data-state");
            var stillState = $(this).attr("data-still");
            var animateState = $(this).attr("data-animate");

            if (state === "still") {
                $(this).attr({
                    "src": animateState,
                    "data-state": "animate"
                });
            }
            else {
                $(this).attr({
                    "src": stillState,
                    "data-state": "still"
                });
            }
        });

    });
});

createButtons();





