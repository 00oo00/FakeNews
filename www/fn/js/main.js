
var arrPuff = [];
var arrArticles = [];

$.getJSON("json/articles.json", function(data){
	console.log(data);
	arrArticles = data;
	arrPuff.push(data[0]);
	arrPuff.push(data[1]);
	arrPuff.push(data[1]);
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

$(document).on('click', '.puffDiv', function(){
	
	var articleId = $(this).attr("value");
	//article är objektet i array arrArticles
	for(let art of arrArticles){
		if(articleId == art.id){
			$('#page-content').html('');
			$('#page-content').append(article(art));
		}
	}
	

	console.log(articleId);


});