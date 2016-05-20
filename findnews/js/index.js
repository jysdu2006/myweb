var page=1;
var html;

function get_cont(){
	var text=$('.form-control').val();
	$.get('server/excute.php',{type:'getcont',cont:text,page:page},function(jsondata){
		var testdata=jsondata.split('<');
		var data=eval(testdata[0]);
		var html='';
		for(var i=0;i<data.length;i++){
			html+='<div class="media"><div class="media-left"><a href=';
			html+=data[i]['url']+'><img class="media-object" src=';
			html+=data[i]['image_url']+'></a></div><div class="media-body"><a href=';
			html+=data[i]['url']+'><h4 class="media-heading">';
			html+=data[i]['title']+'</h4></a>';
			html+=data[i]['abstract']+'</div></div>';
		}
		$('.content_part').empty();
		alert(html);
		$(html).appendTo($('.content_part'));
	});
}

get_cont();

$('#goto').click(function(){
	page=1;
	get_cont();
});

$('#next').click(function(){
	page++;
	get_cont();
	pageScroll();
});
$('#prev').click(function(){
	if(page>1)
		page--;
	get_cont();
	pageScroll();
});

function pageScroll() {
	//window.scrollBy(0,-10);
	//scrolldelay=setTimeout('pageScroll()',1);
	scroll(0,0);
}

function init(){
	var text='<style>img{width:'+document.body.clientWidth+'px;}</style>';
	$(text).appendTo(document.body);
}
//init();