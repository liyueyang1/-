<!DOCTYPE html>
<html>
<head>
	<title>留言</title>
</head>
<body>
	<center>
		<form action="<?php echo url('upd_pro')?>" method="post">
			<input type="hidden" name="id" value="<?php echo $arr[0]['id']?>">
			留言内容:<input type="text" name="liu_content">
					 <input type="submit" value="请修改">
		</form>
	</center>
</body>
</html>