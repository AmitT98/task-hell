export function saveTask() {
    const ptag = document.createElement("p")
    const currentTask = document.getElementById("ip1").value
    ptag.innerHTML= currentTask
    document.getElementById("tasks").appendChild(ptag)
    document.cookie +=  "#" + currentTask
  }
  