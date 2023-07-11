import { setupCounter } from "./counter"

export function clearTask() {
    for(let i = 0; i<=(document.cookie.split(';').length)+2;i++){
        const task = document.cookie.split(";")[0].split("=")[0]
        document.cookie =  task +'= ; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    }
    document.getElementById('tasks').innerHTML = ""
    setupCounter()
}