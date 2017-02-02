function startSearch(){
  var itunesApi = "https://itunes.apple.com/search?limit=5&term=";
  var userInput = getserInput();
  var url = itunesApi + userInput;
  $.ajax({
    url: url,
    method: 'get',
    data: {term: userInput},
    dataType: 'jsonp',
    success: function(songs){
      displayResults(songs);
    }
  });

}

function getserInput(){
  var getInput = $("#userInput").val();
  return getInput;
}

function displayResults(songs){

  $('#showResults').empty();
  for(var i = 0; i < songs.resultCount; i++){
  $('#showResults').prepend(
  "<ul>"+
  "<img src=" + songs.results[i].artworkUrl100 + "> "+ "</ul>"+
  "<ul>"+
  "Artist Name:" + " " + songs.results[i].artistName+ " " +  "</ul>"+
  "<ul>"+
  "Track Name:" + " " +songs.results[i].trackName+ " " +  "</ul>"+
  "<ul>"+
  "Album:" + " " +songs.results[i].collectionName+ " " + "</ul>"+
  "<ul>"+
  "<audio controls><source src='" + songs.results[i].previewUrl + "' type=" + "audio/mp4>" + "</audio>" +
  "<br></br" +
  "</ul>"); //link to html unfiltered list <ul></ul>
  }
}
