$(start);

var puffs = [];

function start(){

	$.getJSON('json/articles.json', function(data){
		puffs.push(data[1]);
		loadDom();
	});


} 

function loadDom(){
	$('body').append(startpage());
  $('#page-content').append(article());
  	//$('#page-content').append(puff());
}