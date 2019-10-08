var sliderButtons = document.querySelectorAll(".slider-button");
var sliderItems = document.querySelectorAll(".slider-item");
var currentSliderButton = document.querySelector(".slider-button.current-slide");
var currentSliderItem = document.querySelector(".slider-item.current-slide");
var addSliderButtonClickHandler = function(sliderButtons, sliderItems) {
    sliderButtons.addEventListener('click', function(evt) {
        evt.preventDefault();
        var currentSliderButton = document.querySelector(".slider-button.current-slide");
        var currentSliderItem = document.querySelector(".slider-item.current-slide");
        currentSliderButton.classList.remove("current-slide");
        currentSliderItem.classList.remove("current-slide");
        sliderButtons.classList.add("current-slide");
        sliderItems.classList.add("current-slide");
    });
}

for(var i=0; i < sliderItems.length; i++) {
    addSliderButtonClickHandler(sliderButtons[i], sliderItems[i]);
}
