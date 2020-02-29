// event pada saat link di klik
$('.page-scroll').on('click', function(e) {
    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elementTujuan = $(tujuan);
    
    // pindahkan scroll
    $('#home').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');
    

    e.preventDefault();
});  


// parallax
// about
$(window).on('load', function() {
    $('.left').addClass('pView')
    $('.right').addClass('pView')
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    })

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    })

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    })

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('view')
            }, 200 * i)
        });
    }
});