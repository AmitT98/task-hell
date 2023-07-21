export function returnDuration(){
    const ip3 = document.getElementById("ip3").value
    var duration = 0
    if(ip3[ip3.length-1].toLowerCase() == 'h'){
        duration = Number(ip3.toLowerCase().split("h")[0])*3600;
    }
    else if(ip3[ip3.length-1].toLowerCase() == 'm'){
        duration += Number(ip3.toLowerCase().split("m")[0].split("h")[0])*3600
        duration += Number(ip3.toLowerCase().split("m")[0].split("h")[1])*60;
    }
    else{
        let ip3m = ip3.toLowerCase().split("m").length == 1?("0m"+ip3):ip3
        ip3m = ip3m.toLowerCase().split("h").length == 1?("0h" + ip3m):ip3m;
        duration += Number((ip3m).toLowerCase().split("h")[0])*3600
        duration += Number((ip3m).toLowerCase().split("h")[1].split("m")[0])*60
        duration += Number((ip3m).toLowerCase().split("s")[0].split("m")[1])
    }
    duration = isNaN(duration)?1:duration;
    console.log(duration)
    return duration
}