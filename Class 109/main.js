$(document).ready(function() {
    $('.play-btn').magnificPopup({
      type: 'iframe',
      iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
          }
        },
        srcAction: 'iframe_src',
      },
    });
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    items: 1,
    navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
})
  