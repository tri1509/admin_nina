<?php 
  $title = "Danh sách hợp đồng"; 
  include 'inc/header.php';		
  $show = $ct -> show($code);
  if(isset($_GET['del'])){
    $id = $_GET['del'];
    $del = $ct ->del($id,$code);
  }
?>
<div class="row">
  <div class="col-lg-12 d-flex align-items-stretch">
    <div class="card w-100">
      <div class="card-body p-4">
        <h5 class="card-title fw-bolder mb-4"><?php echo $title ?></h5>
        <div class="table-responsive">
          <table class="table table-hover text-nowrap mb-0 align-middle" id="table-admin">
            <thead class="text-dark fs-4">
              <tr>
                <th class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">STT</h6>
                </th>
                <th class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Tên HD</h6>
                </th>
                <th class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Tên NV</h6>
                </th>
                <th class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">SDT</h6>
                </th>
                <th class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Tên miền</h6>
                </th>
                <th class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Thời hạn</h6>
                </th>
                <th class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Tháng</h6>
                </th>
                <th class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Thao tác</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <?php 
                if($show){
                  $i=0;
                  while($resule = $show -> fetch_assoc()){
                    $i++;
              ?>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0"><?php echo $i ?></h6>
                </td>
                <td class="border-bottom-0">
                  <?php if ($code == $resule['code']) { ?>
                  <a href="chinh-sua-hop-dong/<?php echo $resule['id'] ?>" class="fw-semibold mb-1">
                    <?php echo $resule['nameKh'] ?>
                  </a>
                  <?php }else{ ?>
                  <a href="xem-hop-dong/<?php echo $resule['id'] ?>" class="fw-semibold mb-1">
                    <?php echo $resule['nameKh'] ?>
                  </a>
                  <?php } ?>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal copy"><?php echo $resule['nameNv'] ?></p>
                </td>
                <td class="border-bottom-0">
                  <div class="d-flex align-items-center gap-2">
                    <span class="badge bg-primary rounded-3 fw-semibold copy">
                      <?php echo $resule['phone'] ?>
                    </span>
                  </div>
                </td>
                <td class="border-bottom-0">
                  <a href="<?php echo $resule['domain'] ?>" target="_blank">
                    <?php echo $resule['domain'] ?>
                  </a>
                </td>
                <td class="border-bottom-0">
                  <?php 
                    $properties = $resule['properties'];
                    if($properties === "0") {
                  ?>

                  <span class="badge bg-danger rounded-3 fw-semibold">
                    Hết
                  </span>

                  <?php }else{ ?>

                  <span class="badge bg-success rounded-3 fw-semibold">
                    Còn
                  </span>

                  <?php } ?>
                </td>
                <td class="border-bottom-0">
                  <?php echo $resule['month'] ?>
                </td>
                <td class="border-bottom-0">
                  <?php if ($code == $resule['code']) { ?>
                  <a href="chinh-sua-hop-dong/<?php echo $resule['id'] ?>"
                    class="btn btn-success btn-sm rounded-0 text-white" type="button" data-toggle="tooltip"
                    data-placement="top" title="Sửa"><i class="ti ti-edit"></i></a>
                  <a href="list-contract.php?del=<?php echo $resule['id'] ?>"
                    onclick="return confirm('Bạn có muốn xoá <?php echo $resule['nameKh'] ?> không?')"
                    class="btn btn-danger btn-sm rounded-0 text-white" type="button" data-toggle="tooltip"
                    data-placement="top" title="Xoá"><i class="ti ti-trash"></i></a>
                  <?php }else{ ?>
                  <a href="xem-hop-dong/<?php echo $resule['id'] ?>" class="btn btn-indigo btn-sm rounded-0 text-white"
                    type="button" data-toggle="tooltip" data-placement="top" title="Xem"><i class="ti ti-eye"></i></a>
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
<?php include 'inc/footer.php';?>