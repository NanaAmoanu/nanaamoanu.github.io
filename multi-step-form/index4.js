$(document).ready(function(){
    var check1 = localStorage.getItem("month_status");
    var check2 = localStorage.getItem("check_arcade");
    var check3 = localStorage.getItem("check_advanced");
    var check4 = localStorage.getItem("check_pro");
    var check5 = localStorage.getItem("check_storage");
    var check6 = localStorage.getItem("check_service");
    var check7 = localStorage.getItem("check_profile");
    var sum = 0

    if(check1=='inline'){
        $(".year").css('display','none')
    }

    else if(check1=='none'){
        $(".month").css('display','none')
    }

    if(check2=='rgb(240, 246, 255)'){
        if(check1=='inline'){
            sum += 9
        }
    
        else if(check1=='none'){
            sum += 90
        }
        $(".plan2").css('display','none')
        $(".plan3").css('display','none')
    }

    else if(check3=='rgb(240, 246, 255)'){
        if(check1=='inline'){
            sum += 12
        }
    
        else if(check1=='none'){
            sum += 120
        }
        $(".plan1").css('display','none')
        $(".plan3").css('display','none')
    }

    else if(check4=='rgb(240, 246, 255)'){
        if(check1=='inline'){
            sum += 15
        }
    
        else if(check1=='none'){
            sum += 150
        }
        $(".plan1").css('display','none')
        $(".plan2").css('display','none')
    }

    if(check5=='rgb(240, 246, 255)'){
        if(check1=='inline'){
            sum += 2
        }
    
        else if(check1=='none'){
            sum += 20
        }
        $(".storage").css('display','flex')
    }

    else{
        $(".storage").css('display','none')
    }

    if(check6=='rgb(240, 246, 255)'){
        if(check1=='inline'){
            sum += 1
        }
    
        else if(check1=='none'){
            sum += 10
        }
        $(".service").css('display','flex')
    }

    else{
        $(".service").css('display','none')
    }

    if(check7=='rgb(240, 246, 255)'){
        if(check1=='inline'){
            sum += 2
        }
    
        else if(check1=='none'){
            sum += 20
        }
        $(".profile").css('display','flex')
    }

    else{
        $(".profile").css('display','none')
    }

    $(".sum").html(sum)

})