// $('#search').click(function(){ // can i call this from html?
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
  var itunesApi = "https://itunes.apple.com/search?term=";
  var userInput = getserInput()
  var url = itunesApi + userInput
  $.ajax({
    url: url,
    method: 'get',
    data: {term: userInput},
    dataType: 'jsonp'
  });

}
function getserInput(){
  var getInput = $("#userInput").val();
  return getInput;
}


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
