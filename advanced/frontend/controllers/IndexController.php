<?php
namespace frontend\controllers;

use Yii;
use common\models\LoginForm;
use frontend\models\PasswordResetRequestForm;
use frontend\models\ResetPasswordForm;
use frontend\models\SignupForm;
use frontend\models\ContactForm;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use yii\data\Pagination;
use app\models\Liuyan;

/**
 * Index controller
 */
class IndexController extends Controller
{
	public $enableCsrfValidation = false;

	//留言
	public function actionIndex(){
		$test=new Liuyan();	//实例化model模型
		$arr=$test->find();
		//$countQuery = clone $arr;
		$pages = new Pagination([
			//'totalCount' => $countQuery->count(),
			'totalCount' => $arr->count(),
			'pageSize'   => 2   //每页显示条数
		]);
		$models = $arr->offset($pages->offset)
			->limit($pages->limit)
			->all();
		return $this->render('index', [
			'models' => $models,
			'pages'  => $pages
		]);
		// $db = Yii::$app->db;
		// $re = $db->createCommand('select * from liuyan')->queryAll();
		// return $this->render("index.php",['re'=>$re]);
	}

	//添加
	public function actionLiu_add(){
		$liu_content = $_POST['liu_content'];
		$db = Yii::$app->db;
		$arr = $db->createCommand("insert into liuyan(liu_content)values('$liu_content')")->execute();
		if($arr){
			echo "<script>alert('添加成功'),location.href='index.php?r=index/index'</script>";
		}else{
			echo "<script>alert('添加失败'),location.href='index.php?r=index/index'</script>";
		}
	}

	//删除
	public function actionDels(){
		$id = $_GET['id'];
		$db = Yii::$app->db;
		$arr = $db->createCommand("delete from liuyan where id='$id'")->execute();
		if($arr){
			echo "<script>alert('删除成功'),location.href='index.php?r=index/index'</script>";
		}else{
			echo "<script>alert('删除失败'),location.href='index.php?r=index/index'</script>";
		}
	}

	//修改
	public function actionUpd(){
		$id = $_GET['id'];
		$db = Yii::$app->db;
		$arr = $db->createCommand("select * from liuyan where id='$id'")->queryOne();
		return $this->render("upd",['arr'=>$arr]);
	}

	//验证是否修改成功
	public function actionUpd_pro(){
		$liu_content = $_POST['liu_content'];
		$id = $_POST['id'];
		$db = Yii::$app->db;
		$arr = $db->createCommand("update liuyan set liu_content='$liu_content' where id='$id'")->execute();
		if($arr){
			echo "<script>alert('修改成功'),location.href='index.php?r=index/index'</script>";
		}else{
			echo "<script>alert('修改失败'),location.href='index.php?r=index/index'</script>";
		}
	}
}
