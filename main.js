import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Welcome to task-hell</h1>
    <form method="get" id="form1">
    <input type="text" id="ip1">
    </form>
    <div class="card">
      <button id="Submit" type="button" form="form1"></button>
    </div>
  </div>
    <div id="tasks">
    
    </div>
`

setupCounter(document.querySelector('#Submit'))
