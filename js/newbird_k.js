$(function() {
    // 헤더
    $('#kwqHdr .kwqHdrInr .kwqHdrInfo .kwqHdrNav > ul > li').on('mouseenter', function() {
        if( $(this).children('.kwqTwoDth').length > 0 ){
            $('#kwqHdr .kwqHdrInr .kwqHdrInfo .kwqHdrNav').addClass('on');
            $(this).addClass('on');
        } else {
            $('#kwqHdr .kwqHdrInr .kwqHdrInfo .kwqHdrNav').removeClass('on');
            $(this).removeClass('on');
        }
    });
    $('#kwqHdr .kwqHdrInr .kwqHdrInfo .kwqHdrNav > ul > li').on('mouseleave', function() {
        if( $(this).children('.kwqTwoDth').length > 0 ){
            $('#kwqHdr .kwqHdrInr .kwqHdrInfo .kwqHdrNav').removeClass('on');
            $(this).removeClass('on');
        } else {
        }
    });


    var wndOtW = $(window).outerWidth();
    var wndOtH = $(window).outerHeight();
    var wndScrTp = $(window).scrollTop();
    $(window).on('scroll', function() {
        wndScrTp = $(window).scrollTop();
        wndOtW = $(window).outerWidth();
        wndOtH = $(window).outerHeight();

        if(wndScrTp > 120){
            $('.kwqBrdNav').addClass('on');
        } else {
            $('.kwqBrdNav').removeClass('on');
        }
        if(wndScrTp >= $('.kwqIspTtl').offset().top){
            $('#kwqIsprSct01 .kwqIspBg').css({
                'position' : 'fixed'
            });
        } else {
            $('#kwqIsprSct01 .kwqIspBg').removeAttr('style');
        }
        if(wndScrTp >= $('#kwqDnaSct').offset().top){
            $('#kwqIsprSct01 .kwqIspBg').removeAttr('style');
        }

        if(wndScrTp + wndOtH >= $('#kwqDnaSct .kwqMvmtInr').offset().top && wndScrTp + wndOtH * 0.8 <= ( $('#kwqDnaSct .kwqMvmtInr').offset().top + $('#kwqDnaSct .kwqMvmtInr').outerHeight()) ){
            var ImgPrc = ( (wndScrTp + wndOtH - $('#kwqDnaSct').offset().top ) / $('#kwqDnaSct').outerHeight()  );
            $('#kwqDnaSct .kwqMvmtInr .kwqImg > img').css({
                'transform' : 'translateY(' + ImgPrc * 50 + 'px)'
            });
        }

        if(wndScrTp >= $('#kwqIdsSct').offset().top && (wndScrTp + wndOtH) <= ($('#kwqIdsSct').offset().top + $('#kwqIdsSct').outerHeight())){
            $('#kwqIdsSct .kwqIdsBg').css({
                'position': 'fixed',
            });
        } else if((wndScrTp + wndOtH) >= ($('#kwqIdsSct').offset().top + $('#kwqIdsSct').outerHeight())) {
            $('#kwqIdsSct .kwqIdsBg').css({
                'position': 'absolute',
                'top': 'auto',
                'bottom': '0',
            });
        } else {
            $('#kwqIdsSct .kwqIdsBg').removeAttr('style');
        }

        if(wndScrTp >= $('#kwqUdrstdSct').offset().top - wndOtH){
            // var UdrstdImgPrc = 
            $('#kwqUdrstdSct .kwqImgBx > img').css({
                'transform' : 'translateY(' + -((wndScrTp + (wndOtH * 1.1) - $('#kwqUdrstdSct').offset().top) / $('#kwqUdrstdSct').outerHeight()) * 100 + 'px)',
            });
        }

        if( wndScrTp >= $('#kwqIsprSct02').offset().top && wndScrTp + wndOtH - $('#kwqIsprSct02').offset().top <= $('#kwqIsprSct02').outerHeight()){
            $('#kwqIsprSct02.kwqIsprSct .kwqIspBg').css('position', 'fixed');
            $('#kwqIsprSct02 .kwqIsprBg').css('position', 'fixed');
        } else if(wndScrTp + wndOtH - $('#kwqIsprSct02').offset().top >= $('#kwqIsprSct02').outerHeight()){
            $('#kwqIsprSct02.kwqIsprSct .kwqIspBg').css({
                'position': 'absolute',
                'top': 'auto',
                'bottom': '0',
            });
            $('#kwqIsprSct02 .kwqIsprBg').css({
                'position': 'absolute',
                'top': 'auto',
                'bottom': '0',
            });
        } else {
            $('#kwqIsprSct02.kwqIsprSct .kwqIspBg').removeAttr('style');
            $('#kwqIsprSct02 .kwqIsprBg').removeAttr('style');
        }

        if(wndScrTp >= $('#kwqIsprSct02.kwqIsprSct .kwqIspInfo').offset().top){
            $('#kwqIsprSct02.kwqIsprSct .kwqIspInfo .kwqIspTxtBx').css({
                'opacity' : (1 -( (wndScrTp - $('#kwqIsprSct02.kwqIsprSct .kwqIspInfo').offset().top) / ($('#kwqIsprSct02.kwqIsprSct .kwqIspInfo').outerHeight() - ($('#kwqIsprSct02.kwqIsprSct .kwqIspInfo .kwqIspTxtBx').outerHeight() * 1.5))))
            });
        }

        if(wndScrTp >= $('.kwqMdSt').offset().top - wndOtH && wndScrTp + wndOtH - $('.kwqMdSt').offset().top <= $('.kwqMdSt').outerHeight() ){
            $('.kwqMdSt .kwqMvmtInr .kwqMdsImg > img').css({
                'transform' : 'translateY(' + ((wndScrTp + wndOtH - $('.kwqMdSt').offset().top) / ($('.kwqMdSt').outerHeight())) * 12 + '%)',
            });
            $('#kwqIsprSct02 .kwqIsprBg').css({
                'background-color' : 'rgba(246, 242, 237, ' + ((wndScrTp + wndOtH - $('.kwqMdSt').offset().top) / ($('.kwqMdSt').outerHeight()) - 0.15) + ')'
            });
        }
        if( wndScrTp + wndOtH - $('.kwqMdSt').offset().top >= $('.kwqMdSt').outerHeight()){
            $('#kwqIsprSct02 .kwqIsprBg').css({
                'background-color' : 'rgba(246, 242, 237, 0.85)'
            });
        }
        
    });

    $(window).resize(function() {
        wndScrTp = $(window).scrollTop();
        wndOtW = $(window).outerWidth();
        wndOtH = $(window).outerHeight();
    });

    
});