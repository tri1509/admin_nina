<?php
include './classes/adminlogin.php';
include './lib/validation.php';
?>
<?php
	$login = new adminlogin();		
	if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST["btn_login"])) {
		$code = $_POST['code'];
		$pass = md5($_POST['pass']);
		$login_check = $login->login($code,$pass);
	}
?>
<!doctype html>
<html lang="en">

<head>
  <base href="<?php echo $config['base'] ?>">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Đăng nhập</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
  <link rel="shortcut icon" type="image/png" href="https://nina.vn/images/logo-2789.png" />
  <link rel="stylesheet" href="./assets/css/styles.css" />
  <canvas id="canvas"></canvas>
</head>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<style>
.bg {
  background: url(./assets/images/backgrounds/bg_login.png) center repeat !important;
}

.password-control {
  position: absolute;
  top: 40px;
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

.form-nina {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
}

#logo {
  animation: .5s infinite blinkRed;
  filter: brightness(1.5)
}

@keyframes blinkRed {

  from,
  to {
    filter: brightness(1.5)
  }

  50% {
    filter: brightness(1)
  }
}
</style>

<body style="overflow:hidden;" class="bg">
  <div class="form-nina">
    <div class="card mb-0">
      <div class="card-body">
        <a .href="" class="text-nowrap logo-img text-center d-block py-3 w-100">
          <img id="logo" src="./assets/images/logos/LOGO NINA CO.png" alt="Nina" width="100">
        </a>
        <p class="text-center fw-bolder text-danger fs-5">Đăng Nhập Hệ Thống
        </p>
        <?php if(isset($login_check)) {echo $login_check;} ?>
        <form action="" method="post">
          <div class="mb-3">
            <label for="code" class="form-label"> <i class="fas fa-user-circle"></i> Mã số nhân viên</label>
            <input type="text" class="form-control" required="required" name="code" id="code">
          </div>
          <div class="mb-4 position-relative">
            <label for="password" class="form-label"><i class="fas fa-key"></i> Mật khẩu</label>
            <input class="form-control" required="required" type="password" id="password" name="pass">
            <a class="password-control" onclick="return show_hide_password(this);"></a>
          </div>
          <div class="d-flex align-items-center justify-content-between mb-4">
            <div class="form-check">
              <input class="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" checked>
              <label class="form-check-label text-dark" for="flexCheckChecked">
                Ghi nhớ mật khẩu
              </label>
            </div>
            <a class="text-primary fw-bold" href="./index.html">Quên mật khẩu ?</a>
          </div>
          <input type="submit" value="Đăng nhập" name="btn_login" id="btn_login"
            class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">
          <div class="d-flex align-items-center justify-content-center">
            <p class="fs-4 mb-0 fw-bold">Chưa có tài khoản ?</p>
            <a class="text-primary fw-bold ms-2" href="dang-ky">Đăng ký ngay</a>
          </div>
        </form>
      </div>
    </div>
  </div>
  <script src="./assets/libs/jquery/dist/jquery.min.js"></script>
  <script src="./assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="./assets/js/phaohoa.js"></script>
</body>
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
</script>

</html>