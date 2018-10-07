'use strict'

$(document).ready(function () {
  $('#downBtn').click(function () {
    // page scrolling with portfolio button click
    $([document.documentElement, document.body]).animate({
      scrollTop: $('#about').offset().top
    }, 750)
  })
  // triggers "what i do" section animations after scrolling past a specific point on page
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $(window).height() / 6) {
      $('.info-section__box-1').removeClass('inactive')
      $('.info-section__box-1').addClass('active')
      $('#box-1').addClass('focused')

      $('.info-section__box-2').removeClass('active').addClass('inactive')
      $('#box-2').removeClass('focused')
      $('#box-3').removeClass('focused')

      $('.info-section__box-3').removeClass('active').addClass('inactive')
    }
  })
  // switch between tabs in about section
  $('#box-1, #box-2, #box-3, #box-4').click(function (e) {
    let boxArray = ['box-1', 'box-2', 'box-3', 'box-4']
    for (let i = 0; i < boxArray.length; i++) {
      if (e.currentTarget.id !== boxArray[i]) {
        $(`.info-section__${boxArray[i]}`).addClass('inactive')
        $(`.info-section__${boxArray[i]}`).removeClass('active')

        $(`#${boxArray[i]}`).removeClass('focused')
      }else {
        $(`.info-section__${boxArray[i]}`).removeClass('inactive')
        $(`#${e.currentTarget.id}`).addClass('focused')
        $(`.info-section__${e.currentTarget.id}`).addClass('active')
      }
    }
  })

  // set default portfolio project to display
  setPortfolioContent(1)
  // switching between projects in "project work" section

  let projectNum = 1
  let totalProjects = 4
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
    githubLink: ['https://github.com/Robp773/ultra-light-backpacking-client#live-demo', 'https://github.com/Robp773/ultra-light-backpacking-api'],
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
let setPortfolioContent = (currentNum) => {
  let dataObj = data[currentNum - 1]

  $('#project-name').text(dataObj.name)
  $('#live-link').attr('href', dataObj.liveLink)
  if (Array.isArray(dataObj.githubLink)) {
    $('#github-link-2').show()
    $('#github-link').attr('href', dataObj.githubLink[0])
    $('#github-link-2').attr('href', dataObj.githubLink[1])
    console.log('array')
  }else {
    $('#github-link-2').hide()
    $('#github-link').attr('href', dataObj.githubLink)
  }
  $('#screenshot-desktop').attr('src', dataObj.screenshotDesktop)
  $('#screenshot-mobile').attr('src', dataObj.screenshotMobile)
  $('#description').text(dataObj.description)
}

let transitionProjects = (projectNum) => {
  $('.portfolio__content').animate({
    opacity: 0,
  // left: '+=50',
  }, 500, function () {
    setPortfolioContent(projectNum)
    // Animation complete.  
    $('.portfolio__content').animate({
      opacity: 1,
    // left: '+=50',
    }, 500, function () {
      // Animation complete.
    })
  })
}
