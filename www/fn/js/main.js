var arrPuff = [];

$.getJSON("json/articles.json", function(data){
	console.log(data);
	$(start);
	arrPuff = data;
});




function start(){
	
	$('body').append(startpage());

  $('#page-content').append(article());
	$('#page-content').append(puff(arrPuff[0]));
	$('#page-content').append(puff(arrPuff[1]));
	
}