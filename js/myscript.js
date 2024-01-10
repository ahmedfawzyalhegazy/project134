/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    $('#Container').mixItUp();
    
    // multi-parts for selected portfolio
    $('.gallery .portshuffle ul li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    
    
    // the bitton to top
    var scrollButton = $("#button-top");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 700){
            scrollButton.show();
        }
        else{
            scrollButton.hide();
        }
    });
    scrollButton.click(function(){  
        $("html, body").animate({ scrollTop: 0}, 2000);
    });
    
    // the links of navbar 
    
    $('.link2').click(function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        },500);
    });
    
    $('.link3').click(function() {
        $('html, body').animate({
            scrollTop: $('#gallery').offset().top
        },1500);
    });
    
    $('.link4').click(function() {
        $('html, body').animate({
            scrollTop: $('#packages').offset().top
        },2000);
    });
    
    $('.link5').click(function() {
        $('html, body').animate({
            scrollTop: $('#footer').offset().top
        },3000);
    });

    
    // menu bars at mobile screen
    
    $("header .container > .row > div:nth-child(1) i").click(function(){
       
        $("header .container > .row > div:nth-child(2)").slideToggle(500)
                
    });
    
});