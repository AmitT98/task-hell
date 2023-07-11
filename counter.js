import { saveTask } from "./saveTask"

export function setupCounter(element,el2) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Current tasks: ${counter}`
    if(count > 0)
      saveTask()
    document.getElementById("ip1").value = ""
    document.getElementById("ip2").value = ""
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  el2.addEventListener('click', () => setCounter(0))
  setCounter(0)
}
