// $('#search').click(function(){
//   var itunesApi = "https://itunes.apple.com/search?term=";
//   var userInput = getserInput()
//   var url = itunesApi + userInput
//   $.ajax({
//     url: url,
//     method: 'get',
//     data: {term: userInput},
//     dataType: 'jsonp',
//   });
// });

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
//forloop
//result.append
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


// function displayResults(songs){
//   if (songs.resultCount === 0){
// 		//display("Sorry, we couldn't find anyone with that search request.");
//   }
// 		else {
// 			var searchResults = songs.results.map(function(data) {
// 				return ["Artist Name:" + " " + data.artistName, "Track Name:" + " " + data.trackName, "Album:" + " " + data.collectionName, data.artworkUrl30,  ].join(" ");
// 			});
// 			//alert("We found the following result:" + " " + searchResults );
// 		}
// }

// function searchMusic(){
// var searchItunes = combineInputAndApi();
// return searchItunes
// }
//
// function userInput(){
//   var getInput = $("#userInput").val();
//   return getInput;
// }

//
// function startSearch(){
//
//   var input = getInput();
//   var searchFor = itunesApi + input;
//   return searchFor;
// }
