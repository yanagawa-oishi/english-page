// JavaScript Document
jQuery(function(){
var w = $(window).width();
var x = 1024;
if (w > x) {
var headerHight = 120;
} else {
var headerHight = 0;
}
   jQuery('a[href^=#]').click(function() {
	  var speed = 500; 
	  var href= jQuery(this).attr("href");
	  var target = jQuery(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top-headerHight; 
	  jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
   });

   jQuery('#top a[href^=#]').click(function() {
	  var speed = 500; 
	  var href= jQuery(this).attr("href");
	  var target = jQuery(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top; 
	  jQuery('body,html').animate({scrollTop:position}, speed);
	  return false;
   });

});



$(function(){
$("#f_nav2 .parent > a").on("click", function() {
var windowWidth = window.innerWidth;
if ($(this).hasClass("open")) {
$(this).removeClass("open");
}else{
$(this).addClass('open');
}
if (windowWidth <= 768) {
$(this).next().slideToggle();	
}
});
});

$(window).resize(function() {
  var windowWidth = window.innerWidth;
  var point = 1024;
  var timer = false;
  if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    var ww = $(window).width();
    if (windowWidth != ww) {
      if (windowWidth > point) {
$("#f_nav2 .parent > a").removeClass("open");
      } else { //画面サイズが1000px未満のときの処理
$("#f_nav2 .parent > a").removeClass("open");
      }
    } else {}
  }, 10);
});

$(window).resize(function(){
var w = $(window).width();
var x = 768;
if (w >= x) {
$('#f_nav2 ul li ul').css({
display: 'block'
});
$('#side_p').css({display: 'block'});
} else {
$('#f_nav2 ul li ul').css({
display: 'none'
});
$('#side_p').css({display: 'none'});
}
});

$(window).resize(function(){
var w = $(window).width();
var x = 768;
if (w >= x) {
$('#f_nav2 ul li ul').css({
display: 'block'
});
} else {
$('#f_nav2 ul li ul').css({
display: 'none'
});
}
});


var map;
function initMap() {
  var myLatLng = {lat: 33.1605121, lng: 130.4028516};
  var map = new google.maps.Map(document.getElementById('map2'), {
    zoom: 14,
    center: myLatLng
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

$(function(){
$("#club_list ul:nth-of-type(1) li").on("click", function() {
$("#club_list ul:nth-of-type(1) li").removeClass("active");
$(this).addClass('active');
});
});


$(function(){
$("#club_list ul:nth-of-type(1) li:nth-of-type(1)").on("click", function() {
$("#club_list ul:nth-of-type(2) li.sport,#club_list ul:nth-of-type(2) li.art").css({'display':'block'});
});
});

$(function(){
$("#club_list ul:nth-of-type(1) li:nth-of-type(2)").on("click", function() {
$("#club_list ul:nth-of-type(2) li.sport").css({'display':'block'});
$("#club_list ul:nth-of-type(2) li.art").css({'display':'none'});
});
});

$(function(){
$("#club_list ul:nth-of-type(1) li:nth-of-type(3)").on("click", function() {
$("#club_list ul:nth-of-type(2) li.sport").css({'display':'none'});
$("#club_list ul:nth-of-type(2) li.art").css({'display':'block'});
});
});

$(function(){
$("#calendar ul:nth-of-type(1) li").on("click", function() {
$("#calendar ul:nth-of-type(1) li").removeClass("active");
$(this).addClass('active');
});
});

$(function(){
$("#calendar ul:nth-of-type(1)  li:nth-of-type(2)").on("click", function() {
$("#spring,#summer,#autumn,#winter").css({'display':'none'});
$("#spring").css({'display':'block'});
});
});

$(function(){
$("#calendar ul:nth-of-type(1)  li:nth-of-type(3)").on("click", function() {
$("#spring,#summer,#autumn,#winter").css({'display':'none'});
$("#summer").css({'display':'block'});
});
});

$(function(){
$("#calendar ul:nth-of-type(1)  li:nth-of-type(4)").on("click", function() {
$("#spring,#summer,#autumn,#winter").css({'display':'none'});
$("#autumn").css({'display':'block'});
});
});

$(function(){
$("#calendar ul:nth-of-type(1)  li:nth-of-type(5)").on("click", function() {
$("#spring,#summer,#autumn,#winter").css({'display':'none'});
$("#winter").css({'display':'block'});
});
});

$(function(){
$("#calendar ul:nth-of-type(1)  li:nth-of-type(1)").on("click", function() {
$("#spring,#summer,#autumn,#winter").css({'display':'block'});
});
});

$(function() {
$("#graph li:nth-of-type(1) p:nth-of-type(2) span:nth-of-type(1)").on('inview', function(event, isInView){
$(this).css({'width':'100%'});
});
});

$(function() {
$("#graph li:nth-of-type(2) p:nth-of-type(2) span:nth-of-type(1)").on('inview', function(event, isInView){
$(this).css({'width':'100%'});
});
});

$(function() {
$("#graph li:nth-of-type(3) p:nth-of-type(2) span:nth-of-type(1)").on('inview', function(event, isInView){
$(this).css({'width':'100%'});
});
});

$(function() {
$('#slid').slick({
infinite: true,
autoplay:true, 
accessibility:false,
pauseOnHover:false,
variableWidth: true,
arrows:false,
dots:false,
centerMode: true,
slidesToShow: 1,
autoplaySpeed: 0,
speed: 13000,
     });
});


$(function() {
  $('.slid2').slick({
  infinite: true,
  autoplay:true, 
  accessibility:false,
  pauseOnHover:false,
  variableWidth: true,
  arrows:false,
  dots:false,
  centerMode: true,
  slidesToShow: 1,
  autoplaySpeed: 0,
  speed: 5000,
       });
  });


  $(function() {
    $('.slidc').slick({
    infinite: true,
    autoplay:true, 
    accessibility:false,
    pauseOnHover:false,
    variableWidth: true,
    arrows:false,
    dots:false,
    centerMode: true,
    slidesToShow: 1,
    autoplaySpeed: 0,
    speed: 10000,
         });
    });


document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-150289340-1"></script>');
window.dataLayer = window.dataLayer || [];
function gtag(){
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-150289340-1');