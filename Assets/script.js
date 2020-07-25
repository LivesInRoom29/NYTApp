
//API key for nyt: vW98uWc5IvP1AlTsCIGOekDaEbGr0fNE
$(document).ready(function() {
    // variables for HTML elements:
    const searchInputEl = $();
    const recordsNumEl = $();
    const startyearEl = $();
    const endYearEl = $();

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

    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerms}&api-key=vW98uWc5IvP1AlTsCIGOekDaEbGr0fNE`;

    $.get(queryURL).then(function(response) {});

}

    // Need event listeners for buttons
    // Need $.get for url with search terms

    // const searchTerms will come from the input field
