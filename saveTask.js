export function saveTask() {
    const ptag = document.createElement("p")
    const currentTaskName = document.getElementById("ip1").value
    const deadlineSeconds = document.getElementById("ip3").value
    const deadline = new Date().getTime() + deadlineSeconds
    const hoverDeadline = new Date(new Date().getTime() + 50 ).toString()
    ptag.innerHTML= currentTaskName + ":" +  document.getElementById("ip2").value
    ptag.setAttribute("title",hoverDeadline)
    document.getElementById("tasks").appendChild(ptag)
    document.cookie =    currentTaskName + "= " + document.getElementById("ip2").value +  "::" + deadline + ";" + "expires=Tue, 19 Jan 2038 04:14:07 GMT"
  }
  