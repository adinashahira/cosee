$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css("background" , "white");
        }
  
        else{
            $(".navbar").css("background" , "transparent");  	
        }
    })
  })
