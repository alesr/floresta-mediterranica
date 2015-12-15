function animation() {
  $('body').fadeIn('fast'); // Fade in
}

// Return to homepage after 3 minutes
function idleTimeout() {
  setTimeout(function() {
    window.open('../html/home.html', '_self');
  }, 180000);
}

// After 3 minutes it will start a loop through the content.
function looper() {
  setTimeout(function() {
    window.open('content.html', '_self');
  }, 180000);
}
