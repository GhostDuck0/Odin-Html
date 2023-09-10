var audio = document.getElementById('audio');
var PlayButton = document.getElementById('PlayButton');
var count = 0;

function Play(){
    if(count == 0){
        count = 1;
        audio.play();
    }else{
        count = 0;
        audio.pause()
    }
}

function Stop(){
    audio.currentTime = 0
}