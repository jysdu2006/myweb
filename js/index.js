var page=1;


function get_cont(){
	var text=$('.form-control').val();
	$.get('server/excute.php',{type:'getcont',cont:text,page:page},function(jsondata){
		//var data=eval(jsondata);
		var data=eval("("+jsondata+")");
		var html='';
		for(var i=0;i<data.length;i++){
			html+='<div class="panel panel-default"><div class="panel-heading"><a href=';
			html+=data[i]['url']+'><h1 class="panel-title">';
			html+=data[i]['title']+'</h1></a></div><div class="panel-body"><a href=';
			html+=data[i]['url']+'><img class="img-rounded" src=';
			html+=data[i]['picUrl']+'></a></div><div class="panel-footer">';
			html+=data[i]['description']+' '+data[i]['ctime']+'</div></div>';
		}
		$('.content_part').empty();
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