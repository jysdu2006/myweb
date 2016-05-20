<?php

$apikey='cad4a56d58f17c9a08ab48c38a2a587d';
$type=$_GET['type'];

if($type=='getcont'){
	$cont=trim($_GET['cont']);
    $page=$_GET['page'];
	if($cont=='')
		$cont='排行';
	$ch = curl_init();
    //$url = 'http://apis.baidu.com/txapi/weixin/wxhot?num=10&rand=1&word='.$cont.'&page=1&src=%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5';
    $url = 'http://apis.baidu.com/songshuxiansheng/news/news';

    $header = array(
        'apikey: '.$apikey,
    );
    // 添加apikey到header
    curl_setopt($ch, CURLOPT_HTTPHEADER  , $header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // 执行HTTP请求
    curl_setopt($ch , CURLOPT_URL , $url);
    $res = curl_exec($ch);

    $result=json_decode($res,true);

    echo json_encode($result['retData']);
    //var_dump(json_encode($res));
    //var_dump(json_decode($res));
    //var_dump(json_encode(json_decode($res)));
}






?>