var sliderButtons = document.querySelectorAll(".slider-button");
var sliderItems = document.querySelectorAll(".slider-item");
var addSliderButtonClickHandler = function(sliderButtons, sliderItems) {
    sliderButtons.addEventListener('click', function(evt) {
        evt.preventDefault();
        var currentSliderButton = document.querySelector(".slider-button.current-slide-button");
        var currentSliderItem = document.querySelector(".slider-item.current-slide");
        currentSliderButton.classList.remove("current-slide-button");
        currentSliderItem.classList.remove("current-slide");
        sliderButtons.classList.add("current-slide-button");
        sliderItems.classList.add("current-slide");
    });
}

for(var i=0; i < sliderItems.length; i++) {
    addSliderButtonClickHandler(sliderButtons[i], sliderItems[i]);
}
