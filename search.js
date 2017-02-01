function ajax(){
  $.ajax({
    url: url,
    method: 'get',
    data; {term:requestData},
    dataType; 'json',
    success: function(data){
      if(){

      }
      else{}
    }
  });

}



function searchMusic(){
var searchItunes = combineInputAndApi();
return searchItunes
}

function getInput(){
  var userInput = $("#userInput").val();
  return userInput;
}


function startSearch(){
  var itunesApi = "https://itunes.apple.com/search?term=";
  var input = getInput();
  var searchFor = itunesApi + input;
  return searchFor;
}
