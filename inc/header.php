<?php
  include './lib/session.php';
  Session::checkSession();
  if (isset($_GET['action']) && $_GET['action'] == 'logout') {
    Session::destroy();
  }            
  $name = Session::get('adminName');
  $code = Session::get('adminCode');
  if (empty($title)){
    $title = "Trang chủ";
  }
  ob_start();
  require_once 'lib/database.php';
  require_once 'helpers/format.php';
  require './classes/controller.php';
  $fm = new Format();
  $db = new Database();
	$ct = new contract();
  $get_info = $ct -> get_info($code);
  if($get_info){
    $resule_info = $get_info -> fetch_assoc();
    $avatar = $resule_info['avatar'];
    $code_info_id = $resule_info['id'];
    $quyen = $resule_info['permission'];
  }
?>
<!DOCTYPE html>
<html lang="vi">

<head>
  <base href="<?php echo $config['base'] ?>">
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title><?php echo $title ?></title>
  <link rel="shortcut icon" type="image/png" href="https://nina.vn/favicon.ico" />
  <link rel="stylesheet" href="./assets/css/dataTables.css">
  <link rel="stylesheet" href="./assets/css/styles.css" />
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>
  <!--  Body Wrapper -->
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <!-- Sidebar Start -->
    <aside class="left-sidebar">
      <!-- Sidebar scroll-->
      <div>
        <div class="brand-logo d-flex align-items-center justify-content-between">
          <a href="./" class="text-nowrap logo-img">
            <img id="logo" src="https://nina.vn/upload/hinhanh/logothietkewebnina-3831.webp" width="150" alt="" />
          </a>
          <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i class="ti ti-x fs-8"></i>
          </div>
        </div>
        <!-- Sidebar navigation-->
        <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">Home</span>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="them-hop-dong" aria-expanded="false">
                <span>
                  <i class="ti ti-new-section"></i>
                </span>
                <span class="hide-menu">Thêm mới</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="danh-sach-hop-dong" aria-expanded="false">
                <span>
                  <i class="ti ti-clipboard-list"></i>
                </span>
                <span class="hide-menu">Danh sách</span>
              </a>
            </li>

            <li class="nav-small-cap">
              <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span class="hide-menu">User</span>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="thong-tin" aria-expanded="false">
                <span>
                  <i class="ti ti-user"></i>
                </span>
                <span class="hide-menu">Thông tin</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="them-nguoi" aria-expanded="false">
                <span>
                  <i class="ti ti-user-plus"></i>
                </span>
                <span class="hide-menu">Thêm người</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="danh-sach-phong" aria-expanded="false">
                <span>
                  <i class="ti ti-users"></i>
                </span>
                <span class="hide-menu">Phòng</span>
              </a>
            </li>
            <li class="sidebar-item">
              <a class="sidebar-link" href="danh-sach-thanh-vien" aria-expanded="false">
                <span>
                  <i class="ti ti-list"></i>
                </span>
                <span class="hide-menu">Thành viên</span>
              </a>
            </li>
          </ul>
        </nav>
        <!-- End Sidebar navigation -->
      </div>
      <!-- End Sidebar scroll-->
    </aside>
    <!--  Sidebar End -->
    <!--  Main wrapper -->
    <div class="body-wrapper">
      <!--  Header Start -->
      <header class="app-header Regular shadow">
        <nav class="navbar navbar-expand-lg navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item d-block d-xl-none">
              <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i class="ti ti-menu-2"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-icon-hover" href="javascript:void(0)">
                <i class="ti ti-bell-ringing"></i>
                <div class="notification bg-primary rounded-circle"></div>
              </a>
            </li>
          </ul>
          <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <span class="btn btn-primary"><?php echo $name." - ".$code ; ?></span>
              <li class="nav-item dropdown">
                <a class="nav-link nav-icon-hover btn-frame" href="javascript:void(0)" id="drop2"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="<?php 
                  if($avatar){ 
                    echo $avatar ;
                  }else {
                    echo "./assets/images/profile/user-1.jpg" ;
                    }
                    ?>" alt="" width="35" height="35" class="rounded-circle" />
                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                  <div class="message-body">
                    <a href="them-hop-dong" class="d-flex align-items-center gap-2 dropdown-item">
                      <i class="ti ti-new-section"></i>
                      <p class="mb-0 fs-3">Thêm mới</p>
                    </a>
                    <a href="danh-sach-hop-dong" class="d-flex align-items-center gap-2 dropdown-item">
                      <i class="ti ti-layout-list"></i>
                      <p class="mb-0 fs-3">Danh sách</p>
                    </a>
                    <a href="?action=logout" class="btn btn-outline-primary mx-3 mt-2 d-block">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div class="container-fluid">