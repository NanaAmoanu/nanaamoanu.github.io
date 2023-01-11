$(document).ready(function(){
    $(".content-altmenu").css("display","none");
    
    $(".feature").click(function(){
        var check = $(".feat-menu").css("opacity")
        if(check==0){

            /*Takes care of scenarios where other menus might be opened already */
            $(".company").css("color","hsl(0, 0%, 41%)");
            $(".arrow-down2").attr("src","./images/icon-arrow-down.svg")
            $(".comp-menu").css("display","none");
            $(".comp-menu").css("opacity","0");

            /*Handles the opening of the feature menu*/
            $(".feature").css("color","black");
            $(".arrow-down1").attr("src","./images/icon-arrow-up.svg")
            $(".feat-menu").css("display","flex");
            $(".feat-menu").css("opacity","1");
        }

        else if(check==1){

            /*Handles the closing of the opening menu */
            $(".feature").css("color","hsl(0, 0%, 41%)");
            $(".arrow-down1").attr("src","./images/icon-arrow-down.svg")
            $(".feat-menu").css("display","none");
            $(".feat-menu").css("opacity","0");
            
        } 
        
    })


    $(".company").click(function(){
        var check = $(".comp-menu").css("opacity")
        if(check==0){

            /*Takes care of scenarios where other menus might be opened already */
            $(".feature").css("color","hsl(0, 0%, 41%)");
            $(".arrow-down1").attr("src","./images/icon-arrow-down.svg")
            $(".feat-menu").css("display","none");
            $(".feat-menu").css("opacity","0");

            /*Handles the opening of the company menu*/
            $(".company").css("color","black");
            $(".arrow-down2").attr("src","./images/icon-arrow-up.svg")
            $(".comp-menu").css("display","flex");
            $(".comp-menu").css("opacity","1");
           
        }
        else if(check==1){
            /*Handles the closing of the company menu*/
            $(".company").css("color","hsl(0, 0%, 41%)");
            $(".arrow-down2").attr("src","./images/icon-arrow-down.svg")
            $(".comp-menu").css("display","none");
            $(".comp-menu").css("opacity","0");
            
            
        } 
        
    })

    /*For mobile view*/
    
    $(".altmenu").click(function(){
        $(".content-altmenu").toggle(400);
    })  

    $(".alt-feature").click(function(){
        var check = $(".alt-feat-menu").css("opacity")
        if(check==0){

            /*Takes care of scenarios where other menus might be opened already */
            $(".alt-company").css("color","hsl(0, 0%, 41%)");
            $(".alt-arrow-down2").attr("src","./images/icon-arrow-down.svg")
            $(".alt-comp-menu").css("display","none");
            $(".alt-comp-menu").css("opacity","0");

            /*Handles the opening of the feature menu*/
            $(".alt-feature").css("color","black");
            $(".alt-arrow-down1").attr("src","./images/icon-arrow-up.svg")
            $(".alt-feat-menu").css("display","flex");
            $(".alt-feat-menu").css("opacity","1");
        }

        else if(check==1){

            /*Handles the closing of the opening menu */
            $(".alt-feature").css("color","hsl(0, 0%, 41%)");
            $(".alt-arrow-down1").attr("src","./images/icon-arrow-down.svg")
            $(".alt-feat-menu").css("display","none");
            $(".alt-feat-menu").css("opacity","0");
            
        } 
        
    })

    $(".alt-company").click(function(){
        var check = $(".alt-comp-menu").css("opacity")
        if(check==0){

            /*Takes care of scenarios where other menus might be opened already */
            $(".alt-feature").css("color","hsl(0, 0%, 41%)");
            $(".alt-arrow-down1").attr("src","./images/icon-arrow-down.svg")
            $(".alt-feat-menu").css("display","none");
            $(".alt-feat-menu").css("opacity","0");

            /*Handles the opening of the company menu*/
            $(".alt-company").css("color","black");
            $(".alt-arrow-down2").attr("src","./images/icon-arrow-up.svg")
            $(".alt-comp-menu").css("display","flex");
            $(".alt-comp-menu").css("opacity","1");
           
        }
        else if(check==1){
            /*Handles the closing of the company menu*/
            $(".alt-company").css("color","hsl(0, 0%, 41%)");
            $(".alt-arrow-down2").attr("src","./images/icon-arrow-down.svg")
            $(".alt-comp-menu").css("display","none");
            $(".alt-comp-menu").css("opacity","0");
            
            
        } 
        
    })

})