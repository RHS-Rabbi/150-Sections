    $('#web-progressbar').circleProgress({
    value: 0.8,
    size: 200,
    thickness:2,
    fill:'#0dbcc2',
    emptyFill:'#fff'
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('.progressbar-parcentage').html(Math.round(90 * progress) + '<i>%</i>');
    });;

    $('#graphic-progressbar').circleProgress({
        value: 0.9,
        size: 200,
        thickness:2,
        fill:'#0dbcc2',
        emptyFill:'#fff'
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progressbar-parcentage').html(Math.round(95 * progress) + '<i>%</i>');
        });;

    $('#digital-progressbar').circleProgress({
            value: 0.7,
            size: 200,
            thickness:2,
            fill:'#0dbcc2',
            emptyFill:'#fff'
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.progressbar-parcentage').html(Math.round(84 * progress) + '<i>%</i>');
            });;