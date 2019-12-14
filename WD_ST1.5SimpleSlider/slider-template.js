const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60';

const IMAGES = [
  '?image=1080', 
  '?image=1079', 
  '?image=1069', 
  '?image=1063', 
  '?image=1050',
  '?image=1039'
];
const LAST_IMAGE_INDEX = IMAGES.length - 1

$( document ).ready(function() {
  let activeIndex = 0

  IMAGES.forEach((element, index) => {
    $(".slider-previews").append($("<li>").append($("<img>").attr("src", `${API_URL}${SMALL_SIZE}${element}`).attr("alt", `image${index}`).height(SMALL_SIZE).width(SMALL_SIZE)))
  });
  const previewsArray = $(".slider-previews li");
  previewsArray[activeIndex].classList.add("current")

  previewsArray.click(function () {
    removeActiveClass(activeIndex)
    activeIndex = $('.slider-previews li').index(this)
    changeActiveImage(activeIndex)
  });
  $(document).keydown(function (e) {
    if (e.which === 37) {
      removeActiveClass(activeIndex)
      if (activeIndex === 0) {
        activeIndex = LAST_IMAGE_INDEX
      } else activeIndex -= 1
      changeActiveImage(activeIndex)
    }
    if (e.which === 39) { 
      removeActiveClass(activeIndex)
      if (activeIndex === LAST_IMAGE_INDEX) {
        activeIndex = 0
      } else activeIndex += 1
      changeActiveImage(activeIndex)
    }
  });
  function changeActiveImage (index) {
    previewsArray[index].classList.add("current")
    $("#currentImage").attr("src", `${API_URL}${BIG_SIZE}${IMAGES[index]}`)
  }
  function removeActiveClass (index) {
    previewsArray[index].classList.remove("current")
  }
})