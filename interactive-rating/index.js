$(document).ready(function(){
   
    var rate;
    $(".one").click(function(){
        rate = 1;
        $(".one").css("background-color","hsl(25, 97%, 53%)")
        $(".two").css("background-color","hsl(215, 16%, 24%)")
        $(".three").css("background-color","hsl(215, 16%, 24%)")
        $(".four").css("background-color","hsl(215, 16%, 24%)")
        $(".five").css("background-color","hsl(215, 16%, 24%)")
    })

    $(".two").click(function(){
        rate = 2;
        $(".two").css("background-color","hsl(25, 97%, 53%)")
        $(".one").css("background-color","hsl(215, 16%, 24%)")
        $(".three").css("background-color","hsl(215, 16%, 24%)")
        $(".four").css("background-color","hsl(215, 16%, 24%)")
        $(".five").css("background-color","hsl(215, 16%, 24%)")
    })

    $(".three").click(function(){
        rate = 3;
        $(".three").css("background-color","hsl(25, 97%, 53%)")
        $(".two").css("background-color","hsl(215, 16%, 24%)")
        $(".one").css("background-color","hsl(215, 16%, 24%)")
        $(".four").css("background-color","hsl(215, 16%, 24%)")
        $(".five").css("background-color","hsl(215, 16%, 24%)")
    })

    $(".four").click(function(){
        rate = 4;
        $(".four").css("background-color","hsl(25, 97%, 53%)")
        $(".two").css("background-color","hsl(215, 16%, 24%)")
        $(".three").css("background-color","hsl(215, 16%, 24%)")
        $(".one").css("background-color","hsl(215, 16%, 24%)")
        $(".five").css("background-color","hsl(215, 16%, 24%)")
    })

    $(".five").click(function(){
        rate = 5;
        $(".five").css("background-color","hsl(25, 97%, 53%)")
        $(".two").css("background-color","hsl(215, 16%, 24%)")
        $(".three").css("background-color","hsl(215, 16%, 24%)")
        $(".four").css("background-color","hsl(215, 16%, 24%)")
        $(".one").css("background-color","hsl(215, 16%, 24%)")
    })

    $(".btn").click(function(){
        localStorage.setItem("yeah",rate);
        window.location.href="index2.html";
    })

    $("#fill").html(localStorage.getItem("yeah"));
    
})