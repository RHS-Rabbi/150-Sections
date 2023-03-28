$(document).ready(function () {
    $('.project-list').isotope({
        itemSelector: '.item-1',
        layoutMode: 'fitRows'
    });
    })

    $('.project-filter ul li').click(function () {
    //ACTIVE CLASS
    $('.project-filter ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.project-list').isotope({
    filter: selector
    });
    return false;
})

