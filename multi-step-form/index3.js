$(document).ready(function(){
    var test = localStorage.getItem("month_status");
    if(test=='inline'){
        $(".yearly").css('display','none')
    }

    else if(test=='none'){
        $(".monthly").css('display','none')
    }

    $("#check-service").click(function(){
        var check = $(".service").css("background-color");
        if(check == 'rgb(240, 246, 255)'){
            $(".service").css("background-color","white");
            $(".service").css("border","1px solid hsl(229, 24%, 87%)")
        }

        else{
            $(".service").css("background-color","hsl(217, 100%, 97%)");
            $(".service").css("border","2px solid hsl(229, 24%, 87%)")
        }
        
    })

    $("#check-storage").click(function(){
        var check = $(".storage").css("background-color");
        if(check == 'rgb(240, 246, 255)'){
            $(".storage").css("background-color","white");
            $(".storage").css("border","1px solid hsl(229, 24%, 87%)")
        }

        else{
            $(".storage").css("background-color","hsl(217, 100%, 97%)");
            $(".storage").css("border","2px solid hsl(229, 24%, 87%)")
        }

    })

    $("#check-profile").click(function(){
        var check = $(".profile").css("background-color");
        if(check == 'rgb(240, 246, 255)'){
            $(".profile").css("background-color","white");
            $(".profile").css("border","1px solid hsl(229, 24%, 87%)")
        }

        else{
            $(".profile").css("background-color","hsl(217, 100%, 97%)");
            $(".profile").css("border","2px solid hsl(229, 24%, 87%)")
        }

    })

    $(".btn1").click(function(){
        var check1 = $(".service").css("background-color");
        var check2 = $(".storage").css("background-color");
        var check3 = $(".profile").css("background-color");
        localStorage.setItem("check_service",check1);
        localStorage.setItem("check_storage",check2);
        localStorage.setItem("check_profile",check3);
        window.location.href="index4.html";
        return true
    })

})
