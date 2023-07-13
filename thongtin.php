<?php 
  $title = "Thông tin"; 
  include 'inc/header.php';
  $show_room = $ct -> show_room();
  if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update'])) {
    $update_info = $ct->update_info($_POST,$_FILES,$code_info_id);
  }
  
  if(isset($update_info)){echo $update_info;}
?>
<div class="card">
  <div class="card-body">
    <h5 class="card-title fw-bolder mb-4"><?php echo $title ?></h5>
    <div class="card">
      <div class="card-body">
        <form method="post" action="">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" name="name" value="<?php echo $resule_info['name'] ; ?>">
            <label for="nameNv">Tên nhân viên</label>
          </div>
          <div class="form-floating mb-3">
            <select class="form-control" id="room" name="room">
              <?php while ($resule_room = $show_room -> fetch_assoc()) { ?>
              <option <?php if($resule_room['name'] == $resule_info['room']){echo "selected";}?>>
                <?php echo $resule_room['name'] ?>
              </option>
              <?php } ?>
            </select>
            <label for="room">Phòng</label>
          </div>
          <div class="form-floating mb-3">
            <select class="form-control" id="permission" name="permission">
              <option <?php if($resule_info['permission'] == 0){echo "selected";}?> value="0">Quản trị</option>
              <option <?php if($resule_info['permission'] == 1){echo "selected";}?> value="1">User</option>
            </select>
            <label for="permission">Quyền</label>
          </div>
          <div class="form-floating mb-3">
            <textarea id="avatar" class="form-control" type="text" name="avatar"
              style="height: 100px"><?php echo $resule_info['avatar'] ; ?></textarea>
            <label for="avatar">Link avatar facebook</label>
          </div>
          <?php if($resule_info['avatar']){ ?>
          <div class="row">
            <div class="col-3">
              <div class="card rounded-2">
                <div class="position-relative">
                  <img id="imgPreview" src="<?php echo $resule_info['avatar'] ; ?>" class="rounded-circle"
                    alt="<?php echo $resule_info['name'] ; ?>" title="Avatar <?php echo $resule_info['name'] ; ?>"
                    width="200" height="200">
                </div>
              </div>
            </div>
          </div>
          <?php } ?>
          <input type="submit" class="btn btn-primary btn-sm" value="Cập nhật" name="update">
          <a href="doi-mat-khau" class="btn btn-warning btn-sm float-end text-black">Đổi mật khẩu</a>
        </form>
      </div>
    </div>
  </div>
</div>
<?php include 'inc/footer.php';?>
<script>
$(document).ready(() => {
  $('#avatar').on('change', function() {
    var link = $(this).val();
    $('#imgPreview').attr('src', link).fadeIn();
  })

});
</script>