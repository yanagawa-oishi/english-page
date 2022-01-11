// JavaScript Document
$(function() {
$('.slider').slick({
infinite: true,
autoplay:true, 
variableWidth: true,
dots: true,
centerMode: true,
pauseOnDotsHover:false,
pauseOnFocus:false,
arrows: true,
autoplaySpeed: 3000,
slidesToShow:3,
prevArrow: '<div class="slide-arrow prev-arrow"><i class="fas fa-chevron-right"></i></div>',
nextArrow: '<div class="slide-arrow next-arrow"><i class="fas fa-chevron-left"></i></div>'
});
});

$(function() {
$('.slider2').slick({
infinite: true,
autoplay:false, 
variableWidth: true,
dots: true,
centerMode: true,
pauseOnDotsHover:false,
pauseOnFocus:false,
arrows: true,

prevArrow: '<div class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></div>',
nextArrow: '<div class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></div>'
});
});


$(function() {
$('#slider3,#slider4,#slider5').slick({
autoplay:true, 
autoplaySpeed: 5000,
dots: true,
arrows:false,
pauseOnHover:false,
});
});

$(function() {
$('.slider4').slick({
infinite: true,
autoplay:true, 
accessibility:false,
pauseOnHover:false,
variableWidth: true,
draggable: true,
swipe: true,
arrows:false,
dots:false,
centerMode: true,
slidesToShow: 1,
autoplaySpeed: 0,
speed: 13000,
});
});

$(function() {
$('.slider3').slick({
autoplay:true, 
autoplaySpeed: 3000,
speed: 3000,
dots:false,
arrows:false,
fade: true,
pauseOnHover:false,
cssEase: 'linear'
});
});