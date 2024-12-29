/* aos */
AOS.init({
    duration: 1200
  })

/* nav */
$(document).ready(function(){
    
    $('.gnb>li').mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    
    $('.gnb>li').mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });
    
});

/* nav scroll */
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('#header').addClass('active');
    }else{
        $('#header').removeClass('active');
    }
});
