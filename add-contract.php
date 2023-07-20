<?php 
  $title = "Thêm hợp đồng"; 
  include 'inc/header.php';
?>
<?php	
	if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add'])) {
      $insert = $ct->insert($_POST,$_FILES,$code);
    }
  if(isset($insert)){echo $insert;}
?>
<div class="card">
  <div class="card-body">
    <h5 class="card-title fw-bolder mb-4"><?php echo $title ?></h5>
    <div class="card">
      <form method="post" action="">
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" type="text" class="form-control" name="nameNv" placeholder=" ">
              <label for="nameNv">Tên nhân viên phụ trách</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" class="form-control" type="text" name="msnv" placeholder=" ">
              <label for="msnv">Mã số NV</label>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" type="text" class="form-control" name="nameKh" placeholder=" ">
              <label for="nameKh">Tên khách hàng</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" class="form-control" type="text" name="mshd" placeholder=" ">
              <label for="mshd">Mã số HD</label>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" type="text" class="form-control" name="email" placeholder=" ">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" class="form-control" type="text" name="phone" placeholder=" ">
              <label for="phone">Số điện thoại</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" class="form-control" type="text" name="domain" placeholder=" ">
              <label for="domain">Tên miền</label>
            </div>
          </div>
        </div>
        <div class="row g-1">
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" class="form-control" type="text" name="address" placeholder=" ">
              <label for="address">Địa chỉ</label>
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" type="text" class="form-control" name="giaWeb" placeholder=" ">
              <label for="giaWeb">Giá web</label>
              <div class="form-text">(triệu đồng)</div>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" class="form-control" type="text" name="giaHost" placeholder=" ">
              <label for="giaHost">Giá host</label>
              <div class="form-text">(triệu đồng)</div>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" class="form-control" type="text" name="ngayKy" placeholder=" ">
              <label for="ngayKy">Ngày ký</label>
              <div class="form-text">(Ngày / tháng / năm)</div>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input autocomplete="off" class="form-control" type="text" name="ngayHet" placeholder=" ">
              <label for="ngayHet">Ngày hết hạn</label>
              <div class="form-text">(Ngày / tháng / năm)</div>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-md">
            <div class="form-floating mb-3">
              <select class="form-control" id="month" name="month">
                <option value="">---Chọn---</option>
                <?php for($i = 1; $i <= 12; $i++){ ?>
                <option value="Tháng <?php echo $i ?>">Tháng <?php echo $i ?></option>
                <?php } ?>
              </select>
              <label for="month">Tháng</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-check mb-3">
              <input checked class="form-check-input" type="radio" name="properties" id="properties1" value="1">
              <label class="form-check-label" for="properties1">
                Còn hạn
              </label>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input" type="radio" name="properties" id="properties2" value="0">
              <label class="form-check-label" for="properties2">
                Hết hạn
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="form-group mb-3">
              <label for="note" class="mb-3 fw-bolder">Ghi chú :</label>
              <textarea name="note" class="ckeditor"></textarea>
            </div>
          </div>
        </div>
        <input type="submit" class="btn btn-primary" value="Thêm mới" name="add">
      </form>
    </div>
  </div>
</div>
<?php include 'inc/footer.php';?>