//API key for nyt: vW98uWc5IvP1AlTsCIGOekDaEbGr0fNE
$(document).ready(function() {
    // variables for HTML elements:
    const searchInputEl = $();
    const recordsNumEl = $();
    const startyearEl = $();
    const endYearEl = $();

    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerms}&api-key=vW98uWc5IvP1AlTsCIGOekDaEbGr0fNE`;

    $.get(queryURL).then(function(response) {});

}

    // Need event listeners for buttons
    // Need $.get for url with search terms

    // const searchTerms will come from the input field
