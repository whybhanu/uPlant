
var clickEvent = document.querySelectorAll("a")[2]
clickEvent.addEventListener("click", function() {
  document.querySelector(".openPage").classList.add("active");
});

var clickButton = document.querySelector(".close-button");

clickButton.addEventListener("click", function(){
  document.querySelector(".openPage").classList.remove("active");
})

