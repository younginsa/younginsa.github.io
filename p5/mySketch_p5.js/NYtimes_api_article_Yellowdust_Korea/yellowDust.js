var searchtext;
var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchtext + '&api-key=K7dGNyHoFOuGUOepv8qW8PtvNXiOAAjt';
var searchIt;


function setup() {
	//url = url+'yellow dust korea';
	searchtext = 'election';
	noCanvas();
	// h1 = createElement('h1', 'sequence is important');
	loadJSON(url, gotData);
}



function keyPressed(){
  if (keyCode === ENTER){
  	 removeElements();
	 searchIt = $('input[name=sketchListItem]').val();
	 url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchIt + '&api-key=K7dGNyHoFOuGUOepv8qW8PtvNXiOAAjt';

//	 url = url+searchIt;
	 console.log(url);

	 loadJSON(url, gotData);
	 // e.preventDefault();
     $('input[name=sketchListItem]').val('');
}
}


function gotData(data) {

 console.log(data.response.docs[5].headline.main);
 var article = data.response.docs;
 for(var i=0; i<article.length; i++){
 	createElement('h2',data.response.docs[i].headline.main);
 	createP(article[i].snippet);
 	console.log('written!');
 }
}
