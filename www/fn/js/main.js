var arrPuff = [];

$.getJSON("json/articles.json", function(data){
	console.log(data);
	$(start);
	arrPuff = data;
});

function radomPuff(){
	var randomized = Math.random(0, attPuff.length);
	console.log(randomized);
	return randomized;
	
}


function start(){
	
	$('body').append(startpage());
	$('body').randomPuff();
  	$('#page-content').append(article());
	$('#page-content').append(puff(arrPuff[0]));
	$('#page-content').append(puff(arrPuff[1]));
	$('#page-content').append(puff(arrPuff[2]));
	
}