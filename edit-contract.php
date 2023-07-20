<?php 
  $title = "Chỉnh sửa"; 
  include 'inc/header.php';
?>
<?php	
  if(isset($_GET['id']) && $_GET['id']!=NULL){
    $id = $_GET['id'];
  }
  $get_id = $ct -> get_id($id,$code);
  if($get_id){
    $result = $get_id -> fetch_assoc();
  }
	if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit'])) {
    $update = $ct -> update($_POST,$_FILES,$code,$id);
  }
?>
<div class="card">
  <div class="card-body">
    <h5 class="card-title fw-bolder mb-4 font-monospace"><?php echo $title." hợp đồng ".$result['nameKh'] ?></h5>
    <div class="card">
      <form method="post" action="">
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" name="nameNv" placeholder=" "
                value="<?php echo $result['nameNv'] ; ?>">
              <label for="nameNv">Tên nhân viên phụ trách</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input class="form-control" type="text" name="msnv" placeholder=" "
                value="<?php echo $result['msnv'] ; ?>">
              <label for="msnv">Mã số NV</label>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-3">
              <input value="<?php echo $result['nameKh'] ; ?>" type="text" class="form-control" name="nameKh"
                placeholder=" ">
              <label for="nameKh">Tên khách hàng</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input value="<?php echo $result['mshd'] ; ?>" class="form-control" type="text" name="mshd"
                placeholder=" ">
              <label for="mshd">Mã số HD</label>
            </div>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-md">
            <div class="form-floating mb-3">
              <input value="<?php echo $result['email'] ; ?>" type="text" class="form-control" name="email"
                placeholder=" ">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input value="<?php echo $result['phone'] ; ?>" class="form-control" type="text" name="phone"
                placeholder=" ">
              <label for="phone">Số điện thoại</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input value="<?php echo $result['domain'] ; ?>" class="form-control" type="text" name="domain"
                placeholder=" ">
              <label for="domain">Tên miền</label>
            </div>
          </div>
        </div>
        <div class="row g-1">
          <div class="col-md">
            <div class="form-floating mb-3">
              <input value="<?php echo $result['address'] ; ?>" class="form-control" type="text" name="address"
                placeholder=" ">
              <label for="address">Địa chỉ</label>
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-md">
            <div class="form-floating mb-3">
              <input value="<?php echo $result['giaWeb'] ; ?>" type="text" class="form-control" name="giaWeb"
                placeholder=" ">
              <label for="giaWeb">Giá web</label>
              <div class="form-text">(triệu đồng)</div>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input value="<?php echo $result['giaHost'] ; ?>" class="form-control" type="text" name="giaHost"
                placeholder=" ">
              <label for="giaHost">Giá host</label>
              <div class="form-text">(triệu đồng)</div>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input value="<?php echo $result['ngayKy'] ; ?>" class="form-control" type="text" name="ngayKy"
                placeholder=" ">
              <label for="ngayKy">Ngày ký</label>
              <div class="form-text">(Ngày / tháng / năm)</div>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating mb-3">
              <input value="<?php echo $result['ngayHet'] ; ?>" class="form-control" type="text" name="ngayHet"
                placeholder=" ">
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
                <option <?php if($result['month'] == "Tháng $i"){ echo "selected" ; } ?> value="Tháng <?php echo $i ?>">
                  Tháng <?php echo $i ?>
                </option>
                <?php } ?>
              </select>
              <label for="month">Tháng</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-check mb-3">
              <input <?php if($result['properties'] == "1"){ echo "checked" ;} ?> class="form-check-input" type="radio"
                name="properties" id="properties1" value="1">
              <label class="form-check-label" for="properties1">
                Còn hạn
              </label>
            </div>
            <div class="form-check mb-3">
              <input <?php if($result['properties'] == "0"){ echo "checked" ;} ?> class="form-check-input" type="radio"
                name="properties" id="properties2" value="0">
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
              <textarea name="note" class="ckeditor"><?php echo $result['note'] ; ?></textarea>
            </div>
          </div>
        </div>
        <input type="submit" class="btn btn-primary" value="Cập nhật" name="edit">
      </form>
    </div>
  </div>
</div>
<?php include 'inc/footer.php';?>