
// Слайдер
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


// Модальное окно
var openModalButton = document.querySelector("#modal-appeal-link");
var modalAppeal = document.querySelector(".modal-appeal");
var closeModalButton = modalAppeal.querySelector(".modal-close");
var form = modalAppeal.querySelector(".appeal-form");
var submitForm = document.querySelector("#submit-button");
var overlay = document.querySelector(".overlay");
openModalButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalAppeal.classList.add('modal-show');
    overlay.classList.add("overlay-show");
});

closeModalButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalAppeal.classList.remove('modal-show')
    overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalAppeal.classList.remove('modal-show')
    overlay.classList.remove("overlay-show");
});
var nameInput = form.querySelector('input[name="name"');
var emailInput = form.querySelector('input[name="email"');
var messageBox = form.querySelector("textarea[name='message']");
form.addEventListener('submit', function(evt) {
    var isValid = true;
    if(nameInput.value === ''){
        isValid = false;
        nameInput.classList.add('input-invalid');
    }
    if(emailInput.value === ''){
        isValid = false;
        emailInput.classList.add('input-invalid');
    }
    if(messageBox.value === ''){
        isValid = false;
        messageBox.classList.add('input-invalid');
    }
    if(!isValid) {
        evt.preventDefault();
    }
});