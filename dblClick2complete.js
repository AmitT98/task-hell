import { setupCounter } from "./counter"

export function dblClick2complete(evt){
    const taskName = evt.target.innerHTML.split(":")[0]
    const taskValue = evt.target.innerHTML.split(":")[1]
    const startTime = evt.target.getAttribute("data-startTime");
    const duration = -1;
    //document.cookie = taskName +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT'
    document.cookie =    evt.target.innerHTML.split(":")[0] + "= " + evt.target.innerHTML.split(":")[1] +  "::" + duration + "::" + startTime +  ";" + "expires=Tue, 19 Jan 2038 04:14:07 GMT"
    const ptag = document.createElement("p")
    ptag.innerText = taskName
    ptag.setAttribute("title",taskValue)
    document.getElementById("completed").appendChild(ptag)
    evt.target.remove()
    setupCounter(document.querySelector('#Submit'),0,0)
}