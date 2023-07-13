<?php 
  $title = "Danh sách phòng"; 
  include 'inc/header.php';

  $show_room = $ct -> show_room();

  if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_room'])) {
    $name_ADM = $_POST['name_ADM'];
    $add_room = $ct -> add_room($name_ADM);
  }

  if(isset($add_room)){echo $add_room;}

  if(isset($_GET['del'])){
    $id = $_GET['del'];
    $del_adm = $ct ->del_adm($id);
  }

?>
<div class="card">
  <div class="card-body">
    <h5 class="card-title fw-bolder mb-4"><?php echo $title ?></h5>
    <div class="row">
      <div class="card col-md-6">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover text-nowrap mb-0 align-middle">
              <thead class="text-dark fs-4">
                <tr>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">STT</h6>
                  </th>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">Tên ADM</h6>
                  </th>
                  <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">Thao tác</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                <?php 
                if($show_room){
                  $i=0;
                  while ($resule_room = $show_room -> fetch_assoc()) {
                    $i++;
              ?>
                <tr>
                  <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-0"><?php echo $i ?></h6>
                  </td>
                  <td class="border-bottom-0">
                    <h6 class="fw-semibold mb-1"><?php echo $resule_room['name'] ?></h6>
                  </td>
                  <td class="border-bottom-0">
                    <a href="chinh-sua-phong/<?php echo $resule_room['id'] ?>"
                      class="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip"
                      data-placement="top" title="Sửa"><i class="ti ti-edit"></i></a>
                    <a href="phong.php?del=<?php echo $resule_room['id'] ?>"
                      onclick="return confirm('Bạn có muốn xoá <?php echo $resule_room['name'] ?> không?')"
                      class="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip"
                      data-placement="top" title="Xoá"><i class="ti ti-trash"></i></a>
                  </td>
                </tr>
                <?php } } ?>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p>
        <a class="btn btn-secondary btn-sm" data-bs-toggle="collapse" href="#themadm" role="button"
          aria-expanded="false" aria-controls="themadm">
          Thêm ADM
        </a>
      </p>
      <div class="collapse" id="themadm">
        <div class="card card-body col-md-4">
          <form action="danh-sach-phong" method="post">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" name="name_ADM" placeholder=" " required>
              <label for="">Tên ADM</label>
            </div>
            <input type="submit" class="btn btn-dark btn-sm" value="Thêm" name="add_room">
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<?php include 'inc/footer.php';?>