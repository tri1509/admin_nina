<?php 
  $title = "Thông tin hợp đồng"; 
  include 'inc/header.php';

  if(isset($_GET['view']) && $_GET['view']!=NULL){
    $view = $_GET['view'];
  }
  $get_id = $ct -> get_id_view($view);
  if($get_id){
    $result = $get_id -> fetch_assoc();
  }
?>
<div class="container-fluid">
  <div class="row">
    <div class="col-lg-4 d-flex align-items-stretch">
      <div class="card w-100">
        <div class="card-body p-4 w-50">
          <div class="mb-4">
            <h5 class="card-title fw-semibold"><?php echo $title." ".$result['nameKh'] ?></h5>
          </div>
          <table class="table table-hover text-nowrap mb-0 align-middle">
            <thead class="text-dark fs-4">
              <tr>
                <th class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">#</h6>
                </th>
                <th class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Thông tin</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Tên hợp đồng / tên khách hàng</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal copy"><?php echo $result['nameKh'] ?></p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Mã số hợp đồng</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal copy"><?php echo $result['mshd'] ?></p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Tên nhân viên</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal copy"><?php echo $result['nameNv'] ?></p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Mã số nhân viên</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal copy"><?php echo $result['msnv'] ?></p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Email</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal copy"><?php echo $result['email'] ?></p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Số điện thoại</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal copy"><?php echo $result['phone'] ?></p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Tên miền</h6>
                </td>
                <td class="border-bottom-0">
                  <a href="<?php echo $result['domain'] ?>" class="mb-0 fw-normal copy"
                    target="_blank"><?php echo $result['domain'] ?></a>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Địa chỉ</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal copy"><?php echo $result['address'] ?></p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Giá web</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal"><?php echo $result['giaWeb'] ?>.tr</p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Giá host</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal"><?php echo $result['giaHost'] ?>.tr</p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Ngày ký</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal"><?php echo $result['ngayKy'] ?></p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Ngày hết hạn</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal"><?php echo $result['ngayHet'] ?></p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Thông số (Tháng hết hạn)</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal"><?php echo $result['month'] ?></p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Thời hạn</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal">
                    <?php $properties = $result['properties']; if($properties === "0") { ?>
                    <span class="badge bg-danger rounded-3 fw-semibold">Hết</span>
                    <?php }else{ ?>
                    <span class="badge bg-success rounded-3 fw-semibold">Còn</span>
                    <?php } ?>
                  </p>
                </td>
              </tr>
              <tr>
                <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-0">Ghi chú</h6>
                </td>
                <td class="border-bottom-0">
                  <p class="mb-0 fw-normal"><?php echo $result['note'] ?></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<?php include 'inc/footer.php';?>