$(document).ready(function(){

    $(".yearly").css("display","none")
    $(".free").css("display","none")
    $(".month").css("color","hsl(213, 96%, 18%)")
    $(".year").css("color","rgb(150, 153, 171)")

    $(".arcade").click(function(){
        $(".arcade").css("background-color","hsl(217, 100%, 97%)");
        $(".arcade").css("border","2px solid hsl(229, 24%, 87%)")

        $(".advanced").css("background-color","white");
        $(".advanced").css("border","1px solid hsl(229, 24%, 87%)")

        $(".pro").css("background-color","white");
        $(".pro").css("border","1px solid hsl(229, 24%, 87%)")
   
    })

    $(".advanced").click(function(){
        $(".advanced").css("background-color","hsl(217, 100%, 97%)");
        $(".advanced").css("border","2px solid hsl(229, 24%, 87%)")

        $(".arcade").css("background-color","white");
        $(".arcade").css("border","1px solid hsl(229, 24%, 87%)")

        $(".pro").css("background-color","white");
        $(".pro").css("border","1px solid hsl(229, 24%, 87%)")
   
    })

    $(".pro").click(function(){
        $(".pro").css("background-color","hsl(217, 100%, 97%)");
        $(".pro").css("border","2px solid hsl(229, 24%, 87%)")

        $(".arcade").css("background-color","white");
        $(".arcade").css("border","1px solid hsl(229, 24%, 87%)")

        $(".advanced").css("background-color","white");
        $(".advanced").css("border","1px solid hsl(229, 24%, 87%)")
   
    })

    $("#check").click(function(){
        var check = $(".month").css("color");
        if(check == 'rgb(2, 41, 90)'){
            $(".year").css("color","rgb(2, 41, 90)");
            $(".month").css("color","rgb(150, 153, 171)")
        }

        else{
            $(".month").css("color","rgb(2, 41, 90)");
            $(".year").css("color","rgb(150, 153, 171)")
        }

        $(".yearly").toggle()
        $(".free").toggle()
        $(".monthly").toggle()
    })

    $(".btn1").click(function(){
        var check1 = $(".arcade").css("background-color");
        var check2 = $(".pro").css("background-color");
        var check3 = $(".advanced").css("background-color");
        if(check1 == 'rgb(240, 246, 255)' || check2 =='rgb(240, 246, 255)' || check3 == 'rgb(240, 246, 255)'){
            var msg = $(".monthly").css("display")
            localStorage.setItem("check_arcade",check1);
            localStorage.setItem("check_pro",check2);
            localStorage.setItem("check_advanced",check3);
            localStorage.setItem("month_status",msg);
            window.location.href="index3.html";
            window.location.href="index4.html";
            return true
        }

        else{
            alert('You have to choose an option')
            return false
        }

    })

})