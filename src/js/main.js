import $ from "jquery";
import "@fancyapps/fancybox";
import Inputmask from "inputmask";
import "nouislider";
import "select2";
import Swiper from "swiper";
import "tooltipster";

$(document).ready(() => {
  $("select").select2();

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var mySwiper = new Swiper(".menu-slider", {
    slidesPerView: "auto",
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  $(".mb").click(function () {
    $(".header").toggleClass("active");
    $(".menu").toggleClass("active");
    $("body").toggleClass("over");
    $("html").toggleClass("over");
  });

  $(".tab-content").each(function () {
    $(this).find(".tab-content-item").not(":first").hide();
  });
  $(".tab-heading-title").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(this)
      .parent()
      .siblings(".tab-content")
      .find(".tab-content-item")
      .hide()
      .eq($(this).index())
      .fadeIn();
    console.log($(".tab-content-item").index());
  });

  var header = $(".header"),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 50 && scrolled > scrollPrev) {
      header.addClass("hide");
    } else {
      header.removeClass("hide");
    }
    scrollPrev = scrolled;
  });

  $(".close").click(function () {
    $(".subscribe").slideUp();
  });
});
