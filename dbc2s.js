import { setupCounter } from "./counter"

export function dbc2s(evt){
    const taskName = evt.target.innerHTML.split(":")[0]
    document.cookie = taskName +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT'
    evt.target.remove()
    setupCounter(document.querySelector('#Submit'),0,0)
}