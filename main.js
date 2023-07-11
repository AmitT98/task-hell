import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
import { clearTask } from './clearTask'
import { setupCounter } from './counter.js'
import { loadTask } from './loadTask'
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Welcome to task-hell</h1>
    <form method="get" id="form1">
    <input type="text" id="ip1" placeholder="task identifier" size="10">
    <input type="text" id="ip2" placeholder="short description of task" size="80">
    </form>
    <div class="card">
      <button id="Submit" type="button" form="form1"></button>
      <button id="ClearTasks" type="radio"> Clear all Tasks </button>
    </div>
  </div>
    <div id="tasks" style="position: relative;">
    
    </div>
`
document.getElementById("ip2")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("id_of_button").click();
    }
});


setupCounter(document.querySelector('#Submit'),document.querySelector('#ClearTasks'),loadTask())
document.querySelector('#ClearTasks').addEventListener('click', () => clearTask())