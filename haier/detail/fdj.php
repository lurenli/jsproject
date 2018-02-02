<?php
	header('content-type:text/html;charset=utf-8');
	$conn=@mysql_connect('localhost','root');
	if(!$conn){
		die('数据库链接失败'.mysql_error());
	}
	
	mysql_select_db('html5');
	
	mysql_query('SET NAMES UTF8');
	
	$result=mysql_query('select * from haierfdj');
	
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	
	echo json_encode($arr);//输出一个接口
	
	mysql_close($conn);
?>
