var w = window;
var d = document;
var documentElement = d.documentElement;
var body = d.getElementsByTagName("body")[0];
var width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
var height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

if (width >= 480) {
  $(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 0;
    // set to whatever you want it to be

    console.log(y_scroll_pos);
    if (y_scroll_pos > scroll_pos_test && y_scroll_pos < 470) {
      $(".part-1").css("opacity", "0");
      $(".part-2").css("opacity", "0");
      $(".part-3").css("opacity", "0");
      $(".part-4").css("opacity", "0");
      $(".part-5").css("opacity", "0");
      $(".part-6").css("opacity", "0");
      $("h1").css("color", "#444");
      //   $(".test-img").css("transform", "scale(0.25)");
      $(".test-img").css("height", "auto");
      $(".test-img").css("width", "30%");
    } else if (y_scroll_pos > 470 && y_scroll_pos < 888) {
      $(".part-2").css("opacity", "0");
      $(".part-3").css("opacity", "0");
      $(".part-4").css("opacity", "0");
      $(".part-5").css("opacity", "0");
      $(".part-6").css("opacity", "0");
      $(".part-1").css("opacity", "1");
      $(".test-img").css("height", "auto");
      $(".test-img").css("width", "30%");
      $("h1").css("color", "#fff");
    } else if (y_scroll_pos > 888 && y_scroll_pos < 1332) {
      $(".part-1").css("opacity", "0");
      $(".part-2").css("opacity", "1");
      //   $(".test-img").css("height", "100%");
      $(".test-img").css("width", "60%");
    } else if (y_scroll_pos > 1332 && y_scroll_pos < 1776) {
      $(".part-2").css("opacity", "0");
      $(".part-3").css("opacity", "1");
      //   $(".test-img").css("transform", "scale(1)");
      $(".test-img").css("height", "auto");
      $(".test-img").css("width", "90%");
      $(".test-img").css("opacity", "1");
    } else if (y_scroll_pos > 1776 && y_scroll_pos < 2220) {
      $(".part-3").css("opacity", "0");
      $(".part-4").css("opacity", "1");
      //   $(".test-img").css("height", "100vh");
      $(".test-img").css("width", "100vw");
    } else if (y_scroll_pos > 2220 && y_scroll_pos < 2664) {
      $(".part-4").css("opacity", "0");
      $(".part-5").css("opacity", "1");

      $(".test-img").css("opacity", "1");
    } else if (y_scroll_pos > 2664 && y_scroll_pos < 3108) {
      $(".part-5").css("opacity", "0");
      $(".part-6").css("opacity", "1");
      $(".test-img").css("opacity", "0");
    } else {
      $(".section-2").css("background-color", "#fff");
    }
  });
} else if (width <= 480) {
  $(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 0;
    // set to whatever you want it to be

    console.log(y_scroll_pos);
    if (y_scroll_pos > scroll_pos_test && y_scroll_pos < 470) {
      $(".part-1").css("opacity", "0");
      $(".part-2").css("opacity", "0");
      $(".part-3").css("opacity", "0");
      $(".part-4").css("opacity", "0");
      $(".part-5").css("opacity", "0");
      $(".part-6").css("opacity", "0");
      $("h1").css("color", "#444");
      //   $(".test-img").css("transform", "scale(0.25)");
      $(".test-img").css("height", "30%");
      $(".test-img").css("width", "auto");
    } else if (y_scroll_pos > 470 && y_scroll_pos < 888) {
      $(".part-1").css("opacity", "1");
      $(".test-img").css("height", "30%");
      $(".test-img").css("width", "auto");
      $("h1").css("color", "#fff");
    } else if (y_scroll_pos > 888 && y_scroll_pos < 1332) {
      $(".part-1").css("opacity", "0");
      $(".part-2").css("opacity", "1");
      //   $(".test-img").css("height", "100%");
      $(".test-img").css("height", "60%");
    } else if (y_scroll_pos > 1332 && y_scroll_pos < 1776) {
      $(".part-2").css("opacity", "0");
      $(".part-3").css("opacity", "1");
      //   $(".test-img").css("transform", "scale(1)");
      $(".test-img").css("height", "90%");
      $(".test-img").css("width", "auto");
      $(".test-img").css("opacity", "1");
    } else if (y_scroll_pos > 1776 && y_scroll_pos < 2220) {
      $(".part-3").css("opacity", "0");
      $(".part-4").css("opacity", "1");
      //   $(".test-img").css("height", "100vh");
      $(".test-img").css("height", "100vh");
    } else if (y_scroll_pos > 2220 && y_scroll_pos < 2664) {
      $(".part-4").css("opacity", "0");
      $(".part-5").css("opacity", "1");

      $(".test-img").css("opacity", "1");
    } else if (y_scroll_pos > 2664 && y_scroll_pos < 3108) {
      $(".part-5").css("opacity", "0");
      $(".part-6").css("opacity", "1");
      $(".test-img").css("opacity", "0");
    } else {
      $(".section-2").css("background-color", "#fff");
    }
  });
}
