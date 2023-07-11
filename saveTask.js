export function saveTask() {
    const ptag = document.createElement("p")
    const currentTaskName = document.getElementById("ip1").value
    ptag.innerHTML= currentTaskName + ":" +  document.getElementById("ip2").value
    document.getElementById("tasks").appendChild(ptag)
    document.cookie =    currentTaskName + "= " + document.getElementById("ip2").value +  ";"
  }
  