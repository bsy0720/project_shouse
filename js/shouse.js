// top버튼
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $(".top").fadeIn();
        }else{
            $(".top").fadeOut();
        }
    });
    $(".top").click(function(){
        $("html,body").animate({scrollTop:0},400);
        return false;
    });
});


//헤더 슬라이드
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function custom(swiper, current, total) {
            return `${current}ㆍ${total}`;
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


