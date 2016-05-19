
$('#selbtn').click(function(){
	var text=$('#exampleInputEmail3').val();
	$.get('excute.php',{type:'getcont',cont:text},function(jsondata){
		var data=eval(jsondata);
		alert(data[0]['title']);
	});
});
