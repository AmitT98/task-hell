export function saveTask() {
    const ptag = document.createElement("p")
    const currentTaskName = document.getElementById("ip1").value
    const duration = isNaN(document.getElementById("ip3").value)?1:Number(document.getElementById("ip3").value);
    const startTime = 0;
    //const deadline = new Date().getTime() + duration*1000
    //const hoverDeadline = new Date(deadline).toString()
    ptag.innerHTML= currentTaskName + ":" +  document.getElementById("ip2").value
    //ptag.setAttribute("title",hoverDeadline)
    ptag.setAttribute("data-duration",duration)
    ptag.setAttribute("data-startTime",startTime)
    document.getElementById("tasks").appendChild(ptag)
    document.cookie =    currentTaskName + "= " + document.getElementById("ip2").value +  "::" + duration + "::" + startTime +  ";" + "expires=Tue, 19 Jan 2038 04:14:07 GMT"
  }
  