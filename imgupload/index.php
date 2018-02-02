<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>图片上传</title>
	<link rel="stylesheet" href="">
	<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
</head>
<body>
	<h1><?php 
		   echo "当前时间戳:".time()
		?></h1>
	<form action="upload.php" target='mywin' method="post" accept-charset="utf-8" enctype="multipart/form-data">
		<p>文件上传:</p>
		<p><input type="file" name="img"></p>
	</form>
	<div>
		<img src="" id="imgid"/>
	</div>
	<iframe name="mywin" frameborder="1" src="" style="display:none">
	</iframe>
</body>
<script> 
 $(':file').change(function(){
 	$('form').submit()
 })
</script>
</html>