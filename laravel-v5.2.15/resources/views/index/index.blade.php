<?php
	use Illuminate\Pagination\LengthAwarePaginator;
?>
<html>
<head>
	<title>留言</title>
</head>
<body>
	<center>
		<form action="<?php echo url('adds')?>" method="post">
			留言内容:<input type="text" name="liu_content">
					 <input type="submit" value="请留言" id="tijiao">
		</form>
			<table border="1">
			<tr>
				<td>id</td>
				<td>留言内容</td>
				<td>操作</td>
			</tr>
			<?php foreach($arr as $k=>$v){?>
				<tr>
					<td><?php echo $v['id']?></td>
					<td><?php echo $v['liu_content']?></td>
					<td><a href="del?id=<?php echo $v['id']?>">删除</a>
					|<a href="upd?id=<?php echo $v['id']?>">修改</a>
					</td>
				</tr>
			<?}?>
			{!! $arr->links() !!}
		</table>
	</center>
</body>
</html>