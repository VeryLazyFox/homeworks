const dataArray = ["user1", "user2", "user3", "user4", "user5"]
const data = [
  {
    name: "user1",
    icon: "https://img.icons8.com/bubbles/2x/user.png"
  },
  {
    name: "user2",
    icon: "https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png"
  },
  {
    name: "user3",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bO1bZic2xef-jbOKXGmDZkYy6kFscVxNh_j44IdxYZgBN4xJ"
  },
  {
    name: "user4",
    icon: "https://img.icons8.com/bubbles/2x/user.png"
  },
  {
    name: "user5",
    icon: "https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png"
  },
  {
    name: "user6",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1bO1bZic2xef-jbOKXGmDZkYy6kFscVxNh_j44IdxYZgBN4xJ"
  },
  
]
const wrapper = document.createElement("ul");
wrapper.classList.add("list");
wrapper.classList.add("list-active");
for (let i=0; i < data.length; i++){
  const elem = wrapper.appendChild(document.createElement("li"));
  const elemImage = elem.appendChild(document.createElement("img"));
  elemImage.src = data[i].icon
  elemImage.width = 25;
  elemImage.height = 25;
  const elemSpan = elem.appendChild(document.createElement("span"));
  elemSpan.appendChild(document.createTextNode(data[i].name));
  elem.appendChild(elemSpan);
  elem.classList.add("list__item");
}
options.appendChild(wrapper)
$(".selected").click(function() {
  $(".options ul").toggle();
  $(".selected a").addClass("input-active");
});

$(".drop-down .options ul li").click(function(e) {
  let text = $(this).html();
  $(".selected span").html(text);
  $(".list").hide();
  $(".selected a").removeClass("input-active");
  
}); 

$(document).bind('click', function(e) {
  let $clicked = $(e.target);
  if (! $clicked.parents().hasClass("drop-down")) {
    $(".list").hide();
    $(".selected a").removeClass("input-active");
  }
});