import {sendData} from './sendData'

export function loadTask() {
    if (document.cookie != "") {
    for(let i = 0; i<(document.cookie.split(';').length);i++){
        const ptag = document.createElement("p")
        const taskName = document.cookie.split(";")[i].split("=")[0]
        const taskValue = document.cookie.split(";")[i].split("=")[1].split("::")[0]
        const deadline = Number(document.cookie.split(";")[i].split("=")[1].split("::")[1])
        const startTime = Number(document.cookie.split(";")[i].split("=")[1].split("::")[2])
        const hoverDeadline = new Date(deadline).toString()
        const currentTaskName = taskName

        if(new Date().getTime() > deadline){
            const ptag1 = document.createElement("p")
            ptag1.innerHTML = taskName
            ptag1.setAttribute("title",taskValue)
            ptag1.setAttribute("data-startTime", startTime)
            ptag1.setAttribute("data-deadline", deadline)
            document.getElementById("grave").appendChild(ptag1)
            document.getElementById("grave").addEventListener('click',sendData,false)
        }
        else{
        ptag.innerHTML= currentTaskName + ":" +  taskValue
        ptag.setAttribute("title",hoverDeadline)
        ptag.setAttribute("data-deadline",deadline)
        ptag.setAttribute("data-startTime",startTime)
        document.getElementById("tasks").appendChild(ptag)
        }
    }
    return (document.cookie.split(';').length)
}
return 0
}