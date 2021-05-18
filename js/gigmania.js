$(document).ready(function() {
  // $('.head-name-div').on('mouseup touchend', function() {
    let redirectBase = 'http://localhost:8100/'
    let hash = window.location.hash;
    // alert(hash);
    let modifiedRedirect = `${redirectBase}${hash}`;
    // alert(modifiedRedirect);
    window.open(modifiedRedirect, '_self');
  // });
  
});

