$(document).ready(function() {
  $('.head-name-div').on('click', function() {
    let redirectBase = 'https://app.sandpit.rapidai.com/'
    let hash = window.location.hash;
    // alert(hash);
    let modifiedRedirect = `${redirectBase}${hash}`;
    // alert(modifiedRedirect);
    window.open(modifiedRedirect, '_self');
  });

  setTimeout(() => {
    // const elem = document.querySelector('.head-name-div');
    // elem.click();

    const elem = document.querySelector('.head-name-div');
    const event = document.createEvent( 'HTMLEvents' );
    
    event.initEvent( 'click', true, true );
    elem.dispatchEvent( event );
    
  },300)
  
});

