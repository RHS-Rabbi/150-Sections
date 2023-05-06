$(document).ready(function () {
    $('.portfolio-list').isotope({
        itemSelector: '.item-1',
    });
    })
  
    $('.project-filter ul li').click(function () {
    //ACTIVE CLASS
    $('.project-filter ul li').removeClass('active');
    $(this).addClass('active');
  
    var selector = $(this).attr('data-filter');
    $('.portfolio-list').isotope({
    filter: selector
    });
    return false;
  
  })
  $('.portfolio-list').masonry({
    horizontalOrder: true
  });
  
  // project-filter ul li
  
  
  
  
  
  
  