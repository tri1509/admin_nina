<?php 
  $title = "Đổi mật khẩu"; 
  include 'inc/header.php';
	if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit_pass'])) {
    $new_pass = $_POST['new_pass'];
    $pass = md5($_POST['pass']);
    $data = array(
      'pass' => $pass,
      'new_pass' => $new_pass,
    );
    $edit_pass = $ct -> edit_pass($data,$code);
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
    <form method="post" action="">
      <div class="card col-md-4">
        <div class="form-floating mb-3">
          <input type="password" name="pass" id="password" class="form-control" placeholder=" ">
          <label for="pass">Nhập mật khẩu cũ</label>
          <a class="password-control" onclick="return show_hide_password(this);"></a>
        </div>
        <div class="form-floating">
          <input type="password" name="new_pass" id="new_password" class="form-control" placeholder=" ">
          <label for="new_pass">Nhập mật khẩu mới</label>
          <a class="password-control" onclick="return show_hide_new_password(this);"></a>
        </div>
      </div>
      <input type="submit" class="btn btn-primary btn-sm" value="Cập nhật" name="edit_pass">
    </form>
  </div>
  <div class="col-md-4 ms-3">
    <?php if(isset($edit_pass)) {echo $edit_pass;} ?>
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

function show_hide_new_password(target) {
  var input_2 = document.getElementById('new_password');
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