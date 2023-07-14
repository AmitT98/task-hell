export function loadTask() {
    if (document.cookie != "") {
    for(let i = 0; i<(document.cookie.split(';').length);i++){
        const ptag = document.createElement("p")
        const taskName = document.cookie.split(";")[i].split("=")[0]
        const taskValue = document.cookie.split(";")[i].split("=")[1]
        const currentTaskName = taskName
        ptag.innerHTML= currentTaskName + ":" +  taskValue
        document.getElementById("tasks").appendChild(ptag)
    }
    return (document.cookie.split(';').length)
}
return 0
}