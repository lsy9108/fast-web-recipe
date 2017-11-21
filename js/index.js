// contact, home btn click event

$(".left1>.leftTop>.contact a").on("click",function(){
    $(".left2").css({left:"0"});
});
$(".left2>.leftTop>.home a").on("click",function(){
    $(".left2").css({left:"-60%"});
});



// auto slide 

$(".slide li:gt(0)").hide(); // the :gt(index) selector did not accept a negative value for index, 
                             // Zero-based index, counting backwards from the last element.

setInterval(function() { 
    $('.slide li:first')
        .fadeOut(3000)
        .next().fadeIn(3000)
        .end().appendTo('.slide ul');
},  4500);
    

    

// portfolio page

$('.portfolio').on('click',function(){
    $('#portfolio').toggleClass('on');
        $(this).html("VIEW PORTFOLIO<i class='icon-plus'></i>")
    
    if ($('#portfolio').hasClass('on')){
        $(this).html("CLOSE PORTFOLIO<i class='icon-minus'></i>");
    }
});















