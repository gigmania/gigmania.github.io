$(document).ready(function() {
  $('.head-name-div').on('mouseup touchend', function() {
    let redirectBase = 'https://app.sandpit.rapidai.com/'
    let hash = window.location.hash;
    let modifiedRedirect = `${redirectBase}${hash}`;
    console.log('--- MODIFIED REDIRECT --- ', modifiedRedirect);
    debugger;
    window.open(modifiedRedirect, '_self');
  });
  
});

