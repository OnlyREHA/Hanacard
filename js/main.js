//ev_slider


let ev_slider = $('.ev_slider_list')

ev_slider.slick({
  autoplay: true,
  dots: true,
  arrows: false,
  pauseOnHover: false,
  fade: true,
});



// #정지재생버튼

//javascript
//선택자.addEventListerner('click',function(){})
//선택자.onclick(function(){})

$('.ev_slider .page_act .btn_stop').click(function (e) {
  e.preventDefault();
  if ($('.ev_slider .page_act').hasClass('on')) { //on이라는 클래스를 가지고 있으면 true, 없다면 false
    $('.ev_slider .page_act').removeClass('on');
    ev_slider.slick('slickPause');



  }
})

$('.ev_slider .page_act .btn_play').click(function (e) {
  e.preventDefault();
  if (!$('.ev_slider .page_act').hasClass('on')) {
    $('.ev_slider .page_act').addClass('on');
    ev_slider.slick('slickPlay');


  }
})

// event_box3영역

$('.card').slick({
  autoplay: true,
  dots: true,
  arrows: false,
  pauseOnHover: false,
  fade: true,

});


$('.ev_slider2 .page_act .btn_stop').click(function (e) {
  e.preventDefault();
  if ($('.ev_slider2 .page_act').hasClass('on')) { //on이라는 클래스를 가지고 있으면 true, 없다면 false
    $('.ev_slider2 .page_act').removeClass('on');
    $('.card').slick('slickPause');



  }
})

$('.ev_slider2 .page_act .btn_play').click(function (e) {
  e.preventDefault();
  if (!$('.ev_slider2 .page_act').hasClass('on')) {
    $('.ev_slider2 .page_act').addClass('on');
    $('.card').slick('slickPlay');


  }
})

//cont2 영역 - life버튼
let tab=$('#life .life_menu ul li');
let menu=$('#life .life_style ul li');

tab.mouseover(function(){
  let target = $(this);
  let index = target.index();
  console.log(index)
  menu.css({opacity:0})
  menu.eq(index).css({opacity:1})

  //eq() 동등한, tab에 index번호와 연결
});