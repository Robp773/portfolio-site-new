'use strict';

$('#downBtn').click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $('#about').offset().top
  }, 750);
});