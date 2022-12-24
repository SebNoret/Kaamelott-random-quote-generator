const App = () => {
  const quote = $("#text");
  const character = $("#author");
  const tweet = $("#tweet-quote");
  const infos = $("#infos");

  function getQuote() {
    $("#tweet-quote").hide();
    $("#new-quote").hide();
    $(".loader").show();
    quote.hide();
    character.hide();
    infos.hide();

    $.getJSON(
      "https://quote-generator-1kxo.onrender.com/random/",
      function (data) {
        let citation = data.quote.citation.replace("[", "(");
        citation = citation.replace("]", ")");
        let personnage = data.quote.infos.personnage;
        let saison = data.quote.infos.saison;
        let episode = data.quote.infos.episode;
        $(".loader").hide();

        quote.text(citation);
        quote.css("color", "white");
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
    ).fail(() => {
      $(".loader").hide();
      quote.text("ERREUR DE CHARGEMENT :  impossible d'afficher la citation.");
      quote.css("color", "red");
      quote.fadeIn(1000);
      $("#tweet-quote").show();
      $("#new-quote").show();
      console.log("Loading failed: an error has occured.");
    });
  }
  $(document).ready(function () {
    getQuote();

    $("#new-quote").on("click", getQuote);
  });
};
export default App;
