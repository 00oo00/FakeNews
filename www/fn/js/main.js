$(start);

var a = "https://www.youtube.com/embed/KL6EO76wULc?ecver=2"

function start(){
	$('body').append(startpage());
  $('#page-content').append(article(a));
}