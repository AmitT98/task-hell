export function taskHealth(){
    if (document.cookie != ""){
        for(let i = 0; i<(document.cookie.split(';').length);i++){
            const deadline  = Number(document.getElementById('tasks').childNodes[1+i].getAttribute("data-deadline"))/1000
            const startTime  = Number(document.getElementById('tasks').childNodes[1+i].getAttribute("data-startTime"))/1000
            const currTime = new Date().getTime()/1000;
            const timeLeft = currTime > deadline? 0: deadline-currTime;
            const greenPer = 255*timeLeft/(deadline-startTime);
            const redPer = 255 - greenPer;
            document.getElementById('tasks').childNodes[1+i].style.color = "rgb(" + redPer.toString() + " "+ greenPer.toString() + " 0)"
            console.log(greenPer)
        }
    }
}