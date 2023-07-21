import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
import { clearTask } from './clearTask'
import { setupCounter } from './counter.js'
import { loadTask } from './loadTask'
import { saveTask } from './saveTask'
import { taskHealth } from './taskHealth'
//import { toObject } from './toObject'
import { click2start } from './click2start'
import { clearCompleted } from './clearCompleted'
import { dblClick2complete } from './dblClick2complete'
import { sendData2grave } from './sendData2grave'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Welcome to task-ledger</h1>
    <form method="get" id="form1" >
    <input type="text" id="ip1" placeholder="task identifier" size="10" class="inputBox">
    <input type="text" id="ip2" placeholder="short description of task" size="80" class="inputBox">
    <input type="text" id="ip3" placeholder="duration" size="14" class="inputBox">
    </form>
    <div class="card">
      <button id="Submit" type="button" form="form1"></button>
      <button id="ClearTasks" type="radio"> Clear all Tasks </button>
    </div>
  </div>
    <div id="tasks" style="position: relative;">
    
    </div>
`
document.getElementById("ip3")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("Submit").click();
        document.getElementById("ip1").select();
        document.getElementById("how2use").innerHTML = ""
    }
});

setupCounter(document.querySelector('#Submit'),document.querySelector('#ClearTasks'),loadTask(0))
document.querySelector('#ClearTasks').addEventListener('click', () => clearTask())
document.getElementById("grave").addEventListener('click',sendData2grave,false)
document.getElementById("tasks").addEventListener('click',click2start,false)
document.getElementById("tasks").addEventListener('dblclick',dblClick2complete,false)

let timerId = setInterval(() => taskHealth(), 1000);
document.getElementById("completed").addEventListener('click',clearCompleted,false)
//toObject()
