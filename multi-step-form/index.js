$(document).ready(function(){
 
    $(".error1").css("display","none");
    $(".error2").css("display","none");
    $(".error3").css("display","none");

    $(".btn1").click(function(){
        var text1 = $(".input1").val();
        var reg1 = /([a-zA-Z][^0-9])/
        var text2 = $(".input2").val();
        var reg2 = /^([a-zA-Z0-9\.-]+)(@)([a-z0-9-]+)(.)([a-z]+)([a-z\.]+)?$/
        var text3 = $(".input3").val();
        var reg3 = /^([\+]+)([0-9]+)$/

        if(reg1.test(text1) == false){
            $(".input1").css("border", "2px solid hsl(354, 84%, 57%)");
            alert("invalid name")
            return false;
        }

        else if(reg2.test(text2) == false){
            $(".input2").css("border", "2px solid hsl(354, 84%, 57%)");
            alert("invalid email address")
            return false;
        }

        else if(reg3.test(text3) == false){
            $(".input3").css("border", "2px solid hsl(354, 84%, 57%)");
            alert("invalid phone number")
            return false;
        }

        else{
            localStorage.setItem("name",text1);
            localStorage.setItem("email",text2);
            localStorage.setItem("number",text3);
            window.location.href="index2.html";
            return true;
        }

        

    })

})



