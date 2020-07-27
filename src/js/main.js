import $ from "jquery";
import '@fancyapps/fancybox';
import Inputmask from 'inputmask';
import 'nouislider';
import 'select2';
import Swiper from "swiper";
import 'tooltipster';

$(document).ready(() => {
  $('select').select2();

  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(".mb").click(function() {
    $(".header").toggleClass("active");
  });


  // $(function() {

  //   $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  //     $(this).addClass('active').siblings().removeClass('active')
  //       .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  //   })
  
  // })
  

    $(".tab_item").not(":first").hide();
    $(".tabs-img .tab").click(function() {
      $(".tabs-img .tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    var header = $('.header'),
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 50 && scrolled > scrollPrev ) {
		header.addClass('hide');
	} else {
		header.removeClass('hide');
	}
	scrollPrev = scrolled;
});
  
});
