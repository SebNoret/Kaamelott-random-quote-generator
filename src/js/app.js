const App = () => {
  var quote = $("#text");
  var character = $("#author");
  var tweet = $("#tweet-quote");
  var infos = $("#infos");

  function getQuote() {
    $("#tweet-quote").hide();
    $("#new-quote").hide();
    $(".loader").show();

    quote.hide();
    character.hide();
    infos.hide();

    /* https://cors-anywhere.herokuapp.com/ ce cors proxy est temporaire utilisable pendant le developpement  */
    $.getJSON(
      "https://thingproxy.freeboard.io/fetch/https://kaamelott.chaudie.re/api/random",
      function (data, textStatus, jqXHR) {
        let citation = data.citation.citation.replace("[", "(");
        citation = citation.replace("]", ")");
        let personnage = data.citation.infos.personnage;
        let saison = data.citation.infos.saison;
        let episode = data.citation.infos.episode;
        $(".loader").hide();

        quote.text(citation);
        character.text("- " + personnage);
        infos.text(saison + " Episode " + episode);
        tweet.attr(
          "href",
          "https://twitter.com/intent/tweet?text=" +
            encodeURIComponent('"' + citation + '"' + personnage)
        );

        quote.fadeIn(1000);
        character.fadeIn(1000);
        infos.fadeIn(1000);
        $("#tweet-quote").show();
        $("#new-quote").show();
      }
    );
  }
  $(document).ready(function () {
    getQuote();

    $("#new-quote").on("click", getQuote);
  });
};
export default App;
