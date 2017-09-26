$(document).ready(function(){       
	/* on load */
    /*
    
    $(window).load(function(){
        alert('테스트');
    });
    
    
    $("#id").load(function(){
        alert('테스트');
    });
    
    */
    
    
    /* contact, home btn click event */
    $(".left>.leftTop>.contact a").on("click",function(){
        $(".left2").css({left:"0"});
    });
    $(".left2>.leftTop>.home a").on("click",function(){
        $(".left2").css({left:"-60%"});
    });
    
}); // the end















