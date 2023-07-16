<div class="py-6 px-6 text-center">
  <p class="mb-0 fs-4">Design and Developed by <a href="https://tri1509.github.io/trinina/" target="_blank"
      class="pe-1 text-primary text-decoration-underline">Trí Nina</a>
</div>
</div>
</div>
</div>
<div title="Về đầu trang" id="top-up">
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-circle-fill"
    viewBox="0 0 16 16">
    <path
      d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
  </svg>
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
<script src="./assets/libs/apexcharts/dist/apexcharts.min.js"></script>
<script src="./assets/libs/simplebar/dist/simplebar.js"></script>
<script src="./assets/js/dashboard.js"></script>
<script src="./assets/js/jquery_dataTables.js"></script>
<script src="./assets/js/dataTables_bootstrap5.js"></script>
<script src="./assets/js/slider.js"></script>
</body>

</html>