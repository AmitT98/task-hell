import { renew } from "./renew"

export function send2grave(el){
    const taskName = el.innerHTML.split(":")[0]
    const taskValue = el.innerHTML.split(":")[1]
    const ptag1 = document.createElement("p")
    ptag1.innerHTML = taskName
    ptag1.setAttribute("title",taskValue)
    ptag1.setAttribute("data-startTime", 0)
    ptag1.setAttribute("data-duration", 1)
    document.getElementById("grave").appendChild(ptag1)
    document.getElementById("grave").addEventListener('click',renew,false)
    console.log("I was here")
    el.remove()
    setupCounter(document.querySelector('#Submit'),0,0)
}