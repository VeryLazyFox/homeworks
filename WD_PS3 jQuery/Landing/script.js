const animationTime = 400
const scrollToElement = (name) => {
  const whereToMove = $(`#${name}`);
  const windowHeight = $(window).height();
  $('html,body').animate({
      scrollTop: windowHeight < whereToMove.height() ?
        whereToMove.position().top
        :
        (whereToMove.position().top - (windowHeight - whereToMove.height())/2 )
    }, animationTime);  
}

$("#top").click(() => {
  $('body,html').animate({scrollTop: 0}, animationTime);    
});
$("#aboutUsLink").on('click', function() {scrollToElement('about-us')});
$("#contactUsLink").on('click', function() {scrollToElement('contact-us')});
$("#productsLink").on('click', function() {scrollToElement('products')});