//API key for nyt: vW98uWc5IvP1AlTsCIGOekDaEbGr0fNE
$(document).ready(function() {
    // variables for HTML elements:
    const searchInputEl = $('#search-term');
    const recordsNumEl = $('#num-records');
    const startyearEl = $('#start-year');
    const endYearEl = $('#end-year');


    $("button.search-btn").on("click", function() {
        event.preventDefault();

        const searchTerm = searchInputEl.val()

        const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=vW98uWc5IvP1AlTsCIGOekDaEbGr0fNE`;

        $.get(queryURL).then(function(response) {
            console.log (response);
        });
    };
}
    // Need event listeners for buttons
    // Need $.get for url with search terms

    // const searchTerms will come from the input field
