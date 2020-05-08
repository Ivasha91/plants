$(function() {
  $('.nav-link[href]').each(function() {
    if (this.href == window.location.href) {
      $(this).addClass('active btn btn-warning text-dark');
    }
  });
});


function scrollToKatalog() {
  $('html, body').animate({
        scrollTop: $('#cards').offset().top
    }, 500);
};

let p = heightNavPhone();
function heightNavPhone() {
  let y = $('.navbar').outerHeight();
  let z = $('#phoneNav').height();
 // let x = $('.navbar').css('padding-top');
 return (y - z)/2 ;
}

$('#phoneNav').css('padding-top', p).css('padding-bottom', p)


// TODO: height что то про саженцы = height картинки
