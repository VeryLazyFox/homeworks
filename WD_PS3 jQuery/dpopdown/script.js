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

$( document ).ready(function() {
  $("#options").append($("<ul>").attr("class", "list list-active"));
  data.forEach((element) => {
    $(".list").append($("<li>").attr("class", "list__item")
    .append($("<img>").attr("src", element.icon).height(25).width(25))
    .append($("<span>").text(element.name)));
  })

  $(".selected").click(function() {
    $(".options ul").slideToggle(30);
    $(".selected a").addClass("input-active");
  });

  $(".list__item").click(function(e) {
    const text = $(this).html();
    $(".selected span").html(text);
    $(".list").slideToggle(30);
    $(".selected a").removeClass("input-active");
    
  }); 

  $(document).click(function(e) {
    const $clicked = $(e.target);
    if (! $clicked.parents().hasClass("drop-down")) {
      $(".list").slideToggle(30);
      $(".selected a").removeClass("input-active");
    }
  });
})