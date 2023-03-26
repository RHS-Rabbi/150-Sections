$(document).ready(function() {


    $(".project-filter li").on('click', function(){

        $

        var selector = $(this).attr("data-filter");
        $(".project-list").isotope({
            filter: selector,
        });
        
    });
   
    $(".project-list").isotope();


});



