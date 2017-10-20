$(document).ready(function(){       
	/* on load */
    
    /*
    
    
    /* contact, home btn click event */
    $(".left>.leftTop>.contact a").on("click",function(){
        $(".left2").css({left:"0"});
    });
    $(".left2>.leftTop>.home a").on("click",function(){
        $(".left2").css({left:"-60%"});
    });
    
    
    /* slider */
    $(".slide li").each(function(aa){
        var RightWid = parseInt($(this).parent(".right").Width());
    $(this).css({left:aa*RightWid});
    });
    
    var putimg = 0;
    $('.slide li').each(function(aa){
        $(this).css({left:putimg});
        putimg += RightWid;
    });
    
    setInterval(function(){
        $(".slide li").each(function(bb){
            var RightWid = parseInt($(this).Width());
            var original = parseInt($(this).css('left')); 
            
            var moveTo = original-RightWid;
            $(this).animate({'left':moveTo},2000,function(){ //콜백함수
                
                var moved = parseInt($(this).css('left'));
                if(moved <= -RightWid){
                    $(this).css('left', RightWid*2 +'px');
                }
            });
        });
    },2000)
    
}); // the end















