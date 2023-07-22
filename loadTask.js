import { setupCounter } from './counter'
import { renew } from './renew'

export function loadTask(updateGrave) {
    if (document.cookie != "") {
        document.getElementById("how2use").innerHTML = ""
    for(let i = 0; i<(document.cookie.split(';').length);i++){
        const taskName = document.cookie.split(";")[i].split("=")[0]
        const taskValue = document.cookie.split(";")[i].split("=")[1].split("::")[0]
        const duration = Number(document.cookie.split(";")[i].split("=")[1].split("::")[1])
        const startTime = Number(document.cookie.split(";")[i].split("=")[1].split("::")[2])
        //const hoverDeadline = new Date((duration + startTime)*1000).toString()
        const currentTaskName = taskName

        if((duration == -1)&&(!updateGrave)){
            const ptag = document.createElement("p")
            ptag.innerText = currentTaskName
            ptag.setAttribute("title",taskValue)
            document.getElementById("completed").appendChild(ptag)
        }
        else{
        if((new Date().getTime()/1000 - startTime > duration)&&(startTime!=0)&&(updateGrave)){
            const ptag1 = document.createElement("p")
            ptag1.innerHTML = taskName
            ptag1.setAttribute("title",taskValue)
            ptag1.setAttribute("data-startTime", startTime)
            ptag1.setAttribute("data-duration", duration)
            document.getElementById("grave").appendChild(ptag1)
            document.getElementById("grave").addEventListener('click',sendData,false)
            console.log("I was here")
            setupCounter(document.querySelector('#Submit'),0,0)
        }
        if(!updateGrave){
        const ptag = document.createElement("p")
        ptag.innerHTML= currentTaskName + ":" +  taskValue
        //ptag.setAttribute("title",hoverDeadline)
        ptag.setAttribute("data-duration",duration)
        ptag.setAttribute("data-startTime",startTime)
        document.getElementById("tasks").appendChild(ptag)
        }
    }
    }
    return (document.cookie.split(';').length)
}
return 0
}