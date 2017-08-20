$(function () {
    var viewportWidth = $(window).width();

    if(viewportWidth <= 720){
        contentResize();
    }

    function contentResize(){
        var wavePos = $('.wc-wave').offset();
        var landPos = wavePos.top+$('.wc-wave').height();

        $('.land-container').css('height',landPos-15+'px');
        $('.lc-sky').css('height',landPos+'px');
    }
});
