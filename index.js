'use strict';

$(document).ready(function () {$('#downBtn').click(function () {
  // page scrolling with portfolio button click
  $([document.documentElement, document.body]).animate({
    scrollTop: $('#about').offset().top
  }, 750);
});
$(window).scroll(function (e) {
  // console.log(`current scroll pos: ${$(window).scrollTop()}`);
  if($(window).scrollTop() >= $(window).height() / 6){
    console.log('passed');
    $('.info-section__box-1').removeClass('inactive');
    $('.info-section__box-1').addClass('active');
  }
});
// switch between tabs in about section
$('#box-1, #box-2, #box-3, #box-4').click(function (e) {
  let boxArray = ['box-1', 'box-2', 'box-3', 'box-4'];
  for (let i = 0; i < boxArray.length; i++) {
    if (e.currentTarget.id !== boxArray[i]) {
      $(`.info-section__${boxArray[i]}`).addClass('inactive');
      $(`.info-section__${boxArray[i]}`).removeClass('active');

      $(`#${boxArray[i]}`).removeClass('focused');
    }else {
      $(`.info-section__${boxArray[i]}`).removeClass('inactive');
      $(`#${e.currentTarget.id}`).addClass('focused');
      $(`.info-section__${e.currentTarget.id}`).addClass('active');
    }
  }
});
});
