<?php include 'inc/header.php';?>
<?php include 'data/support.php';?>
<?php include 'data/web.php';?>
<div id="index-content">
  <section id="support-top" class="support-top clearfix">
    <div class="container">
      <div id="support">
        <?php foreach($list_support as $item) { ?>
        <div class="items">
          <span class="icon"><svg width="20px" height="20px" version="1.1" id="Layer_1_1_"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">
              <path style="fill: #C30E13;"
                d="M8,0C5.971,0,4.124,0.762,2.714,2.006l2.845,2.845C6.236,4.326,7.076,4,8,4s1.764,0.326,2.441,0.852l2.845-2.845 C11.876,0.762,10.029,0,8,0z">
              </path>
              <path style="fill: #C30E13;"
                d="M5.559,11.148l-2.845,2.845C4.124,15.238,5.971,16,8,16s3.876-0.762,5.286-2.006l-2.845-2.845C9.764,11.674,8.924,12,8,12 S6.236,11.674,5.559,11.148z">
              </path>
              <path style="fill: #C30E13;"
                d="M11.148,5.559C11.674,6.236,12,7.076,12,8c0,0.924-0.326,1.764-0.852,2.441l2.845,2.845C15.238,11.876,16,10.029,16,8 s-0.762-3.876-2.006-5.286L11.148,5.559z">
              </path>
              <path style="fill: #C30E13;"
                d="M4.852,10.441C4.326,9.764,4,8.924,4,8c0-0.924,0.326-1.764,0.852-2.441L2.006,2.714C0.762,4.124,0,5.971,0,8 s0.762,3.876,2.006,5.286L4.852,10.441z">
              </path>
            </svg></span>
          <span class="name"><?php echo $item['name'] ?></span>
          <a title="<?php echo $item['sdt'] ?>" class="cl-red show-hotline">
            <?php echo $item['sdt'] ?>
          </a>
          <a href="tel:<?php echo $item['sdt'] ?>" title="<?php echo $item['sdt'] ?>"
            class="cl-red show-hotline-mobile">
            <?php echo $item['sdt'] ?>
          </a>
        </div>
        <?php } ?>
      </div>
    </div>
  </section>
  <section id="slider">
    <div id="jssor_1"
      style="position:relative;margin:0 auto;top:0px;left:0px;width:1180px;height:400px;overflow:hidden;visibility:hidden;">
      <div data-u="loading" class="jssorl-oval"
        style="position:absolute;top:0px;left:0px;text-align:center;background-color:rgba(0,0,0,0.7);">
        <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;"
          src="https://nina.vn/images/loading.gif" />
      </div>
      <div data-u="slides"
        style="cursor:default;position:relative;top:0px;left:0px;width:1180px;height:400px;overflow:hidden;">
        <div data-b="0">
          <img data-u="image" src="https://nina.vn/upload/hinhanh/817237421747114.webp" alt="" />
        </div>
        <div data-b="0">
          <img data-u="image" src="https://nina.vn/upload/hinhanh/163047535990282.webp" alt="" />
        </div>
        <div data-b="0">
          <img data-u="image" src="https://nina.vn/upload/hinhanh/402937486580287.webp" alt="" />
        </div>
        <div data-b="0">
          <img data-u="image" src="https://nina.vn/upload/hinhanh/643937589601526.webp" alt="" />
        </div>
        <div data-b="0">
          <img data-u="image" src="https://nina.vn/upload/hinhanh/300062775570792.webp" alt="" />
        </div>
        <div data-b="0">
          <img data-u="image" src="https://nina.vn/upload/hinhanh/509836554584295.webp" alt="" />
        </div>
      </div>
      <div data-u="navigator" class="jssorb051" style="position:absolute;bottom:12px;right:12px;" data-autocenter="1"
        data-scale="0.5" data-scale-bottom="0.75">
        <div data-u="prototype" class="i" style="width:16px;height:16px;">
          <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
            <circle class="b" cx="8000" cy="8000" r="5800"></circle>
          </svg>
        </div>
      </div>
      <div data-u="arrowleft" class="jssora051" style="width:55px;height:55px;top:0px;left:25px;" data-autocenter="2"
        data-scale="0.75" data-scale-left="0.75">
        <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
          <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
        </svg>
      </div>
      <div data-u="arrowright" class="jssora051" style="width:55px;height:55px;top:0px;right:25px;" data-autocenter="2"
        data-scale="0.75" data-scale-right="0.75">
        <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
          <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
        </svg>
      </div>
    </div>
  </section>
  <section id="packed-web" class="packed-web clearfix">
    <div class="container">
      <div class="packed-title position-relative section-title">
        <h2>Bảng báo giá thiết kế website trọn gói</h2>
        <p>Mang lại mọi thứ bạn cần cho một website chuyên nghiệp với đầy đủ tính năng</p>
      </div>
    </div>
    <div class="full-package-web">
      <div class="container">
        <ul class="list-package">
          <li class="active hover_sang2" rel="tab-cb">
            Gói cơ bản
          </li>
          <li rel="tab-pt" class="hover_sang2">
            Gói phổ thông
          </li>
          <li rel="tab-nc" class="hover_sang2">
            Gói nâng cao
          </li>
        </ul>
        <div class="content-package active" id="tab-cb">
          <div class="row-package">
            <div class="col-package">
              <div class="wrap-package">
                <h2 class="header-title cl-1">Gói Cơ Bản 01</h2>
                <ul>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Website cơ bản</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Tìm kiếm cơ bản</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Tối ưu link</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Sơ đồ website</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Đăng ký nhận tin</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="checked"></span>
                    <h3>Popup quảng cáo</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="checked"></span>
                    <h3>Google dịch</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="checked"></span>
                    <h3>Đóng dấu hình ảnh</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="checked"></span>
                    <h3>Nút gọi điện, chat zalo/facebook</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="checked"></span>
                    <h3>Mục lục bài viết/Sản phẩm</h3>
                  </li>

                </ul>
                <div class="btn-support cl-1"><a href="#" class="btn-views hvr-float-shadow"
                    data-package="CB01"><span>Liên hệ</span>
                    <span>báo giá</span></a></div>
              </div>
            </div>
            <div class="col-package">
              <div class="wrap-package">
                <h2 class="header-title cl-2">Gói Cơ Bản 02</h2>
                <ul>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Website cơ bản</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Tìm kiếm cơ bản</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Tối ưu link</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Sơ đồ website</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Đăng ký nhận tin</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Popup quảng cáo</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Google dịch</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Đóng dấu hình ảnh</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Nút gọi điện, chat zalo/facebook</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="checked"></span>
                    <h3>Mục lục bài viết/Sản phẩm</h3>
                  </li>

                </ul>
                <div class="btn-support cl-2"><a href="#" class="btn-views hvr-float-shadow"
                    data-package="CB02"><span>Liên hệ</span>
                    <span>báo giá</span></a></div>
              </div>
            </div>
            <div class="col-package">
              <div class="wrap-package">
                <h2 class="header-title cl-3">Gói Cơ Bản 03</h2>
                <ul>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Website cơ bản</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Tìm kiếm cơ bản</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Tối ưu link</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Sơ đồ website</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Đăng ký nhận tin</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Popup quảng cáo</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Google dịch</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Đóng dấu hình ảnh</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Nút gọi điện, chat zalo/facebook</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Mục lục bài viết/Sản phẩm</h3>
                  </li>

                </ul>
                <div class="btn-support cl-3"><a href="#" class="btn-views hvr-float-shadow"
                    data-package="CB03"><span>Liên hệ</span>
                    <span>báo giá</span></a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-package" id="tab-pt">
          <div class="row-package">
            <div class="col-package">
              <div class="wrap-package">
                <h2 class="header-title cl-1">Gói Phổ Thông 01</h2>
                <ul>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Gói cơ bản 03</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Mobile / Responsive</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Chứng chỉ số SSL</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="close"></span>
                    <h3>Thông báo đẩy (Onesignal)</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="close"></span>
                    <h3>Giỏ hàng / Đặt lịch cơ bản</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="close"></span>
                    <h3>Popup quảng cáo</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="close"></span>
                    <h3>Google dịch</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="close"></span>
                    <h3>Song ngữ</h3>
                  </li>
                </ul>
                <div class="btn-support cl-1"><a href="#" class="btn-views hvr-float-shadow"
                    data-package="PT01"><span>Liên hệ</span>
                    <span>báo giá</span></a></div>
              </div>
            </div>
            <div class="col-package">
              <div class="wrap-package">
                <h2 class="header-title cl-2">Gói Phổ Thông 02</h2>
                <ul>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Gói cơ bản 03</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Mobile / Responsive</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Chứng chỉ số SSL</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Thông báo đẩy (Onesignal)</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Giỏ hàng / Đặt lịch cơ bản</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Popup quảng cáo</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Google dịch</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="close"></span>
                    <h3>Song ngữ</h3>
                  </li>
                </ul>
                <div class="btn-support cl-2"><a href="#" class="btn-views hvr-float-shadow"
                    data-package="PT02"><span>Liên hệ</span>
                    <span>báo giá</span></a></div>
              </div>
            </div>
            <div class="col-package">
              <div class="wrap-package">
                <h2 class="header-title cl-3">Gói Phổ Thông 03</h2>
                <ul>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Gói cơ bản 03</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Mobile / Responsive</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Chứng chỉ số SSL</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Thông báo đẩy (Onesignal)</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Giỏ hàng / Đặt lịch cơ bản</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Popup quảng cáo</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Google dịch</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Song ngữ</h3>
                  </li>
                </ul>
                <div class="btn-support cl-3"><a href="#" class="btn-views hvr-float-shadow"
                    data-package="PT03"><span>Liên hệ</span>
                    <span>báo giá</span></a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-package" id="tab-nc">
          <div class="row-package">
            <div class="col-package">
              <div class="wrap-package">
                <h2 class="header-title cl-1">Gói Nâng Cao 01</h2>
                <ul>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Gói phổ thông 01</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Đăng ký đăng nhập</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Tìm kiếm nâng cao</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Phân quyền quản trị</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="close"></span>
                    <h3>Xuất/Nhập file Excel</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="close"></span>
                    <h3>Thanh toán trực tuyến</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/close1.png" alt="close"></span>
                    <h3>Phí vận chuyển</h3>
                  </li>
                </ul>
                <div class="btn-support cl-1"><a href="#" class="btn-views hvr-float-shadow"
                    data-package="PT01"><span>Liên hệ</span>
                    <span>báo giá</span></a></div>
              </div>
            </div>
            <div class="col-package">
              <div class="wrap-package">
                <h2 class="header-title cl-2">Gói Nâng Cao 02</h2>
                <ul>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Gói phổ thông 02</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Đăng ký đăng nhập</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Tìm kiếm nâng cao</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Phân quyền quản trị</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Xuất/Nhập file Excel</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Thanh toán trực tuyến</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Phí vận chuyển</h3>
                  </li>
                </ul>
                <div class="btn-support cl-2"><a href="#" class="btn-views hvr-float-shadow"
                    data-package="PT02"><span>Liên hệ</span>
                    <span>báo giá</span></a></div>
              </div>
            </div>
            <div class="col-package">
              <div class="wrap-package">
                <h2 class="header-title cl-3">Gói Nâng Cao 03</h2>
                <ul>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Gói phổ thông 03</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Đăng ký đăng nhập</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Tìm kiếm nâng cao</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="checked"></span>
                    <h3>Phân quyền quản trị</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Xuất/Nhập file Excel</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Thanh toán trực tuyến</h3>
                  </li>
                  <li><span><img src="https://nina.vn/images/checked1.png" alt="close"></span>
                    <h3>Phí vận chuyển</h3>
                  </li>
                </ul>
                <div class="btn-support cl-3"><a href="#" class="btn-views hvr-float-shadow"
                    data-package="PT03"><span>Liên hệ</span>
                    <span>báo giá</span></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="catagory-top" class="catagory-top clearfix">
    <div class="container">
      <div id="catagory">
        <div class="items showtotop">
          <div class="catagory-img hover_xam">
            <a>
              <img width="300" height="240" src="https://nina.vn/upload/baiviet/thietkeweb510-3216.webp"
                alt="Thiết kế website">
            </a>
          </div>
          <div class="catagory-title">
            <h2>Thiết kế website </h2>
          </div>
          <div class="stroke"></div>
          <div class="catagory-desc">
            <p>Website, đầy đủ tính năng chính của website. Tất cả các tính năng đều có thể quản trị nội dung thông qua
              trang quản trị dễ dàng, bảo mật.</p>
          </div>
        </div>
        <div class="items showtotop delay-02">
          <div class="catagory-img hover_xam">
            <a>
              <img width="300" height="240" src="https://nina.vn/upload/baiviet/webhosting461-4412.webp"
                alt="Web hosting">
            </a>
          </div>
          <div class="catagory-title">
            <h2>
              Web hosting </h2>
          </div>
          <div class="stroke"></div>
          <div class="catagory-desc">
            <p>Là giải pháp cho các cá nhân hoặc doanh nghiệp muốn có một website giới thiệu, giao dịch thương mại trên
              Internet một cách hiệu quả và tiết kiệm chi phí.</p>
          </div>
        </div>
        <div class="items showtotop delay-04">
          <div class="catagory-img hover_xam">
            <a>
              <img width="300" height="240" src="https://nina.vn/upload/baiviet/domain1756-3179.webp" alt="Domain">
            </a>
          </div>
          <div class="catagory-title">
            <h2>
              Domain </h2>
          </div>
          <div class="stroke"></div>
          <div class="catagory-desc">
            <p>Domain hỗ trợ đầy đủ các chức năng thay đổi các record hoàn toàn miễn phí thông qua Controlpanel:A
              Record,MX Record.</p>
          </div>
        </div>
        <div class="items showtotop delay-06">
          <div class="catagory-img hover_xam">
            <a>
              <img width="300" height="240" src="https://nina.vn/upload/baiviet/emailserver4142-2359.webp"
                alt="Email server">
            </a>
          </div>
          <div class="catagory-title">
            <h2>
              Email server </h2>
          </div>
          <div class="stroke"></div>
          <div class="catagory-desc">
            <p>Email Server là giải pháp Mail dành cho các công ty có nhu cầu sử dụng số lượng Mail nhiều để giao dịch
              thương mại đòi hỏi tốc độ nhanh.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
  <section id="design-top" class="design-top clearfix">
    <div class="container">
      <div class="design-title position-relative section-title">
        <h3>QUY TRÌNH THIẾT KẾ WEBSITE TẠI NINA</h3>
      </div>
      <div id="design">
        <div class="items showtoright delay-02">
          <div class="design-desc">
            <div class="design-img step1">
              <a>
                <img width="100" height="100" src="https://nina.vn/upload/baiviet/15436-1083.webp" alt="Giai đoạn 1"
                  class="">
              </a>
            </div>
            <div class="design-htitle">
              <h3>
                Tư vấn và lấy ý tưởng khách hàng xây dựng website </h3>
            </div>
          </div>
        </div>
        <div class="items showtoright">
          <div class="design-desc">
            <div class="design-img step2">
              <a>
                <img width="100" height="100" src="https://nina.vn/upload/baiviet/29564-924.webp" alt="Giai đoạn 2"
                  class="">
              </a>
            </div>
            <div class="design-htitle">
              <h3>
                Demo giao diện website, theo ý tưởng khách hàng cung cấp. </h3>
            </div>
          </div>
        </div>
        <div class="items showtotop">
          <div class="design-desc">
            <div class="design-img step3">
              <a>
                <img width="100" height="100" src="https://nina.vn/upload/baiviet/32373-6718.webp" alt="Giai đoạn 3"
                  class="">
              </a>
            </div>
            <div class="design-htitle">
              <h3>
                Khách hàng duyệt bản demo theo bảng thiết kế của NINA. </h3>
            </div>
          </div>
        </div>
        <div class="items showtoleft">
          <div class="design-desc">
            <div class="design-img step4">
              <a>
                <img width="100" height="100" src="https://nina.vn/upload/baiviet/42145-2365.webp" alt="Giai đoạn 4"
                  class="">
              </a>
            </div>
            <div class="design-htitle">
              <h3>
                NINA tiến hành xây dựng module và hoàn thiện website. </h3>
            </div>
          </div>
        </div>
        <div class="items showtoleft delay-02">
          <div class="design-desc">
            <div class="design-img step5">
              <a>
                <img width="100" height="100" src="https://nina.vn/upload/baiviet/54259-6863.webp" alt="Giai đoạn 5"
                  class="">
              </a>
            </div>
            <div class="design-htitle">
              <h3>
                Nghiệm thu, thanh lý hợp đồng bàn giao website. </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="project-top" class="project-top clearfix">
    <div class="container">
      <div class="project-title position-relative section-title">
        <h3>KHÁCH HÀNG THIẾT KẾ WEBSITE TẠI NINA</h3>
        <p>
          Khách hàng thiết kế website tại Nina Co., Ltd.vinh dự được tham gia đóng góp vào tiến trình phát triển Công
          Nghệ Thông Tin của quý Cơ quan, quý doanh nghiệp.
        </p>
      </div>
      <div id="project">
        <?php foreach($list_web as $web) { ?>
        <div class="items animate__animated animate__zoomIn">
          <div class="project-desc">
            <div class="project-img hover_sang2">
              <img src="<?php echo $web['link'] ?>" alt="<?php echo $web['name'] ?>" title="<?php echo $web['name'] ?>">
            </div>
            <div class="project-htitle">
              <h3><?php echo $web['name'] ?></h3>
            </div>
          </div>
        </div>
        <?php } ?>
      </div>
      <div class="t-center">
        <a class="b-button-5 cursor-pointer" id="load-page">
          <div>Tải thêm mẫu website khác</div>
        </a>
      </div>
    </div>
  </section>
</div>
<?php include 'inc/footer.php';?>