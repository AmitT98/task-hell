export function saveTask() {
    const ptag = document.createElement("p")
    const currentTaskName = document.getElementById("ip1").value
    const deadlineSeconds = document.getElementById("ip3").value
    const startTime = new Date().getTime()
    const deadline = startTime + deadlineSeconds*1000
    const hoverDeadline = new Date(new Date().getTime() + deadline ).toString()
    ptag.innerHTML= currentTaskName + ":" +  document.getElementById("ip2").value
    ptag.setAttribute("title",hoverDeadline)
    ptag.setAttribute("data-deadline",deadline)
    ptag.setAttribute("data-startTime",startTime)
    document.getElementById("tasks").appendChild(ptag)
    document.cookie =    currentTaskName + "= " + document.getElementById("ip2").value +  "::" + deadline + "::" + startTime +  ";" + "expires=Tue, 19 Jan 2038 04:14:07 GMT"
  }
  