$(function(){
  $('.menu-icon').click(function(){
  $('.border-1,.border-2,.border-3').toggleClass('open');
  $('.header-nav').toggleClass('open');
})
});
$(".back-cont");

$(window).scroll(function () {
  $('.back-cont').each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight){
      $(this).addClass('scroll-in');
    }
  });
});

$('.slider').slick({
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		centerMode: true,
		variableWidth: true,
		//dots: true,
	});