<!DOCTYPE html>
<html>
<head>
	<title>留言</title>
</head>
<body>
	<center>
		<form action="index.php?r=index/upd_pro" method="post">
		<input type="hidden" name="id" value="<?php echo $arr['id']?>">
			留言内容：<input type="text" name="liu_content" value="<?php echo $arr['liu_content']?>">
					<input type="submit" value="请修改">
		</form>
	</center>
</body>
</html>