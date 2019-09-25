const animationTime = 400
const scrollToElement = (name) => {
  const whereToMove = $(`#${name}`);
  const windowHeight = $(window).outerHeight();
  $('html').animate({
      scrollTop: windowHeight < whereToMove.outerHeight() ?
        whereToMove.position().top
        :
        (whereToMove.position().top - (windowHeight - whereToMove.outerHeight())/2 )
    }, animationTime);  
}

$("#top").click(() => {
  $('html').animate({scrollTop: 0}, animationTime);    
});
$("#aboutUsLink").on('click', function() {scrollToElement('about-us')});
$("#contactUsLink").on('click', function() {scrollToElement('contact-us')});
$("#productsLink").on('click', function() {scrollToElement('products')});