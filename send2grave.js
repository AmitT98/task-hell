import { renew } from "./renew"
import { setupCounter } from "./counter"

export function send2grave(taskName,taskValue){
    const ptag1 = document.createElement("p")
    ptag1.innerHTML = taskName
    ptag1.setAttribute("title",taskValue)
    ptag1.setAttribute("data-startTime", 1)
    ptag1.setAttribute("data-duration", 1)
    document.getElementById("grave").appendChild(ptag1)
    document.getElementById("grave").addEventListener('click',renew,false)
    console.log("I was here")
    setupCounter(document.querySelector('#Submit'),0,0)
}