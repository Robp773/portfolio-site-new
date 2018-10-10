'use strict'

$(document).ready(function () {
  // page scrolling with portfolio button click
  $('#downBtn').click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#about').offset().top
    }, 750)
  })
  // triggers "what i do" section animations after scrolling past a specific point on page
  // variable to track if scroll down animation has already been triggered
  let scrollTriggered = false
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(window).height() / 6) {
      // if it has been triggered, prevent animations
      if (scrollTriggered) {
        return
      }

      // set first tab to be selected + display its content by default
      $('.info-section__box-1').removeClass('inactive').addClass('active')
      $('#box-1').addClass('focused')

      scrollTriggered = true
    }
  })

  // if either screenshot is clicked, active the modal + set modal image to e.currentTarget's source
  $('#screenshot-desktop, #screenshot-mobile').click(function (e) {
    $('.modal').css('display', 'block')
    $('.modal__active-image').attr('src', e.currentTarget.attributes.src.nodeValue)
    $('.about').css('border', '1rem solid transparent')
  })

  // if exit btn or anywhere outside of image is clicked, close the modal
  $('.modal__exit-btn, .modal__bg').click(function () {
    $('.modal').hide()
    $('.about').css('border', '1rem solid lightgreen')
  })

  // switch between tabs in about section
  $('#box-1, #box-2, #box-3').click(function (e) {
    let boxArray = ['box-1', 'box-2', 'box-3']
    for (let i = 0; i < boxArray.length; i++) {
      // if current array value does not match target id
      if (e.currentTarget.id !== boxArray[i]) {
        // hide content if it was previously selected
        $(`.info-section__${boxArray[i]}`).addClass('inactive').removeClass('active')
        // removed "focused" from tab
        $(`#${boxArray[i]}`).removeClass('focused')
      }else {
        // if it is the selected tab
        // make content visible
        $(`.info-section__${boxArray[i]}`).removeClass('inactive').addClass('active')
        // add "focused" styling to tab
        $(`#${e.currentTarget.id}`).addClass('focused')
      }
    }
  })

  // set default portfolio project to display inside html template
  setPortfolioContent(1)

  // switching between projects in "project work" section
  let projectNum = 1
  let totalProjects = 4

  // btns to switch between projects - they basically +/- the projectNum variable with certain conditions
  $('.portfolio__btn--left').click(function () {
    if (projectNum === 1) {
      projectNum = totalProjects
    }else {
      projectNum--
    }
    transitionProjects(projectNum)
  })

  $('.portfolio__btn--right').click(function () {
    if (projectNum === totalProjects) {
      projectNum = 1
    }else {
      projectNum++
    }
    transitionProjects(projectNum)
  })
})

// array of project data to be displayed in html template
let data = [
  {
    name: 'News-Views',
    liveLink: 'https://pacific-headland-83509.herokuapp.com/',
    githubLink: 'https://github.com/Robp773/news-views',
    screenshotDesktop: 'img/newsviews-desktop3.png',
    screenshotMobile: 'img/newsviews-mobile2.png',
  description: 'Search for and compare news coverage from different sources.'},
  {
    name: 'Time $pent',
    liveLink: 'https://tranquil-reef-93096.herokuapp.com/',
    githubLink: 'https://github.com/Robp773/Time-Spent',
    screenshotDesktop: 'img/timespent-desktop.png',
    screenshotMobile: 'img/timespent-mobile.png',
  description: 'Manage your time the way you manage your money.'},
  {
    name: 'Pack Light',
    liveLink: 'https://awesome-saha-cafdaf.netlify.com/',
    githubLink: 'https://github.com/Robp773/ultra-light-backpacking-client#live-demo',
    screenshotDesktop: 'img/packlight-desktop2.png',
    screenshotMobile: 'img/packlight-mobile.png',
  description: "Track and manage your pack's weight to achieve ultralight status."},
  {
    name: 'GOT Character Tracker',
    liveLink: 'https://robp773.github.io/GOT-Character-Tracker/',
    githubLink: 'https://github.com/Robp773/GOT-Character-Tracker',
    screenshotDesktop: 'img/got-desktop.png',
    screenshotMobile: 'img/got-mobile.png',
  description: 'Search for information on Game of Thrones Characters.'}
]

// setting template 
let setPortfolioContent = (currentNum) => {
  let dataObj = data[currentNum - 1]

  $('#project-name').text(dataObj.name)
  $('#live-link').attr('href', dataObj.liveLink)
  $('#github-link').attr('href', dataObj.githubLink)
  $('#screenshot-desktop').attr('src', dataObj.screenshotDesktop)
  $('#screenshot-mobile').attr('src', dataObj.screenshotMobile)
  $('#description').text(dataObj.description)
}
// animates the transition between projects and sets the content 
let transitionProjects = (projectNum) => {
  $('.portfolio__content').animate({
    opacity: 0
  }, 500, function () {
    setPortfolioContent(projectNum)
    $('.portfolio__content').animate({
      opacity: 1
    }, 500, function () {})
  })
}
