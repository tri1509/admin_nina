<?php 
  $title = "Chỉnh sửa phòng"; 
  include 'inc/header.php';
?>
<?php	
  if(isset($_GET['id']) && $_GET['id']!=NULL){
    $id = $_GET['id'];
  }
  $get_id_room = $ct -> get_id_room($id);
  if($get_id_room){
    $result_room = $get_id_room -> fetch_assoc();
  }
  if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit_room'])) {
    $update_room = $ct -> update_room($_POST,$_FILES,$id);
  }
  if(isset($update_room)){ echo $update_room; }
?>
<div class="card">
  <div class="card-body">
    <h5 class="card-title fw-bolder mb-4"><?php echo $title ?></h5>
    <form method="post" action="">
      <div class="card col-md-4">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="name" placeholder=" "
            value="<?php echo $result_room['name'] ; ?>">
          <label for="name">Phòng</label>
        </div>
      </div>
      <input type="submit" class="btn btn-primary btn-sm" value="Cập nhật" name="edit_room">
    </form>
  </div>
</div>
<?php include 'inc/footer.php';?>