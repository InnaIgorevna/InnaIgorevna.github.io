var serviceSlide_1 = document.querySelector(".service-slide-1");
var serviceSlide_2 = document.querySelector(".service-slide-2");
var serviceSlide_3 = document.querySelector(".service-slide-3");

var serviceSlideLink_1 = document.querySelector(".services-slider-menu li:nth-child(1)");
var serviceSlideLink_2 = document.querySelector(".services-slider-menu li:nth-child(2)");
var serviceSlideLink_3 = document.querySelector(".services-slider-menu li:nth-child(3)");

serviceSlideLink_1.addEventListener("click", function(event) {
	event.preventDefault();
	serviceSlide_1.classList.remove("hidden");
	serviceSlide_2.classList.add("hidden");
	serviceSlide_3.classList.add("hidden");
	serviceSlideLink_1.classList.add("active-slider-menu");
	serviceSlideLink_2.classList.remove("active-slider-menu");
	serviceSlideLink_2.classList.remove("active-slider-menu");
	});
serviceSlideLink_2.addEventListener("click", function(event) {
	event.preventDefault();
	serviceSlide_1.classList.add("hidden");
	serviceSlide_2.classList.remove("hidden");
	serviceSlide_3.classList.add("hidden");
	serviceSlideLink_1.classList.remove("active-slider-menu");
	serviceSlideLink_2.classList.add("active-slider-menu");
	serviceSlideLink_3.classList.remove("active-slider-menu");
	});
	serviceSlideLink_3.addEventListener("click", function(event) {
	event.preventDefault();
	serviceSlide_1.classList.add("hidden");
	serviceSlide_2.classList.add("hidden");
	serviceSlide_3.classList.remove("hidden");
	serviceSlideLink_1.classList.remove("active-slider-menu");
	serviceSlideLink_2.classList.remove("active-slider-menu");
	serviceSlideLink_3.classList.add("active-slider-menu");
	});
	//------------------------------
var feedbackForm = document.querySelector(".feedback-modal");
var feedback = document.querySelector(".map>a");
feedback.addEventListener("click", function(event){
	event.preventDefault();
	feedbackForm.classList.remove("hidden");
	feedbackForm.classList.add("feedback-animation");
});

var feedbackClose = document.querySelector(".feedback-close a");
feedbackClose.addEventListener("click", function(event){
	event.preventDefault();
	feedbackForm.classList.add("hidden");
	feedbackForm.classList.remove("feedback-animation");
});
var feedbackCancel = document.querySelector(".feedback-modal .btn-white");
feedbackCancel.addEventListener("click", function(event){
	event.preventDefault();
	feedbackForm.classList.add("hidden");
	feedbackForm.classList.remove("feedback-animation");
});
//------------------------------
var googleMapForm = document.querySelector(".google-map");
var googleMapLink = document.querySelector(".map-image a");

googleMapLink.addEventListener("click", function(event){
	event.preventDefault();
	googleMapForm.classList.remove("hidden");
});
var mapCancel = document.querySelector(".close-map");
mapCancel.addEventListener("click", function(event){
	event.preventDefault();
	googleMapForm.classList.add("hidden");
});
//------------------------------
var promoSlide_1 = document.querySelector(".slider-content .slide-1");
var promoSlide_2 = document.querySelector(".slider-content .slide-2");

var promoSlideControl_1 = document.querySelector(".slider-controls i:nth-child(1)");
var promoSlideControl_2 = document.querySelector(".slider-controls i:nth-child(2)");

var promoSliderLeft = document.querySelector(".promo-slider .icon-left");
var promoSliderRight = document.querySelector(".promo-slider .icon-right");

promoSliderLeft.addEventListener("click", function(event){
	event.preventDefault();
	promoSlide_1.classList.toggle("hidden");
	promoSlide_2.classList.toggle("hidden");
	promoSlideControl_1.classList.toggle("active");
	promoSlideControl_2.classList.toggle("active");
});
promoSliderRight.addEventListener("click", function(event){
	event.preventDefault();
	promoSlide_1.classList.toggle("hidden");
	promoSlide_2.classList.toggle("hidden");
	promoSlideControl_1.classList.toggle("active");
	promoSlideControl_2.classList.toggle("active");
});
promoSlideControl_1.addEventListener("click", function(event){
	event.preventDefault();
	promoSlide_1.classList.toggle("hidden");
	promoSlide_2.classList.toggle("hidden");
	promoSlideControl_1.classList.toggle("active");
	promoSlideControl_2.classList.toggle("active");
});
promoSlideControl_2.addEventListener("click", function(event){
	event.preventDefault();
	promoSlide_1.classList.toggle("hidden");
	promoSlide_2.classList.toggle("hidden");
	promoSlideControl_1.classList.toggle("active");
	promoSlideControl_2.classList.toggle("active");
});