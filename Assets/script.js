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