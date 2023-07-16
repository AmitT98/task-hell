export function taskHealth(){
    if ((document.cookie != "") || (document.getElementById('tasks').childNodes[1] != undefined)){
        for(let i = 0; i<(document.cookie.split(';').length);i++){
            const duration  = Number(document.getElementById('tasks').childNodes[1+i].getAttribute("data-duration"))
            const startTime  = Number(document.getElementById('tasks').childNodes[1+i].getAttribute("data-startTime"))
            const currTime = new Date().getTime()/1000;
            const timeLeft = currTime - startTime > duration? 0: duration - currTime + startTime;
            const greenPer = 255*timeLeft/(duration);
            const redPer = 255 - greenPer;
            if(startTime != 0){
            document.getElementById('tasks').childNodes[1+i].style.color = "rgb(" + redPer.toString() + " "+ greenPer.toString() + " 0)"
            }
            //console.log(greenPer)
        }
    }
}