
//API key for nyt: vW98uWc5IvP1AlTsCIGOekDaEbGr0fNE
$(document).ready(function() {
    // variables for HTML elements:
    const searchInputEl = $('#search-term');
    const recordsNumEl = $('#num-records');
    const startyearEl = $('#start-year');
    const endYearEl = $('#end-year');

    function buildQueryURL() {

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

        // Set the API key
        var queryParams = { "api-key": "vW98uWc5IvP1AlTsCIGOekDaEbGr0fNEM" };

        // user input
        queryParams.q = $("#search-term")
            .val()
            .trim();

        var startYear = $("#start-year")
            .val()
            .trim();

        if (parseInt(startYear)) {
            queryParams.begin_date = startYear + "0101";
        }

        var endYear = $("#end-year")
            .val()
            .trim()
    }

    $("#search-btn").on("click", function() {
        event.preventDefault();
        console.log(this);

        const searchTerm = searchInputEl.val();
        console.log(searchInputEl.val());

        const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=vW98uWc5IvP1AlTsCIGOekDaEbGr0fNE`;
        //buildQueryURL();

        $.get(queryURL).then(function(response) {
            console.log (response);
        });
    });
});


    // Need event listeners for buttons
    // Need $.get for url with search terms

    // const searchTerms will come from the input field
