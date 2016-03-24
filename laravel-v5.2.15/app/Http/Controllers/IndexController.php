<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Pagination\Paginator;
class IndexController extends Controller
{

  //留言
  public function index(){
        $users = DB::table('liuyan')->paginate(2);
        // print_r($users);die;
        // $sql = "select id,liu_content from liuyan";
        // $arr=DB::select($sql);
        return view("index/index",['arr'=>$users]);
  }
  //添加
  public function adds(){
        $liu_content = $_POST['liu_content'];
        $sql = "insert into liuyan(liu_content)values('$liu_content')";
        $arr=DB::insert($sql);
        if($arr){
          echo "<script>alert('添加成功'),location.href='index'</script>";
        }else{
          echo "<script>alert('添加失败'),location.href='index'</script>";
        }
  }
  //删除
  public function del(){
      $id = $_GET['id'];
      $sql = "delete from liuyan where id='$id'";
      $arr=DB::delete($sql);
      if($arr){
           echo "<script>alert('删除成功'),location.href='index'</script>";
      }else{
           echo "<script>alert('删除失败'),location.href='index'</script>";
      }
  }
	
  //修改
  public function upd(){
      $id = $_GET['id'];
      $sql = "select id,liu_content from liuyan where id='$id'";
      $re=DB::select($sql);
      return view("index/upd",['arr'=>$re]);
  }

  //验证是否修改成功
  public function upd_pro(){
      $liu_content = $_POST['liu_content'];
      $id = $_POST['id'];
      $sql = "update liuyan set liu_content='$liu_content' where id='$id'";
      $re=DB::update($sql);
      if($re){
        echo "<script>alert('修改成功'),location.href='index'</script>";
      }else{
        echo "<script>alert('修改失败'),location.href='index'</script>";
      }
  }
}