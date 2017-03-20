var articles;

$.getJSON('json/articles.json', function(data){
	articles = data;
	$(start);

});

function start(){
	console.log('articles', articles);


	$('body').append(startpage());
	$('#page-content').append(article(articles[1]));


}