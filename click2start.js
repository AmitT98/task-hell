export function click2start(evt) {
    const checkStart = Number(evt.target.getAttribute("data-startTime"));
    if(checkStart == 0){
    const duration  = Number(evt.target.getAttribute("data-duration"))
    const startTime  = new Date().getTime()/1000;//Number(evt.target.getAttribute("data-startTime"))/1000;
    const currTime = new Date().getTime()/1000;
    evt.target.style.color = "rgb(" + "0".toString() + " "+ "255".toString() + " 0)"
    evt.target.setAttribute("data-startTime",startTime);
    evt.target.setAttribute("title", new Date((startTime+duration)*1000))
    //evt.target.setAttribute("data-duration",startTime+duration*1000);  
    //console.log("I was here")
    document.cookie =    evt.target.innerHTML.split(":")[0] + "= " + evt.target.innerHTML.split(":")[1] +  "::" + duration + "::" + startTime +  ";" + "expires=Tue, 19 Jan 2038 04:14:07 GMT"
    }
}