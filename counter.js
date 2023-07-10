import { saveTask } from "./saveTask"

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Current tasks: ${counter}`
    saveTask()
    document.getElementById("ip1").value = ""
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
