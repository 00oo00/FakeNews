var arrPuff = [];
var arrArticles = [];


$.getJSON("json/articles.json", function (data) {
	console.log(data);
	$(start);
	arrArticles = data;
});


function randomPuff() {
	arrPuff.splice(0,arrPuff.length);
	var randomized;
	for (let i = 0; i < 1; i++) {
		
		randomized = Math.floor(Math.random() * arrArticles.length) + 0;
		arrPuff.forEach(function(puff){
			if(puff.id == iu7)
		});
		
		arrPuff.push(arrArticles[randomized]);
	}
}

	function start() {
		
		
		$('body').append(startpage());
		$('#page-content').append(article());
		$('#page-content').append(randomPuff());
	}


