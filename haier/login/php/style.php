<?php 
	require 'public.php';//引入数据库连接的文件。
	if(isset($_POST['username'])&&isset($_POST['password']) ){
		$username=$_POST['username'];
		$password=$_POST['password'];
	}else{
		echo false;
	}
	$query1="select * from haierdl where name='$username' and password='$password'";//查询用户名和相应的密码。
	
	$result=mysql_query($query1);//获取查询结果
	if(mysql_fetch_array($result)){
		echo 1;//账户和密码匹配
	}else{
		echo 0;//账户和密码不匹配
	}

		
	
 ?>

