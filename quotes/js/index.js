google.load('search', '1');

$(document).ready(function() {

  //GET QUOTE 
  $('#btn').on('click', function() {
    (function getQuote() {
      $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
        type: 'POST',
        data: {},
        dataType: 'json',
        success: function(data) {

          console.log("AJAX");
          console.log(data);

          $("#data").html(data.quote);
          $("#author").html(data.author);
        },
        error: function(err) {
          alert(err);
        },
        beforeSend: function(xhr) {
          xhr.setRequestHeader("X-Mashape-Authorization", "EgxLNfFrMhmshM7ajUwpYWDuEXL5p11ulprjsnrWoD4nbesth4");
        }
      });
    })();
  });

  //GET INTERNET SEARCH
  $('#search').on('click', function() {
    var searchValue = $('#input').val();

    console.log('user searched for: ' + searchValue);

    function OnLoad() {
      // Create a search control
      var searchControl = new google.search.SearchControl();

      /* Add in a full set of searchers
      var localSearch = new google.search.LocalSearch();
      searchControl.addSearcher(localSearch);
      searchControl.addSearcher(new google.search.WebSearch());
      searchControl.addSearcher(new google.search.VideoSearch());
      searchControl.addSearcher(new google.search.BlogSearch());
      searchControl.addSearcher(new google.search.NewsSearch());
      searchControl.addSearcher(new google.search.ImageSearch());
      searchControl.addSearcher(new google.search.PatentSearch());*/
      searchControl.addSearcher(new google.search.BookSearch());

      // tell the searcher to draw itself and tell it where to attach
      searchControl.draw(document.getElementById("searchResult"));

      // execute an inital search
      searchControl.execute(searchValue);

    }
    google.setOnLoadCallback(OnLoad());
  });

});

/*
  FIRST ATTEMPT VIA theysaidso.com
 
 var jason, src; 
    $.getJSON('http://quotes.rest/qod.json',function(json) {
      if (json.length != 0) {
        
        jason = json;
        src = jason.contents.quotes[0].background;
        
        console.info('HA! got it Jim! ')
        console.log(jason);
        
        $('#data').html(jason.contents.quotes[0].quote);
        $('#author').html(jason.contents.quotes[0].author);
      } else console.log('API is probably down..');
    });
   */