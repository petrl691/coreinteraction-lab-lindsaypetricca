$(document).ready(function(){
$(".buttonone").click(function(){
    $(".buddha").fadeIn('slow');
})
});

setTimeout(function() {
    $('.buddha').fadeOut('slow');
}, 3000); 

$(".buttonthree").click(function(){
    $(".haikuone").css("color", "red");
});