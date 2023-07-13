<?php 
  $title = "Thêm người"; 
  include 'inc/header.php';
  $show_room = $ct -> show_room();
  if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_user'])) {
    $error = array();
    $alert = array();
    if(empty($_POST['name_user'])) {
      $error['name_user'] = "Không được để trống tên !";
    }else{
      $name_user = $_POST['name_user'];
    }
    if(empty($_POST['code_user'])) {
      $error['code_user'] = "Hãy nhập msnv !";
    }else{
      $code_user = $_POST['code_user'];
    }
    if(empty($_POST['room'])) {
      $error['room'] = "Vui lòng chọn phòng !";
    }else{
      $room = $_POST['room'];
    }
    if($_POST['permission'] == " ") {
      $error['permission'] = "Quyền sử dụng đâu ?";
    }else{
      $permission = $_POST['permission'];
    }
    if(empty($_POST['pass'])) {
      $error['pass'] = "Không được để trống mật khẩu !";
    }else{
      $pass = md5($_POST['pass']);
    }
    $avatar_user = $_POST['avatar_user'];
    if(empty($error)){
      $data = array(
        'name' => $name_user,
        'code' => $code_user,
        'room' => $room,
        'avatar' => $avatar_user,
        'permission' => $permission,
        'pass' => $pass
      );
      $add_user = $ct -> add_user($data);
    }
  }
?>
<style>
.password-control {
  position: absolute;
  top: 20px;
  right: 10px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(./assets/images/backgrounds/view.svg) 0 0 no-repeat;
  transition: 0.5s;
}

.view {
  background: url(./assets/images/backgrounds/no-view.svg) 0 0 no-repeat;
  transition: 0.5s;
}
</style>
<div class="card">
  <div class="card-body">
    <h5 class="card-title fw-bolder mb-4"><?php echo $title ?></h5>
    <div class="card">
      <div class="card-body">
        <form method="post" action="">
          <div class="row">
            <div class="col-md-8">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" name="name_user" placeholder=" "
                  value="<?php if(!empty($name_user)){ echo $name_user ;} ?>">
                <label for="nameNv">Tên nhân viên</label>
                <div class="form-text text-danger">
                  <?php if(!empty($error['name_user'])) { echo $error['name_user'] ; }?>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" name="code_user" placeholder=" "
                  value="<?php if(!empty($code_user)){ echo $code_user ;} ?>">
                <label for="nameNv">Mã số nhân viên</label>
                <div class="form-text text-danger">
                  <?php if(!empty($error['code_user'])) { echo $error['code_user'] ; }?>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="form-floating mb-3">
                <select class="form-control" id="room" name="room">
                  <option value="">---Chọn---</option>
                  <?php while ($resule_room = $show_room -> fetch_assoc()) { ?>
                  <option <?php if(!empty($room) && $room == $resule_room['name'] ){ echo "selected" ;} ?>>
                    <?php echo $resule_room['name'] ?>
                  </option>
                  <?php } ?>
                </select>
                <label for="room">Phòng</label>
                <div class="form-text text-danger">
                  <?php if(!empty($error['room'])) { echo $error['room'] ; }?>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <select class="form-control" name="permission">
                  <option value=" ">---Chọn---</option>
                  <option value="0" <?php if(!empty($permission) && $permission == "0"){ echo "selected" ;} ?>>Quản trị
                  </option>
                  <option value="1" <?php if(!empty($permission) && $permission == "1"){ echo "selected" ;} ?>>User
                  </option>
                </select>
                <label for="permission">Quyền</label>
                <div class="form-text text-danger">
                  <?php if(!empty($error['permission'])) { echo $error['permission'] ; }?>
                </div>
              </div>
            </div>
          </div>
          <div class="form-floating mb-3">
            <textarea placeholder=" " class="form-control" type="text" name="avatar_user"
              style="height: 100px"><?php if(!empty($avatar_user)) { echo $avatar_user ; }?></textarea>
            <label for="avatar">Link avatar facebook</label>
          </div>
          <div class="row g-2">
            <div class="col-md">
              <div class="form-floating mb-3 position-relative">
                <input type="password" class="form-control" name="pass" placeholder=" " id="password">
                <label for="pass">Nhập mật khẩu</label>
                <div id="password-strength" class="form-text"></div>
                <a class="password-control" onclick="return show_hide_password(this);"></a>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating mb-3 position-relative">
                <input id="password_2" class="form-control" type="password" placeholder=" ">
                <label for="msnv">Nhập lại mật khẩu</label>
                <div id="alo" class="form-text"></div>
                <a class="password-control" onclick="return show_hide_password_2(this);"></a>
              </div>
            </div>
          </div>
          <input type="submit" class="btn btn-dark btn-sm" value="Thêm thành viên" name="add_user" id="add_user"
            disabled>
        </form>
      </div>
      <?php if(isset($add_user)){echo $add_user;} ?>
    </div>
  </div>
</div>
<script>
function show_hide_password(target) {
  var input = document.getElementById('password');
  if (input.getAttribute('type') == 'password') {
    target.classList.add('view');
    input.setAttribute('type', 'text');
  } else {
    target.classList.remove('view');
    input.setAttribute('type', 'password');
  }
  return false;
}

function show_hide_password_2(target) {
  var input_2 = document.getElementById('password_2');
  if (input_2.getAttribute('type') == 'password') {
    target.classList.add('view');
    input_2.setAttribute('type', 'text');
  } else {
    target.classList.remove('view');
    input_2.setAttribute('type', 'password');
  }
  return false;
}
</script>
<?php include 'inc/footer.php';?>