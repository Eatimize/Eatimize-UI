function parallax() {
  var mat1 = document.getElementById('mat1');
  mat1.style.top = -(window.pageYOffset / 2) + 'px';
}
window.addEventListener("scroll", parallax, false);

    function parallax2() {
  var mat2 = document.getElementById('mat2');
  mat2.style.top = -(window.pageYOffset / 7) + 'px';
}
window.addEventListener("scroll", parallax2, false);


     function parallax3() {
  var mat3 = document.getElementById('mat3');
  mat3.style.top = -(window.pageYOffset / 3) + 'px';
}
window.addEventListener("scroll", parallax3, false);
