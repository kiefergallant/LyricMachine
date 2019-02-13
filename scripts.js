


function addArtistAndSong(){
  var artist = document.getElementById('artist').value;
  var title = document.getElementById('song').value;
  var songUrl = 'https://api.lyrics.ovh/v1/' + artist + '/' + title;
  fetch(songUrl)
  // after we fetch it then we will run a function
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    // finally made it to our actual data
    console.log(data);
    var p = document.getElementById("lyrics");
    var text = document.createTextNode(JSON.stringify(data));
    
    p.appendChild(text);





  })

}



document.getElementById('submit').addEventListener('click',addArtistAndSong)
