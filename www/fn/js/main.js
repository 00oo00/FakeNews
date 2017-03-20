var arrPuff = [];
var arrArticles = [];

$.getJSON("json/articles.json", function (data) {
	console.log(data);
	arrArticles = data;
	$(start);
});

function randomPuff(currentArticle) {
	arrPuff.splice(0, arrPuff.length);
	var randomized;
	while(arrPuff.length<3) {
		randomized = Math.floor(Math.random() * arrArticles.length) + 0;
		console.log('rand',randomized);
		if (arrPuff.indexOf(arrArticles[randomized]) < 0 && currentArticle != randomized) {
			arrPuff.push(arrArticles[randomized]);
		}
	}
}

function start() {
	randomPuff(arrArticles.length -1);
	console.log(arrPuff);
	$('body').append(startpage());
	$('#page-content').append(article(arrArticles[arrArticles.length -1]));

}

$(document).on('click', '.puffDiv', function(){
	
	var articleId = $(this).attr("value");
	//article är objektet i array arrArticles
	for(let [key,art] of arrArticles.entries()){
		if(articleId == art.id){
			randomPuff(key);
			$('#page-content').html('');
			$('#page-content').append(article(art));
		}
	}
	

	console.log(articleId);


});
