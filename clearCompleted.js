export function clearCompleted(evt){
    const length = document.getElementById("completed").childNodes.length;
    console.log(length)
    for(let i = 2; i < length;i++){
        const taskName = document.getElementById("completed").childNodes[i].innerHTML 
        document.cookie = taskName +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT'
        document.getElementById("completed").childNodes[i].remove();
    }
    
}