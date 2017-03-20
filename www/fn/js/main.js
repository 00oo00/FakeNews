
var arrPuff = [];
var arrArticles = [];

$.getJSON("json/articles.json", function(data){
	console.log(data);
	arrArticles = data;
	arrPuff.push(data[3]);
	arrPuff.push(data[4]);
	arrPuff.push(data[5]);
	$(start);
});

function radomPuff(){
	var randomized = Math.random(0, arrArticles.length);
	console.log(randomized);
	return randomized;
	
}


function start(){
	//radomPuff();
	$('body').append(startpage());
  	$('#page-content').append(article(arrArticles[1]));

}

