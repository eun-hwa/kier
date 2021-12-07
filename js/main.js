$(function () {
  const swiper = new Swiper("#container .visual-slide", {});

  const head = document.querySelector("header");

  $("header .main-menu .nav-item").mouseover(function() {
    head.style.backgroundColor = '#08347f';
    head.classList.add('active');
  }); //메뉴에 마우스 오버되면 헤더 배경색상 변경

  $("header .main-menu .nav-item").mouseout(function() {
    head.style.backgroundColor = 'transparent';
    head.classList.remove('active');
  }); //메뉴에 마우스 아웃되면 헤더 배경색상 변경


});
