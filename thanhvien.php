<?php 
  $title = "Danh sách thành viên"; 
  include 'inc/header.php';
  $show_room = $ct -> show_room();
  if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['filter'])) {
    $room = $_POST['room'];
  }
  if(isset($room)){
    $show_user = $ct -> show_user($room);
  }else{
    $show_user = $ct -> show_user($room = '');
  }
  if(isset($_GET['del'])){
    $id = $_GET['del'];
    $del = $ct -> del_user($id);
  }
?>
<div class="card">
  <div class="card-body">
    <h5 class="card-title fw-bolder mb-4"><?php echo $title ?></h5>
    <div class="row">
      <div class="card">
        <div class="row">
          <form action="" method="post">
            <div class="input-group">
              <select class="form-select" name="room">
                <option value="">Chọn...</option>
                <?php while ($resule_room = $show_room -> fetch_assoc()) { ?>
                <option <?php if(isset($room) && $room == $resule_room['name']){echo "selected";}?>
                  value="<?php echo $resule_room['name'] ?>">
                  Phòng <?php echo $resule_room['name'] ?>
                </option>
                <?php } ?>
              </select>
              <button type="submit" name="filter" class="btn btn-outline-secondary" type="button">
                Lọc
              </button>
            </div>
          </form>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover text-nowrap mb-0 align-middle">
              <thead class="text-dark fs-4">
                <tr>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">Avatar</h6>
                  </th>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">Tên</h6>
                  </th>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">MSNV</h6>
                  </th>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">Phòng</h6>
                  </th>
                  <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">Quyền</h6>
                  </td>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">Thao tác</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <?php 
                if($show_user) {
                  $i=0;
                  while($resule_user = $show_user -> fetch_assoc()){
                    $i++;
              ?>
                <tr>
                  <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-0"><img src="<?php 
                  if($resule_user['avatar']){ 
                    echo $resule_user['avatar'] ;
                  }else {
                    echo "./assets/images/profile/user-1.jpg" ;
                    }
                    ?>" alt="" width="35" height="35" class="rounded-circle" /></h6>
                  </td>
                  <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1"><?php echo $resule_user['name'] ?>
                    </h6>
                  </td>
                  <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1"><?php echo $resule_user['code'] ?></h6>
                  </td>
                  <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1">ADM_<?php echo $resule_user['room'] ?></h6>
                  </td>
                  <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1"><?php 
                    $permission = $resule_user['permission'] ;
                    if ($permission == "1"){echo "User" ;}else{echo "Quản trị" ;}
                    ?></h6>
                  </td>
                  <td class="border-bottom-0">
                    <?php if ($quyen == "0"){ ?>
                    <a href="thanhvien.php?del=<?php echo $resule_user['id'] ?>"
                      onclick="return confirm('Bạn có muốn xoá <?php echo $resule_user['name'] ?> không?')"
                      class="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip"
                      data-placement="top" title="Xoá"><i class="ti ti-trash"></i></a>
                    <?php } ?>
                    <?php if ($code == $resule_user['code']){ ?>
                    <a href="thong-tin" class="btn btn-success btn-sm rounded-0 text-white" type="button"
                      data-toggle="tooltip" data-placement="top" title="Sửa"><i class="ti ti-edit"></i></a>
                    <a href="doi-mat-khau" class="btn btn-info btn-sm rounded-0 text-white" type="button"
                      data-toggle="tooltip" data-placement="top" title="Đổi mật khẩu"><i class="ti ti-lock"></i></a>
                    <?php } ?>
                  </td>
                </tr>
                <?php } } ?>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php include 'inc/footer.php';?>