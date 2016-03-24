<?php
	use yii\widgets\LinkPager;
?>
<html>
<head>
	<title>留言</title>
</head>
<body>
	<center>
		<form action="index.php?r=index/liu_add" method="post">
			留言内容：<input type="text" name="liu_content">
					<input type="submit" value="请留言" id='tijiao'>
		</form>
		<div id="lists">
			<table border='1'>
				<tr>
					<td>id</td>
					<td>留言内容</td>
					<td>操作</td>
				</tr>
				<?php foreach($models  as $k=>$v){?>
					<tr>
						<td><?php echo $v['id']?></td>
						<td><?php echo $v['liu_content']?></td>
						<td><a href="index.php?r=index/dels&id=<?php echo $v['id']?>">删除</a>|
						<a href="index.php?r=index/upd&id=<?php echo $v['id']?>">修改</a></td>
					</tr>
				<?php }?>

						<?php echo LinkPager::widget([
							'pagination' => $pages,
						]);
						?>
						
			</table>			
	
		</div>
	</center>
</body>
</html>
<script src="js/js.js"></script>
<script>
	$("#tijiao").click(function(){
		$("#lists").style='display:block';
	})
</script>