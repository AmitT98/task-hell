export function returnDuration(){
    const ip3 = document.getElementById("ip3").value
    var duration = 0
    if(ip3[ip3.length-1].toLowerCase() == 'h'){
        duration = Number(ip3.toLowerCase().split("h")[0])*3600;
    }
    else if(ip3[ip3.length-1].toLowerCase() == 'm'){
        duration = Number(ip3.toLowerCase().split("m")[0])*60;
    }
    else{
        duration = Number(ip3.toLowerCase().split("s")[0])
    }
    duration = isNaN(duration)?1:duration;
    console.log(duration)
    return duration
}