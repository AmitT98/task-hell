export function c2s(evt) {
    const duration  = Number(evt.target.getAttribute("data-duration"))/1000
    const startTime  = new Date().getTime()/1000;//Number(evt.target.getAttribute("data-startTime"))/1000;
    const currTime = new Date().getTime()/1000;
    evt.target.style.color = "rgb(" + "0".toString() + " "+ "255".toString() + " 0)"
    evt.target.setAttribute("data-startTime",startTime);
    //evt.target.setAttribute("data-duration",startTime+duration*1000);  
    //console.log("I was here")
}