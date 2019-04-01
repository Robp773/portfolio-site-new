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
    console.log($(window).scrollTop())
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
  $('#box-1, #box-2, #box-3, #box-4').click(function (e) {
    let boxArray = ['box-1', 'box-2', 'box-3', 'box-4'];
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
    let projectArray = [
      'dashboard',
      'news-views',
      'pack-light',
      'time-spent',
      
    ];
    $('#time-spent, #pack-light, #news-views').hide();

    let indexNum = 0;
    let maxIndex = projectArray.length - 1;
    let prevVal;

    $('#box-1, #box-2, #box-4').on('click', function () {
      $(`#${projectArray[indexNum]}`).hide();
      prevVal = null;
      indexNum = 0;
      $(`#${projectArray[indexNum]}`).show();
    })

    // btns to switch between projects - they basically +/- the projectNum variable with certain conditions
    $('.portfolio__btn--left').click(function () {
      prevVal = indexNum;
      if (indexNum === 0) {
        indexNum = maxIndex;
      } else {
        indexNum--;
      }
      transitionProjects(indexNum, prevVal, projectArray);
    });

    $('.portfolio__btn--right').click(function () {
      prevVal = indexNum;
      if (indexNum === maxIndex) {
        indexNum = 0;
      } else {
        indexNum++;
      }
      transitionProjects(indexNum, prevVal, projectArray);
    });
  });


  let sitesArray = [
    'ovb',
    'httan'
  ];

  let indexSiteNum = 0;
  let maxSiteIndex = sitesArray.length - 1;
  let prevSiteVal;

  $('#httan').hide();

  $('.websites__btn--left').click(function () {
    prevSiteVal = indexSiteNum;
    if (indexSiteNum === 0) {
      indexSiteNum = maxSiteIndex;
    } else {
      indexSiteNum--;
    }
    transitionProjects(indexSiteNum, prevSiteVal, sitesArray);
  });

  $('.websites__btn--right').click(function () {
    prevSiteVal = indexSiteNum;
    if (indexSiteNum === maxSiteIndex) {
      indexSiteNum = 0;
    } else {
      indexSiteNum++;
    }
    transitionProjects(indexSiteNum, prevSiteVal, sitesArray);
  });

  function transitionProjects(indexNum, prevVal, usedArray) {
    for (let i = 0; i < usedArray.length; i++) {
      if (i === indexNum) {
        $(`#${usedArray[prevVal]}`).fadeOut(500, 'linear', function () {
          $(`#${usedArray[indexNum]}`).fadeIn(500, 'linear')
        });
      }
    }
  }

});