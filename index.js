'use strict';

$(document).ready(function () {

  // page scrolling with portfolio button click
  $('#downBtn').click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#about').offset().top
    }, 750);
  });
  // triggers "what i do" section animations after scrolling past a specific point on page
  // variable to track if scroll down animation has already been triggered
  let scrollTriggered = false;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(window).height() / 6) {
      // if it has been triggered, prevent animations
      if (scrollTriggered) {
        return;
      }

      // set first tab to be selected + display its content by default
      $('.info-section__box-1').removeClass('inactive').addClass('active');
      $('#box-1').addClass('focused');

      scrollTriggered = true;
    }
  });

  // if either screenshot is clicked, active the modal + set modal image to e.currentTarget's source
  $('#screenshot-desktop, #screenshot-mobile').click(function (e) {

    $('.modal').css('display', 'block');
    $('.modal__active-image').attr('src', e.currentTarget.attributes.src.nodeValue);

    $('.about').css('border', '1rem solid transparent');
  });

  // if exit btn or anywhere outside of image is clicked, close the modal
  $('.modal__exit-btn, .modal__bg').click(function () {
    $('.modal').hide();
    $('.about').css('border', '1rem solid lightgreen');
  });

  // switch between tabs in about section
  $('#box-1, #box-2, #box-3').click(function (e) {
    let boxArray = ['box-1', 'box-2', 'box-3'];
    for (let i = 0; i < boxArray.length; i++) {
      // if current array value does not match target id
      if (e.currentTarget.id !== boxArray[i]) {
        // hide content if it was previously selected
        $(`.info-section__${boxArray[i]}`).addClass('inactive').removeClass('active');
        // removed "focused" from tab
        $(`#${boxArray[i]}`).removeClass('focused');
      } else {
        // if it is the selected tab
        // make content visible
        $(`.info-section__${boxArray[i]}`).removeClass('inactive').addClass('active');
        // add "focused" styling to tab
        $(`#${e.currentTarget.id}`).addClass('focused');
      }
    }

    // switching between projects in "project work" section
    let indexNum = 0;
    // number of projects - 1
    let maxIndex = 3
    let prevVal;
    // btns to switch between projects - they basically +/- the projectNum variable with certain conditions
    $('.portfolio__btn--left').click(function () {
      prevVal = indexNum;
      if (indexNum === 0) {
        indexNum = maxIndex;
      } else {
        indexNum--;
      }
      transitionProjects(indexNum, prevVal);
    });

    $('.portfolio__btn--right').click(function () {
      prevVal = indexNum;
      if (indexNum === maxIndex) {
        indexNum = 0;
      } else {
        indexNum++;
      }
      transitionProjects(indexNum, prevVal);
    });
  });

  $('#time-spent, #pack-light, #got-tracker').hide();

  let projectArray = [
    'news-views',
    'pack-light',
    'time-spent',
    'got-tracker'
  ];

  function transitionProjects(indexNum, prevVal) {
    for (let i = 0; i < projectArray.length; i++) {
      if (i === indexNum) {
        $(`#${projectArray[prevVal]}`).fadeOut(500, 'linear', function () {
          $(`#${projectArray[indexNum]}`).fadeIn(500, 'linear')

        });
      }
    }
  }
});