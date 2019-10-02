var url;
var stringvar;
var searchIt;


function setup() {
	stringvar = 'Samsung';
	url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+stringvar+'&api-key=K7dGNyHoFOuGUOepv8qW8PtvNXiOAAjt&q=';
	noCanvas();
	// h1 = createElement('h1', 'sequence is important');
	loadJSON(url, gotData);
	print(url);
}



function keyPressed(){
  if (keyCode === ENTER){
  	 removeElements();
  	 //url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0a496657f3f0437fae3724a0cb1d7bd3&q=';
	 searchIt = $('input[name=sketchListItem]').val();
	 url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+searchIt+'&api-key=K7dGNyHoFOuGUOepv8qW8PtvNXiOAAjt&q=';
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
