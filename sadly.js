function play_se(){
    var sadly = new Audio("audio/audience_laugh.mp3");
    sadly.play();
}

$(function(){
    $("#laugh").click(play_se);
});