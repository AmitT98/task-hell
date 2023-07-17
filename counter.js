import { saveTask } from "./saveTask"

export function setupCounter(element,el2,loadedTasks) {
  let counter = document.cookie.split(';').length
  let deadTasks = document.getElementById('grave').childNodes.length - 1;
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Press to add task#  ${counter+1 - deadTasks}`
    if(count > 0)
      saveTask()
    document.getElementById("ip1").value = ""
    document.getElementById("ip2").value = ""
    
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  //el2.addEventListener('click', () => setCounter(0))
  setCounter(0)
}
