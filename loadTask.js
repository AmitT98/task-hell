export function loadTask() {
    if (document.cookie != "") {
    for(let i = 0; i<(document.cookie.split(';').length);i++){
        const ptag = document.createElement("p")
        const taskName = document.cookie.split(";")[i].split("=")[0]
        const taskValue = document.cookie.split(";")[i].split("=")[1].split("::")[0]
        const hoverDeadline = new Date(Number(document.cookie.split(";")[i].split("=")[1].split("::")[1])/1000).toString()
        const currentTaskName = taskName
        ptag.innerHTML= currentTaskName + ":" +  taskValue
        ptag.setAttribute("title",hoverDeadline)
        document.getElementById("tasks").appendChild(ptag)
    }
    return (document.cookie.split(';').length)
}
return 0
}