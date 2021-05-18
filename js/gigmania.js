$(document).ready(function() {
  // $('.head-name-div').on('mouseup touchend', function() {
    let redirectBase = 'https://app.sandpit.rapidai.com/'
    let hash = window.location.hash;
    // alert(hash);
    let modifiedRedirect = `${redirectBase}${hash}`;
    // alert(modifiedRedirect);
    window.open(modifiedRedirect, '_self');
  // });
  
});

