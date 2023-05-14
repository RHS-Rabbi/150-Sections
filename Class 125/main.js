$(document).ready(function () {
  $('.portfolio-list').masonry({

  });
  
  // const element = document.querySelector('.single-portfolio-item h2');
  // element.classList.add('animate__animated', 'animate__bounce');

  // $(".single-portfolio-item").hover(function () {
    
  //   $(".single-portfolio-item .portfolio-hover h2").removeClass(".animate___slideInDown")
  //   $(this).find(".portfolio-hover h2").addClass(".animate___bounce")
  
  //   });


  $(".single-portfolio-item h2").hover(
    function () {
      $(this).addClass("animate__bounceIn");
    },
    function () {
      $(this).removeClass("animate__bounceIn");
    }
  );



  $(".menu-trigger").on('click', function(){
    $(".offcanvas-menu").addClass("active");
    $(".off-menu-canvas-overlay").addClass("active");
  });
  $(".menu-close i.fa").on('click', function(){
    $(".offcanvas-menu").removeClass("active");
    $(".off-menu-canvas-overlay").removeClass("active");
  });



});






  
  
  
  
  
  
  
  
  