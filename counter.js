import { saveTask } from "./saveTask"

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    saveTask()
    document.getElementById("ip1").value = ""
    counter = count
    element.innerHTML = `Current tasks: ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
