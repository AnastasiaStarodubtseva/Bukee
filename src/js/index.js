import "./import/modules";

let headerList = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
  headerList.classList.toggle('active');
});

