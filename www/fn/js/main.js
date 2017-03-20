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
	randomPuff(2);
	console.log(arrPuff);
	$('body').append(startpage());
	$('#page-content').append(article(arrArticles[2]));


}