<div class="py-6 px-6 text-center">
  <p class="mb-0 fs-4">Design and Developed by <a href="https://tri1509.github.io/trinina/" target="_blank"
      class="pe-1 text-primary text-decoration-underline">Trí Nina</a>
</div>
</div>
</div>
</div>
<div title="Về đầu trang" id="top-up">
  <img src="./assets/images/backgrounds/rocket.png" alt="" width="50" style="transform: rotate(-58deg);">
</div>
<script>
let items = document.querySelectorAll('.items');
document.addEventListener('scroll', (event) => {
  items.forEach(item => {
    if (item.offsetTop - window.scrollY < 550) {
      item.classList.add('active');
    }
  })
})
</script>
<script src="https://cdn.ckeditor.com/4.21.0/full-all/ckeditor.js"></script>
<script src="./assets/libs/jquery/dist/jquery.min.js"></script>
<script src="./assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="./assets/js/sidebarmenu.js"></script>
<script src="./assets/js/app.min.js"></script>
<script src="./assets/js/cursor.js"></script>
<script src="./assets/libs/apexcharts/dist/apexcharts.min.js"></script>
<script src="./assets/libs/simplebar/dist/simplebar.js"></script>
<script src="./assets/js/dashboard.js"></script>
<script src="./assets/js/jquery_dataTables.js"></script>
<script src="./assets/js/dataTables_bootstrap5.js"></script>
<script src="./assets/js/slider.js"></script>
</body>

</html>