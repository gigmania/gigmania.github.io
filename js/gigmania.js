$(document).ready(function() {
  $('.head-name-div').on('click', function() {
    let redirectBase = 'https://app.sandpit.rapidai.com/';
    //let redirectBase = 'http://localhost:8100/';
    let hash = window.location.hash;
    let modifiedRedirect = `${redirectBase}${hash}`;
    window.open(modifiedRedirect, '_self');
  });
});

