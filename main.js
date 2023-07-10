import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
import { clearTask } from './clearTask'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Welcome to task-hell</h1>
    <form method="get" id="form1">
    <input type="text" id="ip1">
    </form>
    <div class="card">
      <button id="Submit" type="button" form="form1"></button>
      <button id="ClearTasks" type="button"> Clear Tasks</button>
    </div>
  </div>
    <div id="tasks" style="position: relative;">
    
    </div>
`

setupCounter(document.querySelector('#Submit'))
document.querySelector('#ClearTasks').addEventListener('click', () => clearTask())