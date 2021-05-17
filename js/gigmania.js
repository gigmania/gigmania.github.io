$(document).ready(function() {
  $('.head-name-div').on('mouseup touchend', function() {
    let redirectBase = 'https://app.sandpit.rapidai.com/'
    let hash = window.location.hash;
    let modifiedRedirect = `${redirectBase}${hash}`;
    alert('--- MODIFIED REDIRECT --- ', modifiedRedirect);
    window.open(modifiedRedirect, '_blank');
  });
  
});

