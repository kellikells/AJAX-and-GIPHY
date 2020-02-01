$(document).ready(function () {


    var topics = ['Naruto', 'Stranger Things', 'Narcos', 'The Office'];

    for (let i = 0; i < topics.length; i++) {
        var tvShow = topics[i];
        var myButton = $("<button>");
        myButton.addClass('tvShowButtons');
        myButton.attr('id', topics[i]);
        myButton.text(tvShow);
        $(".buttonDiv").append(myButton);
    }




    var myKey = d20zgadSnjTzFYdOaeNTybFyDwS0MmIS

})
