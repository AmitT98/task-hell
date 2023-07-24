export function returnDuration(){
    const ip3 = document.getElementById("ip3").value.toLowerCase()
    var duration = 0
    let ip3m = ip3
    if(ip3m.indexOf("s") == -1){
        if(ip3m.indexOf("m") == -1)
            ip3m = ip3 + "0m0s" //3h=>3h0m0s
        else
            ip3m = ip3 + "0s" //3h30m=>3h30m0s
    }
    if(ip3m.indexOf("h") == -1){
        if(ip3m.indexOf("m") == -1)
            ip3m = "0h0m" + ip3; //30s=>0h0m30s
        else
            ip3m = "0h" + ip3; //30m10s=>0h30m10s
    }

    if(ip3m.indexOf("m") == -1){
        ip3m = ip3m.split("h").join("h0m")
    }
    console.log(ip3m)
    const hms = ip3m.split(/[^0-9]/);
    duration = Number(hms[0])*3600 + Number(hms[1])*60 + Number(hms[2]);
    duration = isNaN(duration)?1:duration;
    console.log(duration)
    return duration
}